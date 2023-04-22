import { GraphQLClient, ClientContext } from 'graphql-hooks';
import Home from './Pages/Home';

const client = new GraphQLClient({
  url: '/r/graphql',
});

export default function createApp() {
  return (
    <ClientContext.Provider value={client}>
      <Home />
    </ClientContext.Provider>
  );
}
