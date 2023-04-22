import MercuriusValidation from 'mercurius-validation';
import { mergeSchemas, addResolversToSchema } from '@graphql-tools/schema';
import { mergeResolvers } from '@graphql-tools/merge';

import EnvironmentVariables from './environmentVariables/index.js';
import Example from './example/index.js';

const schemas = [];
const resolverStack = [];
const typeDefs = [
  MercuriusValidation.graphQLTypeDefs,
];

// Add each schema module to this array
[
  EnvironmentVariables,
  Example,
].forEach(({ schema: s, typeDefs: t, resolvers: r }) => {
  if (r) resolverStack.push(r);
  if (s) schemas.push(s);
  if (t) typeDefs.push(t);
});

const resolvers = mergeResolvers(resolverStack);

const schema = addResolversToSchema({
  schema: mergeSchemas({
    schemas,
    typeDefs,
  }),
  resolvers,
});

export default schema;
