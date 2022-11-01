import type { IEnglishTranslates } from '../../features/languageController/LanguageControllerInterfaces';
import AboutMeSectionScripts from './AboutMeSectionScripts';
import ContactMeSectionScripts from './ContactMeSectionScripts';
import HeaderFooterScripts from './HeaderFooterScripts';
import HomeScripts from './HomeScripts';
import ProjectsSectionScripts from './ProjectsSectionScripts';
import SkillsSectionScripts from './SkillsSectionScripts';

const EnglishScripts: IEnglishTranslates = {
  homeScripts: HomeScripts,
  aboutMeSectionScripts: AboutMeSectionScripts,
  skillsSectionScripts: SkillsSectionScripts,
  projectsSectionScripts: ProjectsSectionScripts,
  contactMeSectionScripts: ContactMeSectionScripts,
  headerFooterScripts: HeaderFooterScripts
};

export default EnglishScripts;
