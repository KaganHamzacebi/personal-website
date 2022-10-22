import Router from "./utils/Router";
import CookieAlert from "./components/CookieAlert/CookieAlert";
import {useAppDispatch, useAppSelector} from "./app/hooks";
import {
    acceptCookie, rejectCookie,
    selectCookieAlerter,
    showCookieAlert
} from "./features/cookieAlertController/CookieAlertControllerSlice";
import {useEffect} from "react";
import {useCookies} from "react-cookie";

function App() {
    const [cookies] = useCookies(['cookiePreferences']);
    const c = useAppSelector(selectCookieAlerter);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!cookies.cookiePreferences) {
            setTimeout(() => {
                dispatch(showCookieAlert(true));
            }, c.delay)
        } else {
            if (cookies.cookiePreferences.accepted) dispatch(acceptCookie());
            if (cookies.cookiePreferences.rejected) dispatch(rejectCookie());
        }
    }, [dispatch])

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
