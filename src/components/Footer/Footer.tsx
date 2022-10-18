import './footer.scss';
import Logo from '../../assets/general/k-logo.png';
import FooterSocials from "./FooterSocials/FooterSocials";
import {useSelector} from "react-redux";
import {selectTranslations} from "../../features/langConfig/LangConfigSlice";

function Footer() {
    const t = useSelector(selectTranslations);

    return (
        <div className="footerMain">
            <img src={Logo} alt="footer_logo" className="footerMain__logo" />
            <FooterSocials />
            <h3 className="footerMain__copyright">{t.headerFooterScripts.copyright}</h3>
        </div>
    )
}

export default Footer;