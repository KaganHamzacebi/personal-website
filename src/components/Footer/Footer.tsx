import './footer.scss';
import {GiAbstract002} from 'react-icons/gi';
import FooterSocials from "./FooterSocials/FooterSocials";

function Footer() {
    return (
        <div className="footerMain">
            <GiAbstract002 className="footerMain__logo" />
            <FooterSocials />
            <h3 className="footerMain__copyright">© Copyright 2022. All rights reserved</h3>
        </div>
    )
}

export default Footer;