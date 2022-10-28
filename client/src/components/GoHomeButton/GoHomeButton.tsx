import './goHomeButton.scss';

import {scrollTo} from '../../features/scrollController/ScrollUtils'
import {BiUpArrowAlt} from 'react-icons/bi';
import {useEffect, useState} from "react";
import {useAppSelector} from "../../app/hooks";
import {selectTheme} from "../../features/themeController/ThemeControllerSlice";

function GoHomeButton({
                          refs
                      }: any) {

    const [isButtonVisible, setIsButtonVisible] = useState(false);
    const theme = useAppSelector(selectTheme);

    useEffect(() => {
        window.addEventListener('scroll', scrollTracker);
        return () => {
            window.removeEventListener('scroll', scrollTracker);
        };
    })

    function scrollTracker() {
        if (window.scrollY > 400) {
            setIsButtonVisible(true);
        } else {
            setIsButtonVisible(false);
        }
    }

    function goToHome() {
        scrollTo(refs.aboutMeSectionRef);
    }

    return (
        <div
            className={`goHomeButtonMain ${isButtonVisible && 'active'} ${theme === 'dark' ? 'dark' : 'light'}`}
            onClick={goToHome}
        >
            <BiUpArrowAlt className={`goHomeButtonMain__arrow ${theme === 'dark' ? 'dark' : 'light'}`}/>
        </div>
    )
}

export default GoHomeButton;