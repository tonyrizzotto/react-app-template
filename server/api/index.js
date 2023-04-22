import mercurius from 'mercurius';
import MercuriusValidation from 'mercurius-validation';
import schema from './graphql/index.js';

export default async function api(server) {
  server.register(mercurius, {
    path: '/graphql',
    schema,
  });

  await server.register(MercuriusValidation);

  // Example Graphql
  server.get('/example', async (request, reply) => {
    const { name } = request.query;

    const query = `{ hello(name: "${name}") }`;
    const { data } = await reply.graphql(query);
    return reply.send(data.hello);
  });
}
