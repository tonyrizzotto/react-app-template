import createServer from './server.js';
import ENV from '../config/index.js';

const {
  default: {
    environment,
    port,
    address: host,
  },
} = ENV;

const start = async () => {
  const server = await createServer({ environment });

  await server.vite.ready();

  // Should only print routes in Local Env
  if (environment === 'local') {
    // eslint-disable-next-line no-console
    console.log(await server.printRoutes());
  }
  await server.listen({ port, host });
};

start();
