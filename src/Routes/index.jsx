import PropTypes from 'prop-types';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import routes from './routes';

/*
  The `hydrated` prop is a sign the app has been loaded in the browser and it is
  safe to begin rendering content. Otherwise, the document does not exist on the server
  and the app will error out.
*/
export default function Router({ hydrated }) {
  const router = createBrowserRouter(routes);
  if (hydrated) {
    return (
      <RouterProvider router={router} />
    );
  }

  return null;
}

Router.propTypes = {
  hydrated: PropTypes.bool.isRequired,
};
