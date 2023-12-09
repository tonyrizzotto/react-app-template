import { useEffect, useState } from 'react';
import { useQuery } from 'graphql-hooks';
import { BrowserRouter } from 'react-router-dom';
import { useSetEnvVarContext } from './contexts/envVarContext';
import Routing from './Routes';

import { ENV_QUERY } from './queries';

/*
  `App` component is for anything used to initialize the application after the
  document has loaded, or been `hydrated`, to the client.
 */
export default function App() {
  const [hydrated, setHydrated] = useState(false);
  const { setEnvVars } = useSetEnvVarContext();
  const { loading, data } = useQuery(ENV_QUERY);

  // After App has mounted, set hydrated to true
  useEffect(() => {
    setHydrated(true);
  }, []);

  // Aside from hydration, we only want the rerender the initial app if the ENV Query has finished.
  useEffect(() => {
    if (hydrated && !loading) setEnvVars(data.getPublicEnvVars);
  }, [loading]);

  /*
    We only want to mount our app if it has hydrated on the screen.
    For hydration to work correctly in SSR, the HTML must be exactly identical at first render
  */
  if (!hydrated) {
    return null;
  }
  return (
    <BrowserRouter>
      <Routing hydrated={hydrated} />
    </BrowserRouter>

  );
}
