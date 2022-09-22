import './aboutMeSection.scss'
import profilePhoto  from '../../../assets/profilePhoto.png'
import {selectTranslations} from "../../../features/langConfig/LangConfigSlice";
import {useSelector} from "react-redux";

function AboutMeSection() {
    const t = useSelector(selectTranslations);

    return (
        <div className="aboutMeMain">
            <img className="aboutMeMain__pp" alt="profile_photo" src={profilePhoto} />
            <h2 className="aboutMeMain__name">{t.aboutMeSectionScripts.name}<span className="aboutMeMain__surname">{t.aboutMeSectionScripts.surname}</span></h2>
            <h1 className="aboutMeMain__webdev">{t.aboutMeSectionScripts.webdev}</h1>
            <p className="aboutMeMain__bio">
                {t.aboutMeSectionScripts.bio_first_part}
                <a className="aboutMeMain__bio__unilink" target="_blank" rel="noopener noreferrer" href="https://www.etu.edu.tr/en"> {t.aboutMeSectionScripts.bio_unilink} </a>
                {t.aboutMeSectionScripts.bio_second_part}
            </p>
            <button className="contact_button">Contact Me</button>
        </div>
    )
}

export default AboutMeSection;