import './themeChangerButton.scss';

import {BsFillMoonStarsFill} from 'react-icons/bs'
import {FaSun} from 'react-icons/fa';
import {useEffect} from "react";
import {useCookies} from "react-cookie";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectTheme, setCurrentTheme} from "../../features/themeController/ThemeControllerSlice";

function ThemeChangerButton() {

    const [cookies, setCookie] = useCookies(['theme']);
    const theme = useAppSelector(selectTheme);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setCurrentTheme(cookies.theme ? cookies.theme : 'dark'));
    })

    return (
        <div className="themeChangerButtonMain">
            <input
                type="checkbox"
                checked={theme === 'dark'}
                onChange={() => {
                    setCookie('theme', theme === 'dark' ? 'light' : 'dark');
                    dispatch(setCurrentTheme(theme));
                }}
                className="checkbox"
                id="chk"
            />
            <label className={`label ${theme === 'dark' ? 'dark' : 'light'}`} htmlFor="chk">
                <BsFillMoonStarsFill className="moon_icon"/>
                <FaSun className="sun_icon"/>
                <div className="ball"/>
            </label>
        </div>
    )
}

export default ThemeChangerButton;