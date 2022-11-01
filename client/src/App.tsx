import Router from './utils/Router';
import CookieAlert from './components/CookieAlert/CookieAlert';
import {
  useAppDispatch,
  useAppSelector
} from './app/hooks';
import {
  acceptCookie,
  selectCookieAlerter,
  showCookieAlert
} from './features/cookieAlertController/CookieAlertControllerSlice';
import {
  useEffect,
  useMemo,
  useState
} from 'react';
import { Cookies } from 'react-cookie';

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
  }, [c.delay, cookieTimeout, cookies, dispatch]);

  return (<div>
    {c.show && <CookieAlert />}
    <Router />
  </div>);
}

export default App;
