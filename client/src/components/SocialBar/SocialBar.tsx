import './socialBar.scss';

import { GoMarkGithub } from 'react-icons/go';
import { FaLinkedinIn, FaDiscord } from 'react-icons/fa';
import { useState } from 'react';
import { IoLogoWhatsapp } from 'react-icons/io';
import { selectTranslations } from '../../features/languageController/LanguageControllerSlice';
import { useAppSelector } from '../../app/hooks';
import { selectTheme } from '../../features/themeController/ThemeControllerSlice';

function SocialBar() {
    const [showClipboardCopy, setShowClipboardCopy] = useState(false);
    const t = useAppSelector(selectTranslations);
    const theme = useAppSelector(selectTheme);

    return (
        <div className={`socialBar ${theme === 'dark' ? 'dark' : 'light'}`}>
            <ul>
                <li>
                    <GoMarkGithub
                        className={`socialBar__github ${theme === 'dark' ? 'dark' : 'light'}`}
                        onClick={() => {
                            window.open('https://github.com/KaganHamzacebi', '_target');
                        }}
                    />
                </li>
                <li>
                    <FaLinkedinIn
                        className={`socialBar__linkedin ${theme === 'dark' ? 'dark' : 'light'}`}
                        onClick={() => {
                            window.open('https://www.linkedin.com/in/kaganhamzacebi/', '_target');
                        }}
                    />
                </li>
                <li>
                    <IoLogoWhatsapp
                        className={`socialBar__whatsapp ${theme === 'dark' ? 'dark' : 'light'}`}
                        onClick={() => {
                            window.open('https://wa.me/+905342067893', '_target');
                        }}
                    />
                </li>
                <li className="socialBar-li-discord">
                    <FaDiscord
                        className={`socialBar__discord ${theme === 'dark' ? 'dark' : 'light'}`}
                        onClick={() => {
                            navigator.clipboard.writeText('Classy#5334').then(() => {
                                setShowClipboardCopy(true);
                                setTimeout(() => {
                                    setShowClipboardCopy(false);
                                }, 1000);
                            });
                        }}
                    />
                    {/* Discord Copy Clipboard */}
                    <div
                        className={`socialBar-li-discord__clipboard ${
                            theme === 'dark' ? 'dark' : 'light'
                        } tri-right btm-left-in ${showClipboardCopy && 'active'} `}>
                        {t.headerFooterScripts.copied}
                    </div>
                </li>
                <li>
                    <hr className={`socialBar__divider ${theme === 'dark' ? 'dark' : 'light'}`} />
                </li>
                <li>
                    <span className={`socialBar__writing ${theme === 'dark' ? 'dark' : 'light'}`}>
                        socials
                    </span>
                </li>
            </ul>
        </div>
    );
}

export default SocialBar;
