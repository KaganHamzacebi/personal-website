/**
 * Router Config File
 */

import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import {Home} from "../views/Home/Home";
import {useEffect} from "react";
import ReactGA from "react-ga";

function Router() {

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
    ]);

    return (
        <RouterProvider router={router} />
    )
}

export default Router;