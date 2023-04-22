import { useRoutes } from 'react-router-dom';
import routeConfig from './routes';

/*
  Never have to touch this component, will always return routes from routeConfig
  https://reactrouter.com/en/main/hooks/use-routes#useroutes
 */
export default function Routes() {
  const appRoutes = useRoutes(routeConfig);
  return appRoutes;
}
