import { useState } from 'react';
import {
  FaDiscord,
  FaLinkedinIn
} from 'react-icons/fa';
// Social Links
import { GoMarkGithub } from 'react-icons/go';
import { IoLogoWhatsapp } from 'react-icons/io';
import { useAppSelector } from '../../../app/hooks';
import { selectTranslations } from '../../../features/languageController/LanguageControllerSlice';
import { selectTheme } from '../../../features/themeController/ThemeControllerSlice';
import './footerSocials.scss';

function FooterSocials() {
  const [showClipboard, setShowClipboard] = useState(false);
  const t = useAppSelector(selectTranslations);
  const theme = useAppSelector(selectTheme);

  function copyDiscordTag() {
    navigator.clipboard.writeText('Classy#5334');
    setShowClipboard(true);
    setTimeout(() => setShowClipboard(false), 1000);
  }

  return (
    <div className="footerSocialsMain">
      <div className={`footerSocialsMain__bg ${theme === 'dark' ? 'dark' : 'light'}`}>
        <GoMarkGithub
          className={`footerSocialsMain__bg__github ${theme === 'dark' ? 'dark' : 'light'}`}
          onClick={() => window.open('https://github.com/KaganHamzacebi', '_target')}
        />
      </div>
      <div className={`footerSocialsMain__bg ${theme === 'dark' ? 'dark' : 'light'}`}>
        <FaLinkedinIn
          className={`footerSocialsMain__bg__linkedin ${theme === 'dark' ? 'dark' : 'light'}`}
          onClick={() => window.open('https://www.linkedin.com/in/kaganhamzacebi/', '_target')}
        />
      </div>
      <div className={`footerSocialsMain__bg ${theme === 'dark' ? 'dark' : 'light'}`}>
        <IoLogoWhatsapp
          className={`footerSocialsMain__bg__whatsapp ${theme === 'dark' ? 'dark' : 'light'}`}
          onClick={() => window.open('https://wa.me/+905342067893', '_target')}
        />
      </div>
      <div className={`footerSocialsMain__bg ${theme === 'dark' ? 'dark' : 'light'}`}>
        <div
          className={`footerSocialsMain__bg__clipboard ${theme === 'dark' ?
            'dark' :
            'light'} tri-right btm-left-in ${showClipboard && 'active'}`}
        >
          {t.headerFooterScripts.copied}
        </div>
        <FaDiscord
          className={`footerSocialsMain__bg__discord ${theme === 'dark' ? 'dark' : 'light'}`}
          onClick={copyDiscordTag}
        />
      </div>
    </div>
  );
}

export default FooterSocials;
