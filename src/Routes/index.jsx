import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../Pages/Home'));
const Blog = lazy(() => import('../Pages/Blog'));

const routeConfig = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'blog',
    element: <Blog />,
  },
];

/*
  The `hydrated` prop is a sign the app has been loaded in the browser, and it is
  safe to begin rendering content. Otherwise, the document does not exist on the server
  and the app will error out.
*/
export default function Routing({ hydrated }) {
  if (hydrated) {
    // Create an array of Route components
    const renderedRoutes = routeConfig.map((route) => (
      <Route key={`${route.path}`} {...route}>
        {route.children && route.children.map((childRoute) => (
          <Route key={`${childRoute.path}`} {...childRoute} />
        ))}
      </Route>
    ));

    return <Routes>{renderedRoutes}</Routes>;
  }

  return null;
}
