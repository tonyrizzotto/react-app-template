import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import resolvers from './resolvers.js';

const typeDefs = fs.readFileSync(path.join(path.dirname(fileURLToPath(new URL(import.meta.url))), './typeDefs.graphql'), 'utf-8');

export default { resolvers, typeDefs };
