import { StrictMode } from 'react';
import EnvironmentContext from './contexts/envVarContext';
import GraphQLContext, { graphQLClient } from './contexts/graphQLContext';
import App from './App';

/*
  `createApp` is for anything that does not need the window object or document, specifically
  as it's not loaded from the server yet.
*/
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
