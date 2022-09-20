import "./skillsSection.scss"
// Icons
import {
    FaReact,
    FaNodeJs,
    FaCss3Alt,
    FaHtml5
}
    from 'react-icons/fa'


function SkillsSection() {

    return (
        <div className="skillsMain">
            <div className="grid">
                <div className="grid__item">
                    <FaReact className="grid__item__react-logo"/>
                    <h1 className="grid__item__react-h1">React.JS</h1>
                    <p>React bla bla</p>
                    <button className="grid__item__btn">Read More</button>
                </div>
                <div className="grid__item">
                    <FaNodeJs className="grid__item__nodejs-logo"/>
                    <h1 className="grid__item__nodejs-h1">Node.js</h1>
                    <p>React bla bla</p>
                    <button className="grid__item__btn">Read More</button>
                </div>
                <div className="grid__item">
                    <div className="grid__item__double-container">
                        <FaHtml5 className="grid__item__double-container__css"/>
                        <FaCss3Alt className="grid__item__double-container__html"/>
                    </div>
                    <h1 className="grid__item__htmlcss-h1"><span className="html-h1">HTML5</span> <span className="middle_text">&</span> <span className="css-h1">CSS3</span></h1>
                    <p>React bla bla</p>
                    <button className="grid__item__btn">Read More</button>
                </div>
                <div className="grid__item">

                </div>
                <div className="grid__item">

                </div>
                <div className="grid__item">

                </div>
            </div>
        </div>
    )
}

export default SkillsSection;