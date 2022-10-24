import './cookieAlert.scss';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectTheme} from "../../features/themeController/ThemeControllerSlice";
import {
    acceptCookie,
    selectCookieAlerter,
    showCookieAlert
} from "../../features/cookieAlertController/CookieAlertControllerSlice";
import {useCookies} from "react-cookie";

function CookieAlert() {
    const [cookies, setCookie] = useCookies();
    const c = useAppSelector(selectCookieAlerter);
    const theme = useAppSelector(selectTheme);
    const dispatch = useAppDispatch();

    return (
        <div className={`cookieAlertMain ${c.show && 'show'} ${theme === 'dark' ? 'dark' : 'light'}`}>
            <p>This website using cookies to ensure giving best user experience. By continuing to use this website, you
                consent to the use of cookies.</p>
            <button
                className={`cookie-btn ${theme === 'dark' ? 'dark' : 'light'}`}
                onClick={() => {
                    dispatch(showCookieAlert(false));
                    dispatch(acceptCookie());
                    setCookie('cookiePreferences', {accepted: true});
                }}
            >
                Okay
            </button>
        </div>
    )
}

export default CookieAlert;