/* eslint-disable no-undef */
import { GraphQLClient, ClientContext } from 'graphql-hooks';

export const graphQLClient = new GraphQLClient({
  url: '/r/graphql',
});

graphQLClient.setHeader('x-user-auth', 'my-custom-auth');

const GraphQLProvider = ClientContext.Provider;

export default GraphQLProvider;
