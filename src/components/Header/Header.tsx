import './header.scss'
import {useEffect, useState} from "react";
import {MdMenu} from 'react-icons/md'
import {useDispatch, useSelector} from "react-redux";
import {getScrollSelector, setScroll} from "../../features/scrollController/ScrollController";

function Header() {
    const [showHeader, setShowHeader] = useState(false);
    const s = useSelector(getScrollSelector)
    const dispatch = useDispatch();

    useEffect(() => {
        window.addEventListener('resize', handleWindowSize);

        return () => {
            window.removeEventListener('resize', handleWindowSize);
        };
    }, []);

    function handleWindowSize() {
        if (window.innerWidth > 800) {
            setShowHeader(false);
        }
    }

    return (
        <div>
            <MdMenu onClick={() => setShowHeader(!showHeader)} className="header__btn"/>
            <div className={`header ${showHeader && "active"}`}>
                <nav className="header__nav">
                    <ul>
                        <li>
                            <span
                                onClick={() => dispatch(setScroll('aboutMeSection'))}
                                className={`${s === 'aboutMeSection' && 'active'}`}
                            >
                                About Me
                            </span>
                        </li>
                        <li>
                            <span onClick={() => dispatch(setScroll('skillsSection'))}>Skills & Interests</span>
                        </li>
                        <li>
                            <span onClick={() => dispatch(setScroll('projectsSection'))}>Projects</span>
                        </li>
                        <li>
                            <span onClick={() => dispatch(setScroll('contactMeSection'))}>Contact Me</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;