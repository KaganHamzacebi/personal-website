import "./footerSocials.scss";
// Social Links
import {GoMarkGithub} from 'react-icons/go';
import {FaLinkedinIn, FaDiscord} from 'react-icons/fa';
import {useEffect, useState} from "react";

function FooterSocials() {
    const [showClipboard, setShowClipboard] = useState(false);

    useEffect(() => {
        console.log(showClipboard)
    }, [showClipboard])

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
                <div
                    className={`footerSocialsMain__bg__clipboard tri-right btm-left-in ${showClipboard && 'active'}`}>
                    Copied!
                </div>
                <FaDiscord className="footerSocialsMain__bg__discord" onClick={copyDiscordTag}/>
            </div>
        </div>
    )
}

export default FooterSocials;