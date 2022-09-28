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
import {DetailedHTMLProps, HTMLAttributes, useEffect, useRef, useState} from "react";


function SkillsSection() {

    const [isReactDotActive, setIsReactDotActive] = useState(false);
    const [isNodeDotActive, setIsNodeDotActive] = useState(false);
    const [isHtmlCssDotActive, setIsHtmlCssDotActive] = useState(false);
    const [isJSTSDotActive, setIsJSTSDotActive] = useState(false);
    const [isMongoDotActive, setIsMongoDotActive] = useState(false);
    const [isIntegrationsDotActive, setIsIntegrationsDotActive] = useState(false);


    return (
        <div className="skillsMain">
            <div className="grid">
                <div className="grid__item"
                     onMouseOver={() => setIsReactDotActive(true)}
                     onMouseLeave={() => setIsReactDotActive(false)}
                >
                    <div className="grid__item__bg">
                        <div className={`service-dot ${isReactDotActive && 'active'}`}>
                            <div className="dot1"></div>
                            <div className="dot2"></div>
                        </div>
                        <FaReact className="grid__item__bg__react-logo"/>
                    </div>
                    <h1 className="grid__item__react-h1">React.JS</h1>
                    <p>React bla bla</p>
                    <button className="grid__item__btn">Read More</button>
                </div>
                <div className="grid__item"
                     onMouseOver={() => setIsNodeDotActive(true)}
                     onMouseLeave={() => setIsNodeDotActive(false)}
                >
                    <div className="grid__item__bg">
                        <div className={`service-dot ${isNodeDotActive && 'active'}`}>
                            <div className="dot1"></div>
                            <div className="dot2"></div>
                        </div>
                        <FaNodeJs className="grid__item__bg__nodejs-logo"/>
                    </div>
                    <h1 className="grid__item__nodejs-h1">Node.js</h1>
                    <p>React bla bla</p>
                    <button className="grid__item__btn">Read More</button>
                </div>
                <div className="grid__item"
                     onMouseOver={() => setIsHtmlCssDotActive(true)}
                     onMouseLeave={() => setIsHtmlCssDotActive(false)}
                >
                    <div className="grid__item__double-container">
                        <div className='service-dot-double'>
                            <div className={`dot1-double ${isHtmlCssDotActive && 'active'}`}></div>
                            <div className={`dot2-double ${isHtmlCssDotActive && 'active'}`}></div>
                        </div>
                        <FaHtml5 className="grid__item__double-container__css"/>
                        <FaCss3Alt className="grid__item__double-container__html"/>
                    </div>
                    <h1 className="grid__item__htmlcss-h1"><span className="html-h1">HTML</span> <span className="middle_text">&</span> <span className="css-h1">CSS</span></h1>
                    <p>React bla bla</p>
                    <button className="grid__item__btn">Read More</button>
                </div>
                <div className="grid__item"
                     onMouseOver={() => setIsJSTSDotActive(true)}
                     onMouseLeave={() => setIsJSTSDotActive(false)}
                >
                    <div className="grid__item__double-container">
                        <div className='service-dot-double'>
                            <div className={`dot1-double ${isJSTSDotActive && 'active'}`}></div>
                            <div className={`dot2-double ${isJSTSDotActive && 'active'}`}></div>
                        </div>
                        <SiJavascript className="grid__item__double-container__js"/>
                        <SiTypescript className="grid__item__double-container__ts"/>
                    </div>
                    <h1 className="grid__item__tsjs-h1"><span className="js-h1">JavaScript</span> <span className="middle_text">&</span> <span className="ts-h1">TypeScript</span></h1>
                    <p>React bla bla</p>
                    <button className="grid__item__btn">Read More</button>
                </div>
                <div className="grid__item"
                     onMouseOver={() => setIsMongoDotActive(true)}
                     onMouseLeave={() => setIsMongoDotActive(false)}
                >
                    <div className="grid__item__bg">
                        <div className={`service-dot ${isMongoDotActive && 'active'}`}>
                            <div className="dot1"></div>
                            <div className="dot2"></div>
                        </div>
                        <SiMongodb className="grid__item__bg__mongo-logo"/>
                    </div>
                    <h1 className="grid__item__mongo-h1">MongoDB</h1>
                    <p>React bla bla</p>
                    <button className="grid__item__btn">Read More</button>
                </div>
                <div className="grid__item"
                     onMouseOver={() => setIsIntegrationsDotActive(true)}
                     onMouseLeave={() => setIsIntegrationsDotActive(false)}
                >
                    <div className="grid__item__bg">
                        <div className={`service-dot ${isIntegrationsDotActive && 'active'}`}>
                            <div className="dot1"></div>
                            <div className="dot2"></div>
                        </div>
                        <TbSocial className="grid__item__bg__integration-logo"/>
                    </div>
                    <h1 className="grid__item__integration-h1">3rd Party Integrations</h1>
                    <p>React bla bla</p>
                    <button className="grid__item__btn">Read More</button>
                </div>
            </div>
        </div>
    )
}

export default SkillsSection;