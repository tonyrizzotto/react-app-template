import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import Fastify from 'fastify';
import fastifyStatic from '@fastify/static';
// import FastifyVite from '@fastify/vite';
// import { renderToString } from 'react-dom/server';

export default async function createServer() {
  const server = Fastify({ logger: true });

  server.register(fastifyStatic, {
    root: join(fileURLToPath(new URL(import.meta.url)), '../../dist')
  })
  server.get('/d', async (request, reply) => {
    console.log(reply)
    await reply.sendFile('index.html')
  });

  return server
}

