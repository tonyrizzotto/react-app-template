/* eslint-disable no-undef */
import { GraphQLClient, ClientContext } from 'graphql-hooks';

this.localStorage.setItem('authentication', 'my-custom-auth');
const getAuth = global.localStorage.getItem('authentication');

export const graphQLClient = new GraphQLClient({
  url: '/r/graphql',
});

graphQLClient.setHeader('x-user-auth', getAuth);

const GraphQLProvider = ClientContext.Provider;

export default GraphQLProvider;
