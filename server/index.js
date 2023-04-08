import createServer from './server.js';

const start = async () => {
  const server = createServer();

  (await server).listen({ port: 3000 })
}

start()
