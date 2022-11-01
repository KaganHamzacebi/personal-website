import { useAppSelector } from '../../app/hooks';
import Logo from '../../assets/general/k-logo.png';
import { selectTranslations } from '../../features/languageController/LanguageControllerSlice';
import { selectTheme } from '../../features/themeController/ThemeControllerSlice';
import './footer.scss';
import FooterSocials from './FooterSocials/FooterSocials';

function Footer() {
  const t = useAppSelector(selectTranslations);
  const theme = useAppSelector(selectTheme);

  return (
    <div className={`footerMain ${theme === 'dark' ? 'dark' : 'light'}`}>
      <img src={Logo} alt={`footer_logo ${theme === 'dark' ? 'dark' : 'light'}`} className="footerMain__logo" />
      <FooterSocials />
      <h3 className={`footerMain__copyright ${theme === 'dark' ? 'dark' : 'light'}`}>
        {t.headerFooterScripts.copyright}
      </h3>
    </div>
  );
}

export default Footer;
