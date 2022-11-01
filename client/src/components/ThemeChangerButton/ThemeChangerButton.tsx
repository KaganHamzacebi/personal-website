import './themeChangerButton.scss';

import { BsFillMoonStarsFill } from 'react-icons/bs';
import { FaSun } from 'react-icons/fa';
import { useEffect } from 'react';
import { Cookies } from 'react-cookie';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectTheme, setCurrentTheme } from '../../features/themeController/ThemeControllerSlice';
import moment from 'moment';

function ThemeChangerButton() {
    const cookies = new Cookies();
    const theme = useAppSelector(selectTheme);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setCurrentTheme(cookies.get('theme') ? cookies.get('theme') : 'dark'));
    });

    return (
        <div className="themeChangerButtonMain">
            <input
                type="checkbox"
                checked={theme === 'dark'}
                onChange={() => {
                    cookies.set('theme', theme === 'dark' ? 'light' : 'dark', {
                        expires: moment().add(1, 'y').toDate(),
                    });
                    dispatch(setCurrentTheme(theme === 'dark' ? 'light' : 'dark'));
                }}
                className="checkbox"
                id="chk"
            />
            <label className={`label ${theme === 'dark' ? 'dark' : 'light'}`} htmlFor="chk">
                <BsFillMoonStarsFill className="moon_icon" />
                <FaSun className="sun_icon" />
                <div className="ball" />
            </label>
        </div>
    );
}

export default ThemeChangerButton;
