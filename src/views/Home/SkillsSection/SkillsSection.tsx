import "./skillsSection.scss"
// Icons
import {
    FaReact,
    FaNodeJs,
    FaCss3Alt,
    FaHtml5,
}
    from 'react-icons/fa'

import {
    SiJavascript,
    SiTypescript,
    SiMongodb
}
    from 'react-icons/si'

import {TbSocial} from 'react-icons/tb'
import {useState} from "react";
import {selectTranslations} from "../../../features/languageController/LanguageControllerSlice";
import {useAppSelector} from "../../../app/hooks";
import {selectTheme} from "../../../features/themeController/ThemeControllerSlice";


function SkillsSection() {

    const [isReactDotActive, setIsReactDotActive] = useState(false);
    const [isNodeDotActive, setIsNodeDotActive] = useState(false);
    const [isHtmlCssDotActive, setIsHtmlCssDotActive] = useState(false);
    const [isJSTSDotActive, setIsJSTSDotActive] = useState(false);
    const [isMongoDotActive, setIsMongoDotActive] = useState(false);
    const [isIntegrationsDotActive, setIsIntegrationsDotActive] = useState(false);

    const t = useAppSelector(selectTranslations);
    const theme = useAppSelector(selectTheme);

    return (
        <div className="skillsMain">
            <div className="grid">
                <div className={`grid__item ${theme === 'dark' ? 'dark' : 'light'}`}
                     onMouseOver={() => setIsReactDotActive(true)}
                     onMouseLeave={() => setIsReactDotActive(false)}
                >
                    <div className={`grid__item__bg ${theme === 'dark' ? 'dark' : 'light'}`}>
                        <div className={`service-dot dark ${isReactDotActive && 'active'}`}>
                            <div className={`dot1 ${theme === 'dark' ? 'dark' : 'light'}`}/>
                            <div className={`dot2 ${theme === 'dark' ? 'dark' : 'light'}`}/>
                        </div>
                        <FaReact className="grid__item__bg__react-logo"/>
                    </div>
                    <h1 className="grid__item__react-h1">{t.skillsSectionScripts.react_h1}</h1>
                    <p className="dark">{t.skillsSectionScripts.react_desc}</p>
                </div>
                <div className={`grid__item ${theme === 'dark' ? 'dark' : 'light'}`}
                     onMouseOver={() => setIsNodeDotActive(true)}
                     onMouseLeave={() => setIsNodeDotActive(false)}
                >
                    <div className={`grid__item__bg ${theme === 'dark' ? 'dark' : 'light'}`}>
                        <div className={`service-dot dark ${isNodeDotActive && 'active'}`}>
                            <div className={`dot1 ${theme === 'dark' ? 'dark' : 'light'}`}/>
                            <div className={`dot2 ${theme === 'dark' ? 'dark' : 'light'}`}/>
                        </div>
                        <FaNodeJs className="grid__item__bg__nodejs-logo"/>
                    </div>
                    <h1 className="grid__item__nodejs-h1">{t.skillsSectionScripts.node_h1}</h1>
                    <p className={`${theme === 'dark' ? 'dark' : 'light'}`}>{t.skillsSectionScripts.node_desc}</p>
                </div>
                <div className={`grid__item ${theme === 'dark' ? 'dark' : 'light'}`}
                     onMouseOver={() => setIsHtmlCssDotActive(true)}
                     onMouseLeave={() => setIsHtmlCssDotActive(false)}
                >
                    <div className={`grid__item__double-container ${theme === 'dark' ? 'dark' : 'light'}`}>
                        <div className='service-dot-double dark'>
                            <div className={`dot1-double dark ${isHtmlCssDotActive && 'active'}`}/>
                            <div className={`dot2-double dark ${isHtmlCssDotActive && 'active'}`}/>
                        </div>
                        <FaHtml5 className="grid__item__double-container__css"/>
                        <FaCss3Alt className="grid__item__double-container__html"/>
                    </div>
                    <h1 className="grid__item__htmlcss-h1"><span
                        className="html-h1">{t.skillsSectionScripts.html_h1}</span> <span
                        className="middle_text">&</span> <span className="css-h1">{t.skillsSectionScripts.css_h1}</span>
                    </h1>
                    <p className={`${theme === 'dark' ? 'dark' : 'light'}`}>{t.skillsSectionScripts.html_css_desc}</p>
                </div>
                <div className={`grid__item ${theme === 'dark' ? 'dark' : 'light'}`}
                     onMouseOver={() => setIsJSTSDotActive(true)}
                     onMouseLeave={() => setIsJSTSDotActive(false)}
                >
                    <div className={`grid__item__double-container ${theme === 'dark' ? 'dark' : 'light'}`}>
                        <div className={`service-dot-double ${theme === 'dark' ? 'dark' : 'light'}`}>
                            <div
                                className={`dot1-double ${theme === 'dark' ? 'dark' : 'light'} ${isJSTSDotActive && 'active'}`}/>
                            <div
                                className={`dot2-double ${theme === 'dark' ? 'dark' : 'light'} ${isJSTSDotActive && 'active'}`}/>
                        </div>
                        <SiJavascript className="grid__item__double-container__js"/>
                        <SiTypescript className="grid__item__double-container__ts"/>
                    </div>
                    <h1 className="grid__item__tsjs-h1"><span className="js-h1">{t.skillsSectionScripts.js_h1}</span>
                        <span
                            className="middle_text">&</span> <span
                            className="ts-h1">{t.skillsSectionScripts.ts_h1}</span></h1>
                    <p className={`${theme === 'dark' ? 'dark' : 'light'}`}>{t.skillsSectionScripts.js_ts_desc}</p>
                </div>
                <div className={`grid__item ${theme === 'dark' ? 'dark' : 'light'}`}
                     onMouseOver={() => setIsMongoDotActive(true)}
                     onMouseLeave={() => setIsMongoDotActive(false)}
                >
                    <div className="grid__item__bg dark">
                        <div
                            className={`service-dot ${isMongoDotActive && 'active'} ${theme === 'dark' ? 'dark' : 'light'}`}>
                            <div className={`dot1 ${theme === 'dark' ? 'dark' : 'light'}`}/>
                            <div className={`dot2 ${theme === 'dark' ? 'dark' : 'light'}`}/>
                        </div>
                        <SiMongodb className="grid__item__bg__mongo-logo"/>
                    </div>
                    <h1 className="grid__item__mongo-h1">{t.skillsSectionScripts.mongo_h1}</h1>
                    <p className={`${theme === 'dark' ? 'dark' : 'light'}`}>{t.skillsSectionScripts.mongo_desc}</p>
                </div>
                <div className={`grid__item ${theme === 'dark' ? 'dark' : 'light'}`}
                     onMouseOver={() => setIsIntegrationsDotActive(true)}
                     onMouseLeave={() => setIsIntegrationsDotActive(false)}
                >
                    <div className={`grid__item__bg ${theme === 'dark' ? 'dark' : 'light'}`}>
                        <div
                            className={`service-dot ${isIntegrationsDotActive && 'active'} ${theme === 'dark' ? 'dark' : 'light'}`}>
                            <div className={`dot1 ${theme === 'dark' ? 'dark' : 'light'}`}/>
                            <div className={`dot2 ${theme === 'dark' ? 'dark' : 'light'}`}/>
                        </div>
                        <TbSocial className="grid__item__bg__integration-logo"/>
                    </div>
                    <h1 className="grid__item__integration-h1">{t.skillsSectionScripts.third_party_h1}</h1>
                    <p className={`${theme === 'dark' ? 'dark' : 'light'}`}>{t.skillsSectionScripts.third_party_desc}</p>
                </div>
            </div>
        </div>
    )
}

export default SkillsSection;