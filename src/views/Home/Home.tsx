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

export function Home() {
    const aboutMeSectionRef = useRef(null);
    const skillsSectionRef = useRef(null);
    const projectsSectionRef = useRef(null);
    const contactMeSectionRef = useRef(null);
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
        }
        else if (isReachedElement(projectsSection!)) {
            dispatch(setNav('projectsSection'))
        }
        else if (isReachedElement(skillsSection!)) {
            dispatch(setNav('skillsSection'))
        }
        else if (isReachedElement(aboutMeSection!)) {
            dispatch(setNav('aboutMeSection'))
        }

    }

    return (
        <div>
            <Header refs={{
                aboutMeSectionRef,
                skillsSectionRef,
                projectsSectionRef,
                contactMeSectionRef
            }}
            />
            <div className="main">
                <section id="aboutMeSection" ref={aboutMeSectionRef} className="aboutMeSection">
                    <AboutMeSection />
                    <SocialBar />
                </section>
                <section id="skillsSection" ref={skillsSectionRef} className="skillsSection">
                    <h1>My Skills</h1>
                    <h2>My core skills that i like to use</h2>
                    <SkillsSection />
                </section>
                <section id="projectsSection" ref={projectsSectionRef} className="projectsSection">
                    <h1>Projects</h1>
                    <h2>My projects that i worked on</h2>
                    <ProjectsSection />
                </section>
                <section id="contactMeSection" ref={contactMeSectionRef} className="contactMeSection">
                    <h1>Contact Me</h1>
                    <h2>My projects that i worked on</h2>
                    <ProjectsSection />
                </section>
                <Footer />
            </div>
        </div>
    )
}