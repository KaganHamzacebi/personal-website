import "./footerSocials.scss";
// Social Links
import {GoMarkGithub} from 'react-icons/go';
import {FaLinkedinIn, FaDiscord} from 'react-icons/fa';
import {IoLogoWhatsapp} from "react-icons/io";
import {useState} from "react";
import {useSelector} from "react-redux";
import {selectTranslations} from "../../../features/langConfig/LangConfigSlice";

function FooterSocials() {
    const [showClipboard, setShowClipboard] = useState(false);
    const t = useSelector(selectTranslations);

    function copyDiscordTag() {
        navigator.clipboard.writeText("Classy#5334");
        setShowClipboard(true);
        setTimeout(() => setShowClipboard(false), 1000);
    }

    return (
        <div className="footerSocialsMain">
            <div className="footerSocialsMain__bg">
                <GoMarkGithub
                    className="footerSocialsMain__bg__github"
                    onClick={() => window.open('https://github.com/KaganHamzacebi', '_target')}
                />
            </div>
            <div className="footerSocialsMain__bg">
                <FaLinkedinIn
                    className="footerSocialsMain__bg__linkedin"
                    onClick={() => window.open('https://www.linkedin.com/in/kaganhamzacebi/', '_target')}
                />
            </div>
            <div className="footerSocialsMain__bg">
                <IoLogoWhatsapp
                    className="footerSocialsMain__bg__whatsapp"
                    onClick={() => window.open('https://wa.me/+905342067893', '_target')}
                />
            </div>
            <div className="footerSocialsMain__bg">
                <div
                    className={`footerSocialsMain__bg__clipboard tri-right btm-left-in ${showClipboard && 'active'}`}>
                    {t.headerFooterScripts.copied}
                </div>
                <FaDiscord className="footerSocialsMain__bg__discord" onClick={copyDiscordTag}/>
            </div>
        </div>
    )
}

export default FooterSocials;