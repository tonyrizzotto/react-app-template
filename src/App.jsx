import { StrictMode, useEffect, useState } from 'react';
import GraphQLContext, { graphQLClient } from './contexts/graphQLContext';
import Router from './Routes';

export default function App() {
  const [hydrated, setHydrated] = useState(false);

  // After App has mounted, set hydrated to true
  useEffect(() => {
    setHydrated(true);
  }, []);

  /*
    We only want to mount our app if it has hydrated on the screen.
    For hydration to work correctly in SSR, the HTML must be exactly identical at first render
  */
  if (!hydrated) {
    return null;
  }

  return (
    <StrictMode>
      <GraphQLContext value={graphQLClient}>
        <Router hydrated={hydrated} />
      </GraphQLContext>
    </StrictMode>
  );
}
