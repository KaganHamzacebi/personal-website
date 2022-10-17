import './home.scss';
import {useAppDispatch} from "../../app/hooks";
import {isReachedElement} from "../../features/scrollController/ScrollUtils";
import {setNav} from "../../features/scrollController/ScrollController";
// Partial Components
import {useEffect, useRef} from "react";
import Header from "../../components/Header/Header";
import SocialBar from "../../components/SocialBar/SocialBar";
// All Sections of Home screen
import AboutMeSection from "./AboutMeSection/AboutMeSection";
import SkillsSection from "./SkillsSection/SkillsSection";
import Footer from "../../components/Footer/Footer";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import {useSelector} from "react-redux";
import {selectTranslations} from "../../features/langConfig/LangConfigSlice";
import ContactMeSection from "./ContactMeSection/ContactMeSection";
import GoHomeButton from "../../components/GoHomeButton/GoHomeButton";
import {Helmet} from "react-helmet-async";

export function Home() {
    const aboutMeSectionRef = useRef(null);
    const skillsSectionRef = useRef(null);
    const projectsSectionRef = useRef(null);
    const contactMeSectionRef = useRef(null);

    const t = useSelector(selectTranslations);
    const dispatch = useAppDispatch();

    useEffect(() => {
        window.addEventListener('scroll', scrollTracker);
        return () => {
            window.removeEventListener('scroll', scrollTracker);
        };
    })

    /**
     * Scroll Listener that assigns which section is currently active
     */
    function scrollTracker() {
        const aboutMeSection = document.getElementById('aboutMeSection');
        const skillsSection = document.getElementById('skillsSection');
        const projectsSection = document.getElementById('projectsSection');
        const contactMeSection = document.getElementById('contactMeSection');

        if (isReachedElement(contactMeSection!)) {
            dispatch(setNav('contactMeSection'))
        } else if (isReachedElement(projectsSection!)) {
            dispatch(setNav('projectsSection'))
        } else if (isReachedElement(skillsSection!)) {
            dispatch(setNav('skillsSection'))
        } else if (isReachedElement(aboutMeSection!)) {
            dispatch(setNav('aboutMeSection'))
        }

    }

    return (
        <div>
            <Helmet>
                <title>Kağan Hamzaçebi - Home</title>
                <meta
                    name="description"
                    content="Personal playground, blog and portfolio website. I will demonstrate my experience and works
                    here."
                />
                <meta
                    name="keywords"
                    content="Kağan, Kagan, Hamzacebi, Hamzaçebi, Personal, Website, Portfolio, Blog, Fullstack, Web, Developer"
                />
                <link rel="canonical" href="/" />
            </Helmet>
            <div>
                <Header refs={{
                    aboutMeSectionRef,
                    skillsSectionRef,
                    projectsSectionRef,
                    contactMeSectionRef
                }}
                />
                <SocialBar/>
                <div className="main">
                    <section id="aboutMeSection" ref={aboutMeSectionRef} className="aboutMeSection">
                        <AboutMeSection refs={{
                            contactMeSectionRef: contactMeSectionRef
                        }}/>
                    </section>
                    <section id="skillsSection" ref={skillsSectionRef} className="skillsSection">
                        <h1>{t.homeScripts.skills_h1}</h1>
                        <h2>{t.homeScripts.skills_h2}</h2>
                        <SkillsSection/>
                    </section>
                    <section id="projectsSection" ref={projectsSectionRef} className="projectsSection">
                        <h1>{t.homeScripts.projects_h1}</h1>
                        <h2>{t.homeScripts.projects_h2}</h2>
                        <ProjectsSection/>
                    </section>
                    <section id="contactMeSection" ref={contactMeSectionRef} className="contactMeSection">
                        <h1>{t.homeScripts.contact_h1}</h1>
                        <h2>{t.homeScripts.contact_h2}</h2>
                        <ContactMeSection/>
                    </section>
                    <GoHomeButton refs={{
                        aboutMeSectionRef
                    }}/>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}