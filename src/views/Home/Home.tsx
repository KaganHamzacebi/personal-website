import './home.scss';
// Partial Components
import Header from "../../components/Header/Header";
import SocialBar from "../../components/SocialBar/SocialBar";
// All Sections of Home screen
import FirstSection from "./FirstSection/FirstSection";


export function Home() {

    return (
        <div className="root">
            <Header />
            <SocialBar />
            <div className="main">
                <section>
                    <FirstSection />
                </section>
            </div>
        </div>
    )
}