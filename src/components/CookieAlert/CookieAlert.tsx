import './cookieAlert.scss';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectTheme} from "../../features/themeController/ThemeControllerSlice";
import {
    acceptCookie,
    rejectCookie,
    selectCookieAlerter,
    showCookieAlert
} from "../../features/cookieAlertController/CookieAlertControllerSlice";
import {useCookies} from "react-cookie";

function CookieAlert() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [cookies, setCookie, removeCookie] = useCookies();
    const c = useAppSelector(selectCookieAlerter);
    const theme = useAppSelector(selectTheme);
    const dispatch = useAppDispatch();

    return (
        <div className={`cookieAlertMain ${c.show && 'show'} ${theme === 'dark' ? 'dark' : 'light'}`}>
            <p>This website use cookies for user experience and Google Analytics</p>
            <div className="cookie-btn-wrapper">
                <button
                    className={`cookie-btn ${theme === 'dark' ? 'dark' : 'light'}`}
                    onClick={() => {
                        dispatch(showCookieAlert(false));
                        dispatch(acceptCookie());
                        setCookie('cookiePreferences', {accepted: true});
                    }}
                >
                    Accept
                </button>
                <button
                    className={`cookie-btn ${theme === 'dark' ? 'dark' : 'light'}`}
                    onClick={() => {
                        dispatch(showCookieAlert(false));
                        dispatch(rejectCookie());
                        setCookie('cookiePreferences', {rejected: true});
                        removeCookie('header');
                        removeCookie('theme');
                    }}
                >
                    Reject
                </button>
            </div>
        </div>
    )
}

export default CookieAlert;