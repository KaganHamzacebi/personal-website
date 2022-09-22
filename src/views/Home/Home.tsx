import './home.scss';
// Partial Components
import {useEffect, useRef} from "react";
import Header from "../../components/Header/Header";
import SocialBar from "../../components/SocialBar/SocialBar";
// All Sections of Home screen
import AboutMeSection from "./AboutMeSection/AboutMeSection";
import SkillsSection from "./SkillsSection/SkillsSection";
import {store} from "../../app/store";
import {getScrollSelector, scrollTo} from "../../features/scrollController/ScrollController";


export function Home() {

    const aboutMeSectionRef = useRef(null);
    const skillsActionRef = useRef(null);

    let currentVal: string;
    function handleScroll() {
        let previousVal = currentVal;
        currentVal = getScrollSelector(store.getState())

        if (previousVal !== currentVal) {
            switch (currentVal) {
                case 'aboutMeSection':
                    scrollTo(aboutMeSectionRef);
                    break;
                case 'skillsSection':
                    scrollTo(skillsActionRef);
                    break;
                default:
                    break;
            }
        }
    }

    useEffect(() => {
        store.subscribe(handleScroll);
    });

    return (
        <div>
            <Header />
            <SocialBar />
            <div className="main" ref={aboutMeSectionRef}>
                <section className="aboutMeSection">
                    <AboutMeSection />
                </section>
                <section className="skillsSection">
                    <h1 ref={skillsActionRef}>My Skills</h1>
                    <h2>My core skills that i like to use</h2>
                    <SkillsSection />
                </section>
            </div>
        </div>
    )
}