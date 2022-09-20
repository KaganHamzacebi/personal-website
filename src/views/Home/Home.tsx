import './home.scss';
// Partial Components
import Header from "../../components/Header/Header";
import SocialBar from "../../components/SocialBar/SocialBar";
// All Sections of Home screen
import FirstSection from "./FirstSection/FirstSection";
import SkillsSection from "./SkillsSection/SkillsSection";


export function Home() {

    return (
        <div>
            <Header />
            <SocialBar />
            <div className="main">
                <section className="aboutMeSection">
                    <FirstSection />
                </section>
                <section className="skillsSection">
                    <h1>My Skills</h1>
                    <SkillsSection />
                </section>
            </div>
        </div>
    )
}