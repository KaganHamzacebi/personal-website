import './header.scss'
import {useEffect, useState} from "react";
import {MdMenu} from 'react-icons/md'
import {useSelector} from "react-redux";
import {getNavSelector, setNav} from "../../features/scrollController/ScrollController";
import {useAppDispatch} from "../../app/hooks";
import {scrollTo} from "../../features/scrollController/ScrollUtils";
import Logo from '../../assets/k-logo.png';

function Header(
    {
        refs
    }: any) {

    const [showHeader, setShowHeader] = useState(false);
    const s = useSelector(getNavSelector)
    const dispatch = useAppDispatch();

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
            <div className="header-btn-wrapper">
                <img src={Logo} className="header__nav__mobile__logo" />
                <MdMenu onClick={() => setShowHeader(!showHeader)} className="header__btn"/>
            </div>
            <div className={`header ${showHeader && "mobile"}`}>
                <nav className="header__nav">
                    <img src={Logo} onClick={() => setShowHeader(false)} className="header__nav__logo" />
                    <ul>
                        <li>
                            <span
                                onClick={() => setTimeout(() => {
                                    dispatch(setNav('aboutMeSection'));
                                    scrollTo(refs.aboutMeSectionRef);
                                    setShowHeader(false);
                                })}
                                className={`${s === 'aboutMeSection' && 'active'}`}
                            >
                                About Me
                            </span>
                        </li>
                        <li>
                            <span
                                onClick={() => setTimeout(() => {
                                    dispatch(setNav('skillsSection'));
                                    scrollTo(refs.skillsSectionRef);
                                    setShowHeader(false);
                                })}
                                className={`${s === 'skillsSection' && 'active'}`}
                            >
                                Skills
                            </span>
                        </li>
                        <li>
                            <span
                                onClick={() => setTimeout(() => {
                                    dispatch(setNav('projectsSection'));
                                    scrollTo(refs.projectsSectionRef);
                                    setShowHeader(false);
                                })}
                                className={`${s === 'projectsSection' && 'active'}`}
                            >
                                Projects
                            </span>
                        </li>
                        <li>
                            <span
                                onClick={() => setTimeout(() => {
                                    dispatch(setNav('contactMeSection'));
                                    scrollTo(refs.contactMeSectionRef);
                                    setShowHeader(false);
                                })}
                                className={`${s === 'contactMeSection' && 'active'}`}
                            >
                                Contact Me
                            </span>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;