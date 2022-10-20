import './skillsSlider.scss';
import ReactTooltip from "react-tooltip";
import {A11y, Autoplay, Lazy} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/scss'
import "swiper/scss/lazy";
import "swiper/scss/autoplay";

// Icons
import {FaReact, FaHtml5, FaCss3Alt, FaNodeJs} from 'react-icons/fa';
import {GrGraphQl} from 'react-icons/gr';
import {
    SiRedux,
    SiTypescript,
    SiJest,
    SiWebpack,
    SiTailwindcss,
    SiJavascript,
    SiDocker,
    SiExpress,
    SiPython,
    SiOpencv,
    SiTensorflow,
    SiAnaconda,
    SiSpring,
    SiAndroid,
    SiFirebase,
    SiMongodb,
    SiAngular,
    SiDotnet,
    SiGit,
    SiJirasoftware,
    SiPostman,
    SiCsharp,
    SiJava
} from "react-icons/si";
import {useAppSelector} from "../../../../app/hooks";
import {selectTheme} from "../../../../features/themeController/ThemeControllerSlice";

function SkillsSlider() {
    const theme = useAppSelector(selectTheme);

    const skillIcons = [
        <FaReact data-tip="ReactJS" className={`skill-icon ${theme === 'dark' ? 'dark' : 'light'}`}/>,
        <SiRedux data-tip="Redux" className={`skill-icon ${theme === 'dark' ? 'dark' : 'light'}`}/>,
        <SiJavascript data-tip="JavaScript (ES6)" className={`skill-icon ${theme === 'dark' ? 'dark' : 'light'}`}/>,
        <SiTypescript data-tip="TypeScript" className={`skill-icon ${theme === 'dark' ? 'dark' : 'light'}`}/>,
        <FaHtml5 data-tip="HTML5" className={`skill-icon ${theme === 'dark' ? 'dark' : 'light'}`}/>,
        <FaCss3Alt data-tip="CSS3" className={`skill-icon ${theme === 'dark' ? 'dark' : 'light'}`}/>,
        <FaNodeJs data-tip="Node.JS" className={`skill-icon ${theme === 'dark' ? 'dark' : 'light'}`}/>,
        <SiExpress data-tip="Express Server" className={`skill-icon ${theme === 'dark' ? 'dark' : 'light'}`}/>,
        <SiTailwindcss data-tip="TailwindCSS" className={`skill-icon ${theme === 'dark' ? 'dark' : 'light'}`}/>,
        <SiDocker data-tip="Docker" className={`skill-icon ${theme === 'dark' ? 'dark' : 'light'}`}/>,
        <SiMongodb data-tip="MongoDB" className={`skill-icon ${theme === 'dark' ? 'dark' : 'light'}`}/>,
        <SiFirebase data-tip="Firebase" className={`skill-icon ${theme === 'dark' ? 'dark' : 'light'}`}/>,
        <GrGraphQl data-tip="GraphQL" className={`skill-icon ${theme === 'dark' ? 'dark' : 'light'}`}/>,
        <SiJest data-tip="Jest" className={`skill-icon ${theme === 'dark' ? 'dark' : 'light'}`}/>,
        <SiWebpack data-tip="Webpack" className={`skill-icon ${theme === 'dark' ? 'dark' : 'light'}`}/>,
        <SiPython data-tip="Python" className={`skill-icon ${theme === 'dark' ? 'dark' : 'light'}`}/>,
        <SiTensorflow data-tip="Tensorflow 2" className={`skill-icon ${theme === 'dark' ? 'dark' : 'light'}`}/>,
        <SiAnaconda data-tip="Anaconda" className={`skill-icon ${theme === 'dark' ? 'dark' : 'light'}`}/>,
        <SiOpencv data-tip="OpenCV" className={`skill-icon ${theme === 'dark' ? 'dark' : 'light'}`}/>,
        <SiSpring data-tip="Spring Boot" className={`skill-icon ${theme === 'dark' ? 'dark' : 'light'}`}/>,
        <SiAndroid data-tip="Android Native" className={`skill-icon ${theme === 'dark' ? 'dark' : 'light'}`}/>,
        <SiAngular data-tip="AngularJS & Angular 6+" className={`skill-icon ${theme === 'dark' ? 'dark' : 'light'}`}/>,
        <SiDotnet data-tip=".NET 3+" className={`skill-icon ${theme === 'dark' ? 'dark' : 'light'}`}/>,
        <SiGit data-tip="Git & TFS" className={`skill-icon ${theme === 'dark' ? 'dark' : 'light'}`}/>,
        <SiJirasoftware data-tip="JIRA" className={`skill-icon ${theme === 'dark' ? 'dark' : 'light'}`}/>,
        <SiPostman data-tip="Postman" className={`skill-icon ${theme === 'dark' ? 'dark' : 'light'}`}/>,
        <SiCsharp data-tip="C#" className={`skill-icon ${theme === 'dark' ? 'dark' : 'light'}`}/>,
        <SiJava data-tip="Java" className={`skill-icon ${theme === 'dark' ? 'dark' : 'light'}`}/>,
    ];

    return (
        <div className={`skillsSliderMain ${theme === 'dark' ? 'dark' : 'light'}`}>
            <ReactTooltip
                place={"bottom"}
                effect={"solid"}
                className="skillsSliderTooltip"
                backgroundColor={theme === 'dark' ? '#202020' : '#A0816C'}
                border={true}
                borderColor={theme === 'dark' ? '#757575' : '#eedbcc'}
            />
            <Swiper
                className="skills-slider"
                modules={[A11y, Lazy, Autoplay]}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                loop={true}
                breakpoints={{
                    0: {
                        slidesPerView: 3,
                    },
                    650: {
                        slidesPerView: 5,
                    },
                    1024: {
                        slidesPerView: 7,
                    },
                    1280: {
                        slidesPerView: 9,
                    },
                    1536: {
                        slidesPerView: 12,
                    }
                }}
            >
                {
                    skillIcons.map((s, index) => {
                        return (
                            <SwiperSlide className="icon-swiper" key={index}>
                                {s}
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default SkillsSlider;