import './projectModal.scss';
import React, {
  useEffect,
  useRef
} from 'react';
import useOutsideAlerter from '../../../../utils/useOutsideAlerter';
import { IoMdClose } from 'react-icons/io';

// Swiper
import {
  Swiper,
  SwiperSlide
} from 'swiper/react';
import {
  A11y,
  Lazy,
  Navigation,
  Pagination,
  Zoom
} from 'swiper';
// Swiper Styles
import 'swiper/scss';
import 'swiper/scss/lazy';
import 'swiper/scss/zoom';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import {
  BsShieldFill,
  BsShieldSlashFill
} from 'react-icons/bs';
import { FiLink } from 'react-icons/fi';
import { useAppSelector } from '../../../../app/hooks';
import { selectTheme } from '../../../../features/themeController/ThemeControllerSlice';
import type { IProjectTModal } from '../../../../features/languageController/LanguageControllerInterfaces';
import type { IconType } from 'react-icons';

function ProjectModal({
  props
}: {
  props: {
    openModal: boolean; setOpenModal: React.Dispatch<React.SetStateAction<boolean>>; modalProps: IProjectTModal | undefined;
  };
}) {
  const modalRef = useRef(null);
  const theme = useAppSelector(selectTheme);
  useOutsideAlerter(modalRef, props.setOpenModal);

  useEffect(() => {
    if(props.openModal) {
      document.body.style.overflowY = 'hidden';
    }
    else {
      document.body.style.overflowY = 'auto';
    }
  }, [props]);

  return (<div className={`projectModalMain ${props.openModal ? 'open' : 'close'}`}>
    <div ref={modalRef} className={`modal-content ${theme === 'dark' ? 'dark' : 'light'}`}>
      <IoMdClose
        className={`modal-close-icon ${theme === 'dark' ? 'dark' : 'light'}`}
        onClick={() => props.setOpenModal(false)}
      />
      <h1 className={`modal-content-heading ${theme === 'dark' ? 'dark' : 'light'}`}>
        {props.modalProps?.heading}
        {props.modalProps?.isPrivate ?
            (<BsShieldFill className={`modal-private-icon ${theme === 'dark' ? 'dark' : 'light'}`} />) :
            (<BsShieldSlashFill className={`modal-private-icon ${theme === 'dark' ? 'dark' : 'light'}`} />)}
        {props.modalProps?.src && (
          <FiLink className="modal-link" onClick={() => window.open(props.modalProps?.src, '_target')} />)}
      </h1>
      <div className={`modal-content-desc ${theme === 'dark' ? 'dark' : 'light'}`}>
        <div className={`modal-desc-container ${theme === 'dark' ? 'dark' : 'light'}`}>
          <span className={`desc-upper-text ${theme === 'dark' ? 'dark' : 'light'}`}>Project Type</span>
          <span className={`desc-lower-text ${theme === 'dark' ? 'dark' : 'light'}`}>
            {props.modalProps?.projectType}
          </span>
        </div>
        <div className={`modal-desc-container middle-desc ${theme === 'dark' ? 'dark' : 'light'}`}>
          <span className={`desc-upper-text ${theme === 'dark' ? 'dark' : 'light'}`}>Core Framework</span>
          <span className={`desc-lower-text ${theme === 'dark' ? 'dark' : 'light'}`}>
            {props.modalProps?.coreFramework}
          </span>
        </div>
        <div className={`modal-desc-container ${theme === 'dark' ? 'dark' : 'light'}`}>
          <span className={`desc-upper-text ${theme === 'dark' ? 'dark' : 'light'}`}>Date</span>
          <span className={`desc-lower-text ${theme === 'dark' ? 'dark' : 'light'}`}>{props.modalProps?.date}</span>
        </div>
      </div>
      <p className={`modal-content-paragraph ${theme === 'dark' ? 'dark' : 'light'}`}>
        {props.modalProps?.paragraph}
      </p>
      <div className="modal-content-gallery">
        <Swiper
          className="modal-slider"
          modules={[Pagination, Navigation, A11y, Zoom, Lazy]}
          centeredSlides={true}
          slidesPerView={1}
          navigation={true}
          zoom={true}
          lazy={true}
          pagination={{ clickable: true }}
        >
          {props.modalProps?.slides && props.modalProps?.slides.map((s: string, index: number) => (
            <SwiperSlide className={`modal-slide ${theme === 'dark' ? 'dark' : 'light'}`} key={index}>
              <div className="swiper-zoom-container">
                <img src={s} alt={`modal-slide-img-${index}`} />
              </div>
            </SwiperSlide>))}
        </Swiper>
      </div>
      <div className={`modal-content-footer ${theme === 'dark' ? 'dark' : 'light'}`}>
        {props.modalProps?.frameworks && props.modalProps?.frameworks.map((f: IconType,
          index: number
        ) => React.createElement(f, {
          className: `fw-icon dark ${theme === 'dark' ? 'dark' : 'light'}`,
          key: index
        }))}
      </div>
    </div>
  </div>);
}

export default ProjectModal;
