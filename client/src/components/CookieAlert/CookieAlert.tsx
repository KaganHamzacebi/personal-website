import moment from 'moment';
import { Cookies } from 'react-cookie';
import {
  useAppDispatch,
  useAppSelector
} from '../../app/hooks';
import {
  acceptCookie,
  selectCookieAlerter,
  showCookieAlert
} from '../../features/cookieAlertController/CookieAlertControllerSlice';
import { selectTheme } from '../../features/themeController/ThemeControllerSlice';
import './cookieAlert.scss';

function CookieAlert() {
  const cookies = new Cookies();
  const c = useAppSelector(selectCookieAlerter);
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  return (
    <div className={`cookieAlertMain ${c.show && 'show'} ${theme === 'dark' ? 'dark' : 'light'}`}>
      <p>
        This website using cookies to ensure giving best user experience. By continuing to use this website, you
        consent
        to the use of cookies.
      </p>
      <button
        className={`cookie-btn ${theme === 'dark' ? 'dark' : 'light'}`}
        onClick={() => {
          dispatch(showCookieAlert(false));
          dispatch(acceptCookie());
          cookies.set('cookiePreferences', { accepted: true }, {
            expires: moment()
              .add(1, 'y')
              .toDate()
          });
        }}
      >
        Okay
      </button>
    </div>
  );
}

export default CookieAlert;
