export default {
  Query: {
    hello: async (_, { name }) => `Hello, ${name}`,
  },
};
