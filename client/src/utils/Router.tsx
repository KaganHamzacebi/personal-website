/**
 * Router Config File
 */

import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import {
  useAppDispatch,
  useAppSelector
} from '../app/hooks';
import {
  selectLoading,
  setLoadingActive
} from '../features/loadingController/LoadingControllerSlice';
import { Home } from '../views/Home/Home';
import LoadingScreen from '../views/LoadingScreen/LoadingScreen';
import NotFound from '../views/NotFound/NotFound';

function Router() {
  const l = useAppSelector(selectLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname + window.location.search
    });
  });

  useEffect(() => {
    dispatch(setLoadingActive(true));

    setTimeout(() => {
      dispatch(setLoadingActive(false));
    }, 1000);
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <NotFound />
    }
  ]);

  return (
    <div>
      {
        l.active && <LoadingScreen />
      }
      <RouterProvider router={router} />
    </div>
  );
}

export default Router;
