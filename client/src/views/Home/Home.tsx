// Partial Components
import {
  useEffect,
  useRef
} from 'react';
import { Helmet } from 'react-helmet-async';
import {
  useAppDispatch,
  useAppSelector
} from '../../app/hooks';
import Footer from '../../components/Footer/Footer';
import GoHomeButton from '../../components/GoHomeButton/GoHomeButton';
import Header from '../../components/Header/Header';
import SocialBar from '../../components/SocialBar/SocialBar';
import { selectHeader } from '../../features/headerController/HeaderControllerSlice';
import { selectTranslations } from '../../features/languageController/LanguageControllerSlice';
import { setNav } from '../../features/scrollController/ScrollControllerSlice';
import { isReachedElement } from '../../features/scrollController/ScrollUtils';
import { selectTheme } from '../../features/themeController/ThemeControllerSlice';
// All Sections of Home screen
import AboutMeSection from './AboutMeSection/AboutMeSection';
import ContactMeSection from './ContactMeSection/ContactMeSection';
import './home.scss';
import ProjectsSection from './ProjectsSection/ProjectsSection';
import SkillsSection from './SkillsSection/SkillsSection';

export function Home() {
  const aboutMeSectionRef = useRef<HTMLElement>(null);
  const skillsSectionRef = useRef<HTMLElement>(null);
  const projectsSectionRef = useRef<HTMLElement>(null);
  const contactMeSectionRef = useRef<HTMLElement>(null);

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

    if(contactMeSection && isReachedElement(contactMeSection))
      dispatch(setNav('contactMeSection'));

    else if(projectsSection && isReachedElement(projectsSection))
      dispatch(setNav('projectsSection'));

    else if(skillsSection && isReachedElement(skillsSection))
      dispatch(setNav('skillsSection'));

    else if(aboutMeSection && isReachedElement(aboutMeSection))
      dispatch(setNav('aboutMeSection'));


  }

  return (
    <div>
      <Helmet>
        <title>{t.homeScripts.title}</title>
        <meta name="description" content={t.homeScripts.description} />
        <meta name="keywords" content={t.homeScripts.keywords} />
        <link rel="canonical" href="https://kaganhamzacebi.com/" />
        <link rel="canonical" href="http://kaganhamzacebi.com/" />
        <link rel="canonical" href="https://kaganhamzacebi.com:443/" />
        <link rel="canonical" href="https://www.kaganhamzacebi.com/" />
        <link rel="canonical" href="http://www.kaganhamzacebi.com/" />
        <link rel="canonical" href="https://www.kaganhamzacebi.com:443/" />
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
        <div className={`main ${theme === 'dark' ? 'dark' : 'light'} ${h.minimized && 'wide'}`}>
          <section
            id="aboutMeSection"
            ref={aboutMeSectionRef}
            className={`aboutMeSection ${theme === 'dark' ? 'dark' : 'light'}`}
          >
            <AboutMeSection
              refs={{
                contactMeSectionRef: contactMeSectionRef
              }}
            />
          </section>
          <section
            id="skillsSection"
            ref={skillsSectionRef}
            className={`skillsSection ${theme === 'dark' ? 'dark' : 'light'}`}
          >
            <h1 className={`${theme === 'dark' ? 'dark' : 'light'}`}>{t.homeScripts.skills_h1}</h1>
            <h2 className={`${theme === 'dark' ? 'dark' : 'light'}`}>{t.homeScripts.skills_h2}</h2>
            <SkillsSection />
          </section>
          <section
            id="projectsSection"
            ref={projectsSectionRef}
            className={`projectsSection ${theme === 'dark' ? 'dark' : 'light'}`}
          >
            <h1 className={`${theme === 'dark' ? 'dark' : 'light'}`}>{t.homeScripts.projects_h1}</h1>
            <h2 className={`${theme === 'dark' ? 'dark' : 'light'}`}>{t.homeScripts.projects_h2}</h2>
            <ProjectsSection />
          </section>
          <section
            id="contactMeSection"
            ref={contactMeSectionRef}
            className={`contactMeSection ${theme === 'dark' ? 'dark' : 'light'}`}
          >
            <h1 className={`${theme === 'dark' ? 'dark' : 'light'}`}>{t.homeScripts.contact_h1}</h1>
            <h2 className={`${theme === 'dark' ? 'dark' : 'light'}`}>{t.homeScripts.contact_h2}</h2>
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
