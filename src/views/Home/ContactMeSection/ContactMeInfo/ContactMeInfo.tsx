import './contactMeInfo.scss';

import {IoMailOutline, IoLocationOutline} from "react-icons/io5";
import {FiPhoneCall} from 'react-icons/fi';

function ContactMeInfo() {

    return (
        <div className="contactMeInfo">
            <div className="contactMeInfo__email">
                <div className="contactMeInfo__email__container">
                    <div className="logoBG">
                        <IoMailOutline className="contactMeInfo__email__container__logo" />
                    </div>
                    <h1 className="contactMeInfo__email__container__h1">Email</h1>
                </div>
                <h1 className="contactMeInfo__email__h1">kagan.hcebi@gmail.com</h1>
            </div>
            <div className="contactMeInfo__address">
                <div className="contactMeInfo__address__container">
                    <div className="logoBG">
                        <IoLocationOutline className="contactMeInfo__address__container__logo" />
                    </div>
                    <h1 className="contactMeInfo__address__container__h1">Address</h1>
                </div>
                <h1 className="contactMeInfo__address__h1">Kızılırmak mah. 1425. cad Hayat Sebla Evleri No:29/B Çankaya, Ankara/Turkey</h1>
            </div>
            <div className="contactMeInfo__phone">
                <div className="contactMeInfo__phone__container">
                    <div className="logoBG">
                        <FiPhoneCall className="contactMeInfo__phone__container__logo" />
                    </div>
                    <h1 className="contactMeInfo__phone__container__h1">Phone</h1>
                </div>
                <h1 className="contactMeInfo__phone__h1">+90 534 206 78 93</h1>
            </div>
        </div>
    )
}

export default ContactMeInfo;