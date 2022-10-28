import {IProjectsSectionScripts} from "../../features/languageController/LanguageControllerInterfaces";
// Personal Website Assets
import personalWebsiteAboutMe from '../../assets/projects/personal_website/personal-website.png';
import personalWebsiteSkills from '../../assets/projects/personal_website/personal-website2.png';
import personalWebsiteProjects from '../../assets/projects/personal_website/personal-website3.png';
import personalWebsiteContactMe from '../../assets/projects/personal_website/personal-website4.png';
import personalWebsiteLightMode from '../../assets/projects/personal_website/personal-website5.png';
// Tetherer Assets
import tethererMainScreen from '../../assets/projects/tetherer/tetherer.png'
import tethererMainScreen2 from '../../assets/projects/tetherer/tetherer2.png'
import tethererMainScreen3 from '../../assets/projects/tetherer/tetherer3.png'
import tethererPremium from '../../assets/projects/tetherer/tetherer4.png'
import tethererDashboard from '../../assets/projects/tetherer/tetherer5.png'
import tethererCreateEvent from '../../assets/projects/tetherer/tetherer6.png'
import tethererCreateEvent2 from '../../assets/projects/tetherer/tetherer7.png'
import tethererCreateEvent3 from '../../assets/projects/tetherer/tetherer8.png'
// Area Violation Detection Assets
import areaViolationDetectionRed from '../../assets/projects/area_violation_detection/area-violation-detection.png';
import areaViolationDetectionGreen from '../../assets/projects/area_violation_detection/area-violation-detection2.png';
import areaViolationDetectionGif from '../../assets/projects/area_violation_detection/area-violation-detection3.gif';
// 3in1 Assets
import threeInOneHome from '../../assets/projects/3in1/3in1.png';
import threeInOneHome2 from '../../assets/projects/3in1/3in1_2.gif';
import threeInOneRegister from '../../assets/projects/3in1/3in1_3.png';
import threeInOneLogin from '../../assets/projects/3in1/3in1_4.png';
import threeInOneProfile from '../../assets/projects/3in1/3in1_5.png';
import threeInOneSleep from '../../assets/projects/3in1/3in1_6.png';
import threeInOneMeditation from '../../assets/projects/3in1/3in1_7.png';

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
    personal_website: {
        heading: "Personal Website",
        description: "A personal playground & portfolio website to test frameworks and learn new technologies.",
        modal: {
            tag: "personal_website",
            heading: "Personal Website",
            isPrivate: true,
            projectType: "Web",
            coreFramework: "React",
            date: "October 2022",
            paragraph: "My main purpose of building this website was learning new frameworks. Those new frameworks are " +
                "mainly Redux, SCSS, GraphQL and Jest. So far I learned Redux and SCSS quite good but GraphQL and Jest are not used yet. " +
                "The side purposes are not getting rusted and learning new implementation techniques while developing. " +
                "At this project I used react-redux-typescript boilerplate and modularized the main sections. One of my mistake for this project " +
                "was selecting ReactJS. I was already experienced at ReactJS, I would select NextJS to learn new one. In this project " +
                "the frameworks and libraries I used are ReactJS, Redux, Typescript, SASS (SCSS), Webpack, React-Helmet, react-router-domV6.4, " +
                "React-Icons, SwiperV8.4, Google Analytics 4, React-Cookie, React-Hook-FormV7.3, React-Tooltip. As the WebStorm's " +
                "statistic plugin says I wrote more than 4000 lines of code so far (scss, tsx and ts files). I built this website to " +
                "learn new frameworks and libs, getting better at clean code and kiss, solid and dry principles, learning new coding techniques " +
                "and lastly creating a portfolio like website for my future career.",
            slides: [
                personalWebsiteAboutMe,
                personalWebsiteSkills,
                personalWebsiteProjects,
                personalWebsiteContactMe,
                personalWebsiteLightMode
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
    tetherer: {
        heading: "Tetherer",
        description: "Tetherer is a discord bot for creating customizable events on discord channels.",
        modal: {
            tag: "tetherer",
            heading: "Tetherer",
            isPrivate: true,
            projectType: "Web",
            coreFramework: "React & Node.JS",
            date: "January 2020",
            paragraph: "Tetherer is basically a Discord Bot with web interface. It is used for creating customizable events for discord guilds " +
                "via website. You can create an event on your discord guild and people in your discord guild can join the event. The main working flow was like that. " +
                "We developed this project with my friend but could not finish yet and gave break for long time. The frontend of this " +
                "project is developed with ReactJS, backend is developed with Node.JS and MongoDB used for database. On frontend we preferred using " +
                "TailwindCSS, React-Router-Dom, Swiper, Axios, React-Cookie and Moment as core frameworks. On backend we used Express Server, Mongoose, DiscordJS, Moment, Axios and Cors. " +
                "We were planning to make premium features and give exclusive benefits to premium features. Maybe we complete it later.",
            slides: [
                tethererMainScreen,
                tethererMainScreen2,
                tethererMainScreen3,
                tethererPremium,
                tethererDashboard,
                tethererCreateEvent,
                tethererCreateEvent2,
                tethererCreateEvent3
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
            date: "May 2022",
            paragraph: "Area Violation Detection was my Deep Learning course project. The main purpose of this project is simply dynamically " +
                "detecting if the selected object is in the defined area. This functionality is built for videos. The project performance was 15 FPS " +
                "for non-CUDA supported GPUs or CPU and 30 FPS for CUDA supported GPUs. User can select up to 80 different object types and can resize and move " +
                "the dynamic area while video playing. Frontend of the project is built with PyQT5 (Python) framework. Video decoding is handled " +
                "with OpenCV. Object Detection Model was selected as YOLO. YoloV3 and YoloV5s versions implemented. Between those versions there were some " +
                "performance and detection differences. YoloV3 was faster at RTX 2070 and YoloV5s was better as detecting objects. Yolo models loaded with OpenCV and " +
                "used numpy library for some performance improvements.",
            slides: [
                areaViolationDetectionRed,
                areaViolationDetectionGreen,
                areaViolationDetectionGif
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
            date: "August 2022",
            paragraph: "3in1 was my capstone project and we implemented it as a 6 person team. The 3in1 name comes from the " +
                "number of modules in this project. The first module was Sleep and in this module we were showing the sleep data of the user. " +
                "The second module was chat module and in this module users can anonymously chat with each other. " +
                "The last module was VR Meditation module. As the name of the module says its implemented for meditation with VR glasses. " +
                "VR module was not available for Web though. The project was built on Web and Mobile. I worked on frontend of the web project and " +
                "built main structure of project, chat module, profile page, home page, header and footer components, login, register and forgot password pages, " +
                "api structure, helped on sleep module. Project implemented with ReactJS and TailwindCSS. Main libraries were react-router-domV6, react-hook-forms, " +
                "axios, moment, react-icons, swiper, stompjs, sockjs-client and chartjs.",
            slides: [
                threeInOneHome,
                threeInOneHome2,
                threeInOneRegister,
                threeInOneLogin,
                threeInOneProfile,
                threeInOneSleep,
                threeInOneMeditation
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
            tag: "shop_tracker",
            heading: "Shop Tracker",
            isPrivate: false,
            projectType: "Mobile",
            coreFramework: "Android",
            date: "January 2018",
            paragraph: "Shop Tracker is my first personal project. It was built for a food brand which sells kokoreç which is a turkish " +
                "street food. The main purpose of this application was reporting the sales of multiple branches together. Besides that application " +
                "opens with a menu to let restaurant staff use. The staff should select the sold food with the amount and type and application will show the sale " +
                "in the report section. Report section was showing the name of the staff, brand, date, total amount and food type. Report was fully filterable and " +
                "could be saved the mobile as xlss file and also the admin can have it on email. The application also had the upcoming and ready foods screen. " +
                "Customers can follow this screen and get noticed when their food is ready. The application was built with Android Native, Firebase Realtime Database and " +
                "Firebase Authentication.",
            slides: [],
            frameworks: [
                SiAndroid,
                SiFirebase
            ],
        }
    }
} as IProjectsSectionScripts;

export default ProjectsSectionScripts;