import './contactMeInfo.scss';

import {IoMailOutline, IoLocationOutline} from "react-icons/io5";
import {FiPhoneCall} from 'react-icons/fi';
import {useSelector} from "react-redux";
import {selectTranslations} from "../../../../features/langConfig/LangConfigSlice";

function ContactMeInfo() {
    const t = useSelector(selectTranslations);

    return (
        <div className="contactMeInfo">
            <div className="contactMeInfo__email">
                <div className="contactMeInfo__email__container">
                    <div className="logoBG">
                        <IoMailOutline className="contactMeInfo__email__container__logo"/>
                    </div>
                    <h1 className="contactMeInfo__email__container__h1">{t.contactMeSectionScripts.email}</h1>
                </div>
                <h1 className="contactMeInfo__email__h1">{t.contactMeSectionScripts.email_content}</h1>
            </div>
            <div className="contactMeInfo__address">
                <div className="contactMeInfo__address__container">
                    <div className="logoBG">
                        <IoLocationOutline className="contactMeInfo__address__container__logo"/>
                    </div>
                    <h1 className="contactMeInfo__address__container__h1">{t.contactMeSectionScripts.address}</h1>
                </div>
                <h1 className="contactMeInfo__address__h1">{t.contactMeSectionScripts.address_content}</h1>
            </div>
            <div className="contactMeInfo__phone">
                <div className="contactMeInfo__phone__container">
                    <div className="logoBG">
                        <FiPhoneCall className="contactMeInfo__phone__container__logo"/>
                    </div>
                    <h1 className="contactMeInfo__phone__container__h1">{t.contactMeSectionScripts.phone}</h1>
                </div>
                <h1 className="contactMeInfo__phone__h1">{t.contactMeSectionScripts.phone_content}</h1>
            </div>
        </div>
    )
}

export default ContactMeInfo;