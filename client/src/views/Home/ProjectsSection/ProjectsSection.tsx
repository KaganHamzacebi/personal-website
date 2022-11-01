import './projectsSection.scss';

// Swiper
import {
  Swiper,
  SwiperSlide
} from 'swiper/react';
import {
  A11y,
  Pagination
} from 'swiper';
// Swiper Styles
import 'swiper/scss';
import 'swiper/scss/pagination';

import { useState } from 'react';
import { selectTranslations } from '../../../features/languageController/LanguageControllerSlice';
import type {
  IProject,
  IProjectsSectionScripts,
  IProjectTModal
} from '../../../features/languageController/LanguageControllerInterfaces';
import ProjectModal from './ProjectModal/ProjectModal';
import ReactGA from 'react-ga4';
import { useAppSelector } from '../../../app/hooks';
import { selectTheme } from '../../../features/themeController/ThemeControllerSlice';

function ProjectsSection() {
  const t = useAppSelector(selectTranslations);
  const theme = useAppSelector(selectTheme);
  const slides: IProjectsSectionScripts = t.projectsSectionScripts;
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalProps, setModalProps] = useState<IProjectTModal>();

  return (<div className="projectsSectionMain">
    <Swiper
      className="projectsSlider"
      modules={[Pagination, A11y]}
      spaceBetween={50}
      pagination={{
        clickable: true
      }}
      breakpoints={{
        640: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 1
        },
        1024: {
          slidesPerView: 2
        },
        1280: {
          slidesPerView: 3
        },
        1536: {
          slidesPerView: 4
        }
      }}
    >
      {Object.entries(slides)
        .map((slide, i) => {
          const data: IProject = slide[1];
          return (<SwiperSlide key={i} className={`slide ${theme === 'dark' ? 'dark' : 'light'}`}>
            <span className={`slide__h1 ${theme === 'dark' ? 'dark' : 'light'}`}>{data.heading}</span>
            <p className={`slide__desc ${theme === 'dark' ? 'dark' : 'light'}`}>{data.description}</p>
            <button
              className={`slide__btn ${theme === 'dark' ? 'dark' : 'light'}`}
              onClick={() => {
                setOpenModal(true);
                setModalProps(data.modal);
                ReactGA.event({
                  category: 'ProjectsSection',
                  action: data.modal.tag
                });
              }}
            >
                        Read
            </button>
          </SwiperSlide>);
        })}
    </Swiper>
    <ProjectModal
      props={{
        openModal: openModal,
        setOpenModal: setOpenModal,
        modalProps: modalProps
      }}
    />
  </div>);
}

export default ProjectsSection;
