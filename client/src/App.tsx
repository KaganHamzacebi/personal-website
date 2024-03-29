import {
  useEffect,
  useMemo,
  useState
} from 'react';
import { Cookies } from 'react-cookie';
import {
  useAppDispatch,
  useAppSelector
} from './app/hooks';
import CookieAlert from './components/CookieAlert/CookieAlert';
import {
  acceptCookie,
  selectCookieAlerter,
  showCookieAlert
} from './features/cookieAlertController/CookieAlertControllerSlice';
import Router from './utils/Router';

function App() {
  const cookies = useMemo(() => new Cookies(), []);
  const c = useAppSelector(selectCookieAlerter);
  const dispatch = useAppDispatch();
  const [cookieTimeout, setCookieTimeout] = useState<NodeJS.Timeout>();

  useEffect(() => {
    if(!cookies.get('cookiePreferences')) {
      setCookieTimeout(setTimeout(() => {
        dispatch(showCookieAlert(true));
      }, c.delay));
    }
    else {
      clearTimeout(cookieTimeout);
      dispatch(acceptCookie);
    }
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <div>
      {c.show && <CookieAlert />}
      <Router />
    </div>
  );
}

export default App;
