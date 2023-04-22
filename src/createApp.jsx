import { StrictMode } from 'react';
import EnvironmentContext from './contexts/envVarContext';
import GraphQLContext, { graphQLClient } from './contexts/graphQLContext';
import App from './App';

export default function createApp() {
  return (
    <StrictMode>
      <GraphQLContext value={graphQLClient}>
        <EnvironmentContext>
          <App />
        </EnvironmentContext>
      </GraphQLContext>
    </StrictMode>
  );
}
