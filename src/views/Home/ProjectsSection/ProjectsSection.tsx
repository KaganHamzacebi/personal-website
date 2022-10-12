import './projectsSection.scss'

// Swiper
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, A11y} from 'swiper';
// Swiper Styles
import 'swiper/scss'
import 'swiper/scss/pagination';

import {useState} from "react";
import {useSelector} from "react-redux";
import {selectTranslations} from "../../../features/langConfig/LangConfigSlice";
import {IProjectsSectionScripts} from "../../../utils/LanguageConfigInterfaces";
import ProjectModal from "./ProjectModal/ProjectModal";
import ReactGA from "react-ga";

function ProjectsSection() {
    const t = useSelector(selectTranslations);
    const slides: IProjectsSectionScripts = t.projectsSectionScripts;
    const [openModal, setOpenModal] = useState(false);
    const [modalProps, setModalProps] = useState("");

    return (
        <div className="projectsSectionMain">
            <Swiper
                className="projectsSlider"
                modules={[Pagination, A11y]}
                spaceBetween={50}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 2,
                    },
                    1280: {
                        slidesPerView: 3,
                    },
                    1536: {
                        slidesPerView: 4,
                    }
                }}
            >
                {
                    Object.entries(slides).map((slide, i) => {
                        const data = slide[1];
                        return (
                            <SwiperSlide key={i} className="slide">
                                <span className="slide__h1">{data.heading}</span>
                                <p className="slide__desc">{data.description}</p>
                                <button className="slide__btn"
                                        onClick={() => {
                                            setOpenModal(true);
                                            setModalProps(data.modal);
                                            ReactGA.event({category: "ProjectsSection", action: data.modal.tag})
                                        }}
                                >
                                    Read
                                </button>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <ProjectModal
                props={{
                    openModal: openModal,
                    setOpenModal: setOpenModal,
                    modalProps: modalProps
                }}
            />
        </div>
    )
}

export default ProjectsSection;