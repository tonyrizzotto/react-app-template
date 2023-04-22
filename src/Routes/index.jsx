import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import Routes from './RoutesList';

/*
  The `hydrated` prop is a sign the app has been loaded in the browser and it is
  safe to begin rendering content. Otherwise, the document does not exist on the server
  and the app will error out.
*/
export default function Router({ hydrated }) {
  if (hydrated) {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  }

  return null;
}

Router.propTypes = {
  hydrated: PropTypes.bool.isRequired,
};
