import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import Fastify from 'fastify';
import FastifyVite from '@fastify/vite';
import { renderToString } from 'react-dom/server';
import { v4 } from 'uuid';
import api from './api/index.js';
import loggingConfig, { shouldNotLogOutput } from './utils/index.js';

export default async function createServer({ environment }) {
  const server = Fastify({
    disableRequestLogging: true,
    ignoreTrailingSlash: true, // supports both trailing and none
    logger: loggingConfig[environment],
    requestIdHeader: 'x-request-id',
    requestIdLogLabel: 'requestId',
    genReqId: () => v4(),
  });
  const onRequestLogging = async (request) => {
    // In production, lets not log any request to the assets directory
    if (shouldNotLogOutput(request.url)) {
      return;
    }
    request.log.info({
      message: `Request received: ${request.method} ${request.url}`,
      headers: request.headers,
      method: request.method,
      url: request.url,
    });
  };

  server.addHook('onRequest', onRequestLogging);

  server.addHook('onResponse', async (req, res) => {
    if (shouldNotLogOutput(req.url)) {
      return;
    }
    req.log.info({
      message: `Request completed: ${req.method} ${req.url} ${Math.round(res.getResponseTime())}ms`,
      headers: req.headers,
      method: req.method,
      url: req.url,
      response: res,
    });
  });

  // Register entire api
  server.register(api, {
    prefix: '/r',
  });

  // SSR w/Vite
  await server.register(FastifyVite, {
    dev: environment !== 'production',
    /*
      `root` is pulled from the vite.config.js. `path.join` is required as @fastify/vite expects
       your server to be in the root folder of the project, and not nested.
     */
    root: join(dirname(fileURLToPath(new URL(import.meta.url))), '../'),
    createRenderFunction({ createApp }) {
      return () => ({
        element: renderToString(createApp()),
      });
    },
  });

  /*
    Renders the application via SSR
  */
  server.get('/*', (request, reply) => {
    reply.html(reply.render());
  });

  return server;
}
