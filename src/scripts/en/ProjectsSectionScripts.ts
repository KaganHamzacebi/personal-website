import {IProjectsSectionScripts} from "../../features/languageController/LanguageControllerInterfaces";
import personalWebsite from '../../assets/personal_website/personal-website.png';

// Icons
import {FaReact, FaHtml5, FaCss3Alt, FaNodeJs} from 'react-icons/fa';
import {GrGraphQl} from 'react-icons/gr';
import {
    SiRedux,
    SiTypescript,
    SiJest,
    SiWebpack,
    SiTailwindcss,
    SiJavascript,
    SiDocker,
    SiDiscord,
    SiExpress,
    SiPython,
    SiOpencv,
    SiTensorflow,
    SiAnaconda,
    SiHtml5,
    SiCss3,
    SiSpring,
    SiAndroid,
    SiFirebase, SiMongodb
} from "react-icons/si";

const ProjectsSectionScripts = {
    p1: {
        heading: "Personal Website",
        description: "A personal playground & portfolio website to test frameworks and learn new technologies.",
        modal: {
            tag: "personal_website",
            heading: "Personal Website",
            isPrivate: true,
            projectType: "Web",
            coreFramework: "React",
            date: "25 Jan 2022",
            paragraph: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
            slides: [
                personalWebsite,
                personalWebsite,
            ],
            frameworks: [
                FaReact,
                SiRedux,
                SiTypescript,
                SiJest,
                FaHtml5,
                FaCss3Alt,
                GrGraphQl,
                SiWebpack,
                FaNodeJs
            ]
        }
    },
    p2: {
        heading: "Tetherer",
        description: "Tetherer is a discord bot for creating customizable events on discord channels.",
        modal: {
            tag: "tetherer",
            heading: "Tetherer",
            isPrivate: true,
            projectType: "Web",
            coreFramework: "React & Node.JS",
            date: "25 Jan 2019",
            paragraph: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
            slides: [
                personalWebsite,
                personalWebsite,
            ],
            frameworks: [
                FaReact,
                SiTailwindcss,
                SiJavascript,
                FaNodeJs,
                SiTypescript,
                SiExpress,
                SiDocker,
                SiMongodb,
                SiDiscord
            ]
        }
    },
    p3: {
        heading: "Area Violation Detection",
        description: "My deep learning project for detecting if the given object is violating the selected area or not.",
        modal: {
            tag: "area-violation-detection",
            heading: "Area Violation Detection",
            isPrivate: false,
            projectType: "DNNs",
            coreFramework: "Python & YOLO",
            date: "25 Jan 2022",
            paragraph: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
            slides: [
                personalWebsite,
                personalWebsite,
            ],
            frameworks: [
                SiPython,
                SiOpencv,
                SiTensorflow,
                SiAnaconda
            ],
            src: 'https://github.com/KaganHamzacebi/area-violation-detection'
        }
    },
    p4: {
        heading: "3in1",
        description: "Capstone project for meditation. App contains sleep analyze, chat and VR meditation modules.",
        modal: {
            tag: "3in1",
            heading: "3in1",
            isPrivate: false,
            projectType: "Web & Mobile",
            coreFramework: "React & Android",
            date: "25 Jan 2022",
            paragraph: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
            slides: [
                personalWebsite,
                personalWebsite,
            ],
            frameworks: [
                FaReact,
                SiJavascript,
                SiTailwindcss,
                SiHtml5,
                SiCss3,
                SiSpring,
                SiAndroid,
                SiFirebase,
                SiMongodb
            ],
        }
    },
    p5: {
        heading: "Shop Tracker",
        description: "A sale tracker and detailed reporter mobile application. This app simultaneously track the multiple branches of a restaurant.",
        modal: {
            tag: "3in1",
            heading: "3in1",
            isPrivate: false,
            projectType: "Mobile",
            coreFramework: "Android",
            date: "25 Jan 2018",
            paragraph: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
            slides: [
                personalWebsite,
                personalWebsite,
            ],
            frameworks: [
                FaReact,
                SiJavascript,
                SiTailwindcss,
                SiHtml5,
                SiCss3,
                SiSpring,
                SiAndroid,
                SiFirebase,
                SiMongodb
            ],
        }
    }
} as IProjectsSectionScripts;

export default ProjectsSectionScripts;