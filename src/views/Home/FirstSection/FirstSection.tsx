import './firstSection.scss'
import profilePhoto  from '../../../assets/profilePhoto.png'
import {selectTranslations} from "../../../features/langConfig/LangConfigSlice";
import {useSelector} from "react-redux";

function FirstSection() {
    const t = useSelector(selectTranslations);

    return (
        <div className="aboutMeMain">
            <img className="aboutMeMain__pp" alt="profile_photo" src={profilePhoto} />
            <h2 className="aboutMeMain__name">{t.firstSectionScripts.name}<span className="aboutMeMain__surname">{t.firstSectionScripts.surname}</span></h2>
            <h1 className="aboutMeMain__webdev">{t.firstSectionScripts.webdev}</h1>
            <p className="aboutMeMain__bio">
                {t.firstSectionScripts.bio_first_part}
                <a className="aboutMeMain__bio__unilink" target="_blank" rel="noopener noreferrer" href="https://www.etu.edu.tr/en"> {t.firstSectionScripts.bio_unilink} </a>
                {t.firstSectionScripts.bio_second_part}
            </p>
            <button className="contact_button">Contact Me</button>
        </div>
    )
}

export default FirstSection;