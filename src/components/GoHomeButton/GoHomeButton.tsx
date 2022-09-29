import './goHomeButton.scss';

import {scrollTo} from '../../features/scrollController/ScrollUtils'
import {BiUpArrowAlt} from 'react-icons/bi';
import {useEffect, useState} from "react";

function GoHomeButton({
                          refs
                      }: any) {

    const [isButtonVisible, setIsButtonVisible] = useState(false);

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
            className={`goHomeButtonMain ${isButtonVisible && 'active'}`}
            onClick={goToHome}
        >
            <BiUpArrowAlt className='goHomeButtonMain__arrow'/>
        </div>
    )
}

export default GoHomeButton;