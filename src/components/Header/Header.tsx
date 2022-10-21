import './header.scss'
import {useEffect, useState} from "react";
import {MdMenu} from 'react-icons/md'
import {getNavSelector, setNav} from "../../features/scrollController/ScrollControllerSlice";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {scrollTo} from "../../features/scrollController/ScrollUtils";
import Logo from '../../assets/general/k-logo.png';
import {selectTranslations} from "../../features/languageController/LanguageControllerSlice";
import ThemeChangerButton from "../ThemeChangerButton/ThemeChangerButton";
import {selectTheme} from "../../features/themeController/ThemeControllerSlice";
import {BsBoxArrowInLeft} from 'react-icons/bs';
import {selectHeader, setMinimize} from "../../features/headerController/HeaderControllerSlice";
import {useCookies} from "react-cookie";


function Header(
    {
        refs
    }: any) {

    const [cookies, setCookie] = useCookies(['header']);
    const [showHeader, setShowHeader] = useState<boolean>(false);
    const [showMinimizeButton, setShowMinimizeButton] = useState<boolean>(false);
    const s = useAppSelector(getNavSelector)
    const t = useAppSelector(selectTranslations);
    const theme = useAppSelector(selectTheme);
    const h = useAppSelector(selectHeader);
    const dispatch = useAppDispatch();

    useEffect(() => {
        window.addEventListener('resize', handleWindowSize);

        return () => {
            window.removeEventListener('resize', handleWindowSize);
        };
    }, []);

    useEffect(() => {
        console.log(cookies.header?.minimized)
        if (cookies.header?.minimized) {
            dispatch(setMinimize(true));
        }
    }, [cookies.header])

    function handleWindowSize() {
        if (window.innerWidth > 800) {
            setShowHeader(false);
        }
    }

    return (
        <div>
            <div className={`header-btn-wrapper ${theme === 'dark' ? 'dark' : 'light'}`}>
                <img src={Logo} alt="header_mobile_logo"
                     className={`header__nav__mobile__logo ${theme === 'dark' ? 'dark' : 'light'}`}/>
                <div className="themeChangerMobileWrapper">
                    <ThemeChangerButton/>
                </div>
                <MdMenu onClick={() => setShowHeader(!showHeader)}
                        className={`header__btn ${theme === 'dark' ? 'dark' : 'light'}`}/>
            </div>
            <div
                className={`header ${showHeader && "mobile"} ${h.minimized && 'minimized'} ${theme === 'dark' ? 'dark' : 'light'}`}
                onMouseEnter={() => setShowMinimizeButton(true)}
                onMouseLeave={() => setShowMinimizeButton(false)}
                onClick={() => {
                    if (h.minimized) {
                        dispatch(setMinimize(false));
                        setCookie('header', {minimized: false});
                    }
                }}
            >
                {/* Header Minimize Button */}
                <div className="header-minimize-button"
                     onClick={() => {
                         dispatch(setMinimize(!h.minimized));
                         setCookie('header', {minimized: true});
                     }}>
                    <BsBoxArrowInLeft
                        className={`header-minimize-button__icon ${theme === 'dark' ? 'dark' : 'light'} ${showMinimizeButton && 'show'} ${h.minimized && 'minimized'} ${showHeader && 'invisible'}`}/>
                </div>
                <nav className="header__nav">
                    <img src={Logo} alt="header_logo" onClick={() => setShowHeader(false)}
                         className="header__nav__logo"/>
                    <ul>
                        <li>
                            <span
                                onClick={() => setTimeout(() => {
                                    dispatch(setNav('aboutMeSection'));
                                    scrollTo(refs.aboutMeSectionRef);
                                    setShowHeader(false);
                                })}
                                className={`${s === 'aboutMeSection' && 'active'} ${theme === 'dark' ? 'dark' : 'light'}`}
                            >
                                {t.headerFooterScripts.about_me}
                            </span>
                        </li>
                        <li>
                            <span
                                onClick={() => setTimeout(() => {
                                    dispatch(setNav('skillsSection'));
                                    scrollTo(refs.skillsSectionRef);
                                    setShowHeader(false);
                                })}
                                className={`${s === 'skillsSection' && 'active'} ${theme === 'dark' ? 'dark' : 'light'}`}
                            >
                                {t.headerFooterScripts.skills}
                            </span>
                        </li>
                        <li>
                            <span
                                onClick={() => setTimeout(() => {
                                    dispatch(setNav('projectsSection'));
                                    scrollTo(refs.projectsSectionRef);
                                    setShowHeader(false);
                                })}
                                className={`${s === 'projectsSection' && 'active'} ${theme === 'dark' ? 'dark' : 'light'}`}
                            >
                                {t.headerFooterScripts.projects}
                            </span>
                        </li>
                        <li>
                            <span
                                onClick={() => setTimeout(() => {
                                    dispatch(setNav('contactMeSection'));
                                    scrollTo(refs.contactMeSectionRef);
                                    setShowHeader(false);
                                })}
                                className={`${s === 'contactMeSection' && 'active'} ${theme === 'dark' ? 'dark' : 'light'}`}
                            >
                                {t.headerFooterScripts.contact_me}
                            </span>
                        </li>
                    </ul>
                </nav>
                <div className="themeChangerWrapper">
                    <ThemeChangerButton/>
                </div>
            </div>
        </div>
    )
}

export default Header;