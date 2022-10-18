import './socialBar.scss'

import {GoMarkGithub} from 'react-icons/go'
import {FaLinkedinIn, FaDiscord} from 'react-icons/fa'
import {useState} from "react";
import {IoLogoWhatsapp} from "react-icons/io";
import {useSelector} from "react-redux";
import {selectTranslations} from "../../features/langConfig/LangConfigSlice";

function SocialBar() {
    const [showClipboardCopy, setShowClipboardCopy] = useState(false);
    const t = useSelector(selectTranslations);

    return (
        <div className="socialBar">
            <ul>
                <li>
                    <GoMarkGithub
                        className="socialBar__github"
                        onClick={() => {
                            window.open('https://github.com/KaganHamzacebi', '_target')
                        }}
                    />
                </li>
                <li>
                    <FaLinkedinIn
                        className="socialBar__linkedin"
                        onClick={() => {
                            window.open('https://www.linkedin.com/in/kaganhamzacebi/', '_target')
                        }}
                    />
                </li>
                <li>
                    <IoLogoWhatsapp
                        className="socialBar__whatsapp"
                        onClick={() => {
                            window.open('https://wa.me/+905342067893', '_target')
                        }}
                    />
                </li>
                <li className="socialBar-li-discord">
                    <FaDiscord
                        className="socialBar__discord"
                        onClick={() => {
                            navigator.clipboard.writeText("Classy#5334")
                                .then(() => {
                                    setShowClipboardCopy(true);
                                    setTimeout(() => {
                                        setShowClipboardCopy(false);
                                    }, 1000)
                                });
                        }}
                    />
                    {/* Discord Copy Clipboard */}
                    <div
                        className={`socialBar-li-discord__clipboard tri-right btm-left-in ${showClipboardCopy && 'active'} `}>
                        {t.headerFooterScripts.copied}
                    </div>
                </li>
                <li>
                    <hr className="socialBar__divider"/>
                </li>
                <li>
                    <span className="socialBar__writing">socials</span>
                </li>
            </ul>
        </div>
    )
}

export default SocialBar;