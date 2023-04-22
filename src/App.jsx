import GraphQLContext, { graphQLClient } from './contexts/graphQLContext';
import Home from './Pages/Home';

export default function createApp() {
  return (
    <GraphQLContext value={graphQLClient}>
      <Home />
    </GraphQLContext>
  );
}
