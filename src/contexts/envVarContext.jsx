import {
  createContext,
  useMemo,
  useState,
  useCallback,
  useContext,
} from 'react';

const EnvVarContext = createContext({});

/*
  Explicitly used to access Environment Variables in the application.
*/
export function useEnvVarContext() {
  const context = useContext(EnvVarContext);

  if (typeof context === 'undefined') {
    throw new Error('useEnvVarContext must be used within EnvVarContext.Provider.');
  }

  const { envVars } = context;

  const memoizedEnv = useMemo(() => envVars, [envVars]);
  return { envVars: memoizedEnv };
}

/*
  Explicitly used to set Environment Variables in the application.
*/
export function useSetEnvVarContext() {
  const context = useContext(EnvVarContext);

  if (typeof context === 'undefined') {
    throw new Error('useSetEnvVarContext must be used within EnvVarContext.Provider.');
  }

  const { setEnvVars } = context;
  return { setEnvVars };
}
// eslint-disable-next-line react/prop-types
export default function EnvironmentContext({ children }) {
  const [envVars, setEnvVars] = useState({});

  const handleSetEnvVars = useCallback((data) => setEnvVars(data), [setEnvVars]);
  const context = useMemo(() => ({ envVars, setEnvVars: handleSetEnvVars }), [envVars]);

  return (
    <EnvVarContext.Provider value={context}>
      {children}
    </EnvVarContext.Provider>
  );
}
