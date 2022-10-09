import './footer.scss';
import Logo from '../../assets/k-logo.png';
import FooterSocials from "./FooterSocials/FooterSocials";

function Footer() {
    return (
        <div className="footerMain">
            <img src={Logo} alt="footer_logo" className="footerMain__logo" />
            <FooterSocials />
            <h3 className="footerMain__copyright">© Copyright 2022. All rights reserved</h3>
        </div>
    )
}

export default Footer;