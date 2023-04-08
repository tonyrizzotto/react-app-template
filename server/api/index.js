import mercurius from 'mercurius';

const schema = `
  type Query {
    add(x: Int, y: Int): Int
  }
`;

const resolvers = {
  Query: {
    add: async (_, { x, y }) => x + y,
  },
};

export default async function api(server) {
  server.register(mercurius, {
    path: '/graphql',
    schema,
    resolvers,
  });

  // Example Graphql
  server.get('/example', async (req, reply) => {
    const query = '{ add(x: 2, y: 2) }';
    const { data } = await reply.graphql(query);
    return reply.send(data.add);
  });
}
