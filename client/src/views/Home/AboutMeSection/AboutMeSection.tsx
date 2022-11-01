import type { RefObject } from 'react';
import ReactGA from 'react-ga4';
import { useAppSelector } from '../../../app/hooks';
import Resume from '../../../assets/general/KaganHamzacebiResume.pdf';
import profilePhoto from '../../../assets/general/profilePhoto.png';
import { selectTranslations } from '../../../features/languageController/LanguageControllerSlice';
import { scrollTo } from '../../../features/scrollController/ScrollUtils';
import { selectTheme } from '../../../features/themeController/ThemeControllerSlice';
import './aboutMeSection.scss';

function AboutMeSection({
  refs
}: {
  refs: {
    contactMeSectionRef: RefObject<HTMLElement>;
  };
}) {
  const t = useAppSelector(selectTranslations);
  const theme = useAppSelector(selectTheme);

  return (
    <div className={`aboutMeMain ${theme === 'dark' ? 'dark' : 'light'}`}>
      <img
        className={`aboutMeMain__pp ${theme === 'dark' ? 'dark' : 'light'}`}
        alt="profile_photo"
        src={profilePhoto}
      />
      <h2 className={`aboutMeMain__name ${theme === 'dark' ? 'dark' : 'light'}`}>
        {t.aboutMeSectionScripts.name}
        <span className={`aboutMeMain__surname ${theme === 'dark' ? 'dark' : 'light'}`}>
          {t.aboutMeSectionScripts.surname}
        </span>
      </h2>
      <h1 className="aboutMeMain__webdev">{t.aboutMeSectionScripts.webdev}</h1>
      <p className={`aboutMeMain__bio ${theme === 'dark' ? 'dark' : 'light'}`}>
        {t.aboutMeSectionScripts.bio_first_part}
        <a
          className={`aboutMeMain__bio__unilink ${theme === 'dark' ? 'dark' : 'light'}`}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.etu.edu.tr/en"
        >
          {' '}
          {t.aboutMeSectionScripts.bio_unilink}{' '}
        </a>
        {t.aboutMeSectionScripts.bio_second_part}
      </p>
      <div className="btnContainer">
        <button
          className={`btnContainer__contactBtn ${theme === 'dark' ? 'dark' : 'light'}`}
          onClick={() => {
            scrollTo(refs.contactMeSectionRef);
            ReactGA.event({
              category: 'AboutMeSection',
              action: 'Resume'
            });
          }}
        >
          {t.aboutMeSectionScripts.contact_me}
        </button>
        <a
          className={`btnContainer__resumeBtn ${theme === 'dark' ? 'dark' : 'light'}`}
          href={Resume}
          onClick={() => ReactGA.event({
            category: 'AboutMeSection',
            action: 'Resume'
          })}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.aboutMeSectionScripts.resume}
        </a>
      </div>
    </div>
  );
}

export default AboutMeSection;
