/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from '../Pages/Home';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
];

/*
  Never have to touch this component, will always return routes from routeConfig
  https://reactrouter.com/en/main/hooks/use-routes#useroutes
 */
export default function Routes() {
  const appRoutes = useRoutes(routes);
  return appRoutes;
}
