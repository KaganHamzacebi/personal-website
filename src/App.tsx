import Router from "./utils/Router";
import CookieAlert from "./components/CookieAlert/CookieAlert";
import {useAppDispatch, useAppSelector} from "./app/hooks";
import {
    acceptCookie,
    selectCookieAlerter,
    showCookieAlert
} from "./features/cookieAlertController/CookieAlertControllerSlice";
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";

function App() {
    const [cookies] = useCookies(['cookiePreferences']);
    const c = useAppSelector(selectCookieAlerter);
    const dispatch = useAppDispatch();
    const [cookieTimeout, setCookieTimeout] = useState<NodeJS.Timeout>();

    useEffect(() => {
        if (!cookies.cookiePreferences) {
            setCookieTimeout(
                setTimeout(() => {
                    dispatch(showCookieAlert(true));
                }, c.delay)
            )
        } else {
            clearTimeout(cookieTimeout);
            dispatch(acceptCookie);
        }
    // eslint-disable-next-line
    }, [cookies.cookiePreferences, dispatch]);

    return (
        <div>
            {
                c.show &&
                <CookieAlert/>
            }
            <Router/>
        </div>
    );
}

export default App;
