/**
 * Router Config File
 */

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {Home} from "../views/Home/Home";
import {useEffect} from "react";
import ReactGA from "react-ga4";
import NotFound from "../views/NotFound/NotFound";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {selectLoading, setLoadingActive} from "../features/loadingController/LoadingControllerSlice";
import LoadingScreen from "../views/LoadingScreen/LoadingScreen";
import {selectCookieAlerter} from "../features/cookieAlertController/CookieAlertControllerSlice";

function Router() {
    const l = useAppSelector(selectLoading);
    const c = useAppSelector(selectCookieAlerter);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (c.accepted) {
            ReactGA.send({hitType: "pageview", page: window.location.pathname + window.location.search});
        }
    });

    useEffect(() => {
        dispatch(setLoadingActive(true));

        setTimeout(() => {
            dispatch(setLoadingActive(false));
        }, 1000)
    }, [dispatch])

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
            errorElement: <NotFound/>
        },
    ]);

    return (
        <div>
            {
                l.active &&
                <LoadingScreen/>
            }
            <RouterProvider router={router}/>
        </div>
    )
}

export default Router;