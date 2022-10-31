import './home.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { isReachedElement } from '../../features/scrollController/ScrollUtils';
import { setNav } from '../../features/scrollController/ScrollControllerSlice';
import { Helmet } from 'react-helmet-async';
// Partial Components
import { useEffect, useRef } from 'react';
import Header from '../../components/Header/Header';
import SocialBar from '../../components/SocialBar/SocialBar';
// All Sections of Home screen
import AboutMeSection from './AboutMeSection/AboutMeSection';
import SkillsSection from './SkillsSection/SkillsSection';
import Footer from '../../components/Footer/Footer';
import ProjectsSection from './ProjectsSection/ProjectsSection';
import { selectTranslations } from '../../features/languageController/LanguageControllerSlice';
import ContactMeSection from './ContactMeSection/ContactMeSection';
import GoHomeButton from '../../components/GoHomeButton/GoHomeButton';
import { selectTheme } from '../../features/themeController/ThemeControllerSlice';
import { selectHeader } from '../../features/headerController/HeaderControllerSlice';

export function Home() {
    const aboutMeSectionRef = useRef(null);
    const skillsSectionRef = useRef(null);
    const projectsSectionRef = useRef(null);
    const contactMeSectionRef = useRef(null);

    const t = useAppSelector(selectTranslations);
    const theme = useAppSelector(selectTheme);
    const h = useAppSelector(selectHeader);
    const dispatch = useAppDispatch();

    useEffect(() => {
        window.addEventListener('scroll', scrollTracker);
        return () => {
            window.removeEventListener('scroll', scrollTracker);
        };
    });

    /**
     * Scroll Listener that assigns which section is currently active
     */
    function scrollTracker() {
        const aboutMeSection = document.getElementById('aboutMeSection');
        const skillsSection = document.getElementById('skillsSection');
        const projectsSection = document.getElementById('projectsSection');
        const contactMeSection = document.getElementById('contactMeSection');

        if (isReachedElement(contactMeSection!)) {
            dispatch(setNav('contactMeSection'));
        } else if (isReachedElement(projectsSection!)) {
            dispatch(setNav('projectsSection'));
        } else if (isReachedElement(skillsSection!)) {
            dispatch(setNav('skillsSection'));
        } else if (isReachedElement(aboutMeSection!)) {
            dispatch(setNav('aboutMeSection'));
        }
    }

    return (
        <div>
            <Helmet>
                <title>{t.homeScripts.title}</title>
                <meta name="description" content={t.homeScripts.description} />
                <meta name="keywords" content={t.homeScripts.keywords} />
                <link rel="canonical" href="/" />
            </Helmet>
            <div>
                <Header
                    refs={{
                        aboutMeSectionRef,
                        skillsSectionRef,
                        projectsSectionRef,
                        contactMeSectionRef
                    }}
                />
                <SocialBar />
                <div
                    className={`main ${theme === 'dark' ? 'dark' : 'light'} ${
                        h.minimized && 'wide'
                    }`}>
                    <section
                        id="aboutMeSection"
                        ref={aboutMeSectionRef}
                        className={`aboutMeSection ${theme === 'dark' ? 'dark' : 'light'}`}>
                        <AboutMeSection
                            refs={{
                                contactMeSectionRef: contactMeSectionRef
                            }}
                        />
                    </section>
                    <section
                        id="skillsSection"
                        ref={skillsSectionRef}
                        className={`skillsSection ${theme === 'dark' ? 'dark' : 'light'}`}>
                        <h1 className={`${theme === 'dark' ? 'dark' : 'light'}`}>
                            {t.homeScripts.skills_h1}
                        </h1>
                        <h2 className={`${theme === 'dark' ? 'dark' : 'light'}`}>
                            {t.homeScripts.skills_h2}
                        </h2>
                        <SkillsSection />
                    </section>
                    <section
                        id="projectsSection"
                        ref={projectsSectionRef}
                        className={`projectsSection ${theme === 'dark' ? 'dark' : 'light'}`}>
                        <h1 className={`${theme === 'dark' ? 'dark' : 'light'}`}>
                            {t.homeScripts.projects_h1}
                        </h1>
                        <h2 className={`${theme === 'dark' ? 'dark' : 'light'}`}>
                            {t.homeScripts.projects_h2}
                        </h2>
                        <ProjectsSection />
                    </section>
                    <section
                        id="contactMeSection"
                        ref={contactMeSectionRef}
                        className={`contactMeSection ${theme === 'dark' ? 'dark' : 'light'}`}>
                        <h1 className={`${theme === 'dark' ? 'dark' : 'light'}`}>
                            {t.homeScripts.contact_h1}
                        </h1>
                        <h2 className={`${theme === 'dark' ? 'dark' : 'light'}`}>
                            {t.homeScripts.contact_h2}
                        </h2>
                        <ContactMeSection />
                    </section>
                    <GoHomeButton
                        refs={{
                            aboutMeSectionRef
                        }}
                    />
                    <Footer />
                </div>
            </div>
        </div>
    );
}
