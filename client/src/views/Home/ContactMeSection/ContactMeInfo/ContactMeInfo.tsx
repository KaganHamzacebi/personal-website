import './contactMeInfo.scss';

import { IoMailOutline, IoLocationOutline } from 'react-icons/io5';
import { FiPhoneCall } from 'react-icons/fi';
import { selectTranslations } from '../../../../features/languageController/LanguageControllerSlice';
import { useAppSelector } from '../../../../app/hooks';
import { selectTheme } from '../../../../features/themeController/ThemeControllerSlice';

function ContactMeInfo() {
    const t = useAppSelector(selectTranslations);
    const theme = useAppSelector(selectTheme);

    return (
        <div className="contactMeInfo">
            <div className={`contactMeInfo__email ${theme === 'dark' ? 'dark' : 'light'}`}>
                <div className="contactMeInfo__email__container">
                    <div className={`logoBG ${theme === 'dark' ? 'dark' : 'light'}`}>
                        <IoMailOutline
                            className={`contactMeInfo__email__container__logo ${
                                theme === 'dark' ? 'dark' : 'light'
                            }`}
                        />
                    </div>
                    <h2
                        className={`contactMeInfo__email__container__h1 ${
                            theme === 'dark' ? 'dark' : 'light'
                        }`}>
                        {t.contactMeSectionScripts.email}
                    </h2>
                </div>
                <h3 className={`contactMeInfo__email__h1 ${theme === 'dark' ? 'dark' : 'light'}`}>
                    {t.contactMeSectionScripts.email_content}
                </h3>
            </div>
            <div className={`contactMeInfo__address ${theme === 'dark' ? 'dark' : 'light'}`}>
                <div className="contactMeInfo__address__container">
                    <div className={`logoBG ${theme === 'dark' ? 'dark' : 'light'}`}>
                        <IoLocationOutline
                            className={`contactMeInfo__address__container__logo ${
                                theme === 'dark' ? 'dark' : 'light'
                            }`}
                        />
                    </div>
                    <h2
                        className={`contactMeInfo__address__container__h1 ${
                            theme === 'dark' ? 'dark' : 'light'
                        }`}>
                        {t.contactMeSectionScripts.address}
                    </h2>
                </div>
                <h3 className={`contactMeInfo__address__h1 ${theme === 'dark' ? 'dark' : 'light'}`}>
                    {t.contactMeSectionScripts.address_content}
                </h3>
            </div>
            <div className={`contactMeInfo__phone ${theme === 'dark' ? 'dark' : 'light'}`}>
                <div className="contactMeInfo__phone__container">
                    <div className={`logoBG ${theme === 'dark' ? 'dark' : 'light'}`}>
                        <FiPhoneCall
                            className={`contactMeInfo__phone__container__logo ${
                                theme === 'dark' ? 'dark' : 'light'
                            }`}
                        />
                    </div>
                    <h2
                        className={`contactMeInfo__phone__container__h1 ${
                            theme === 'dark' ? 'dark' : 'light'
                        }`}>
                        {t.contactMeSectionScripts.phone}
                    </h2>
                </div>
                <h3 className={`contactMeInfo__phone__h1 ${theme === 'dark' ? 'dark' : 'light'}`}>
                    {t.contactMeSectionScripts.phone_content}
                </h3>
            </div>
        </div>
    );
}

export default ContactMeInfo;
