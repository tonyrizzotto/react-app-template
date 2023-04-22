import fs from 'node:fs';
import path from 'node:path';
import resolvers from './resolvers.js';

const typeDefs = fs.readFileSync(path.resolve('server/api/graphql/example/typeDefs.graphql'), 'utf-8');

export default { resolvers, typeDefs };
