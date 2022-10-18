import './header.scss'
import {useEffect, useState} from "react";
import {MdMenu} from 'react-icons/md'
import {useSelector} from "react-redux";
import {getNavSelector, setNav} from "../../features/scrollController/ScrollController";
import {useAppDispatch} from "../../app/hooks";
import {scrollTo} from "../../features/scrollController/ScrollUtils";
import Logo from '../../assets/general/k-logo.png';
import {selectTranslations} from "../../features/langConfig/LangConfigSlice";

function Header(
    {
        refs
    }: any) {

    const [showHeader, setShowHeader] = useState(false);
    const s = useSelector(getNavSelector)
    const t = useSelector(selectTranslations);
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
                <img src={Logo} alt="header_mobile_logo" className="header__nav__mobile__logo"/>
                <MdMenu onClick={() => setShowHeader(!showHeader)} className="header__btn"/>
            </div>
            <div className={`header ${showHeader && "mobile"}`}>
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
                                className={`${s === 'aboutMeSection' && 'active'}`}
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
                                className={`${s === 'skillsSection' && 'active'}`}
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
                                className={`${s === 'projectsSection' && 'active'}`}
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
                                className={`${s === 'contactMeSection' && 'active'}`}
                            >
                                {t.headerFooterScripts.contact_me}
                            </span>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;