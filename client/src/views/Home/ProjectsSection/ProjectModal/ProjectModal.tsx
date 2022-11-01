import React, {
  useEffect,
  useRef
} from 'react';
import type { IconType } from 'react-icons';
import {
  BsShieldFill,
  BsShieldSlashFill
} from 'react-icons/bs';
import { FiLink } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import {
  A11y,
  Lazy,
  Navigation,
  Pagination,
  Zoom
} from 'swiper';

// Swiper
import {
  Swiper,
  SwiperSlide
} from 'swiper/react';
// Swiper Styles
import 'swiper/scss';
import 'swiper/scss/lazy';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/zoom';
import { useAppSelector } from '../../../../app/hooks';
import type { IProjectTModal } from '../../../../features/languageController/LanguageControllerInterfaces';
import { selectTheme } from '../../../../features/themeController/ThemeControllerSlice';
import useOutsideAlerter from '../../../../utils/useOutsideAlerter';
import './projectModal.scss';

type Props = {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  modalProps: IProjectTModal | undefined;
};

function ProjectModal({
  openModal,
  setOpenModal,
  modalProps
}: Props) {
  const modalRef = useRef(null);
  const theme = useAppSelector(selectTheme);
  useOutsideAlerter(modalRef, setOpenModal);

  useEffect(() => {
    if(openModal)
      document.body.style.overflowY = 'hidden';

    else
      document.body.style.overflowY = 'auto';


  }, [openModal]);

  return (
    <div className={`projectModalMain ${openModal ? 'open' : 'close'}`}>
      <div ref={modalRef} className={`modal-content ${theme === 'dark' ? 'dark' : 'light'}`}>
        <IoMdClose
          className={`modal-close-icon ${theme === 'dark' ? 'dark' : 'light'}`}
          onClick={() => setOpenModal(false)}
        />
        <h1 className={`modal-content-heading ${theme === 'dark' ? 'dark' : 'light'}`}>
          {modalProps?.heading}
          {modalProps?.isPrivate ?
            (<BsShieldFill className={`modal-private-icon ${theme === 'dark' ? 'dark' : 'light'}`} />) :
            (<BsShieldSlashFill className={`modal-private-icon ${theme === 'dark' ? 'dark' : 'light'}`} />)}
          {modalProps?.src && (
            <FiLink className="modal-link" onClick={() => window.open(modalProps?.src, '_target')} />)}
        </h1>
        <div className={`modal-content-desc ${theme === 'dark' ? 'dark' : 'light'}`}>
          <div className={`modal-desc-container ${theme === 'dark' ? 'dark' : 'light'}`}>
            <span className={`desc-upper-text ${theme === 'dark' ? 'dark' : 'light'}`}>Project Type</span>
            <span className={`desc-lower-text ${theme === 'dark' ? 'dark' : 'light'}`}>
              {modalProps?.projectType}
            </span>
          </div>
          <div className={`modal-desc-container middle-desc ${theme === 'dark' ? 'dark' : 'light'}`}>
            <span className={`desc-upper-text ${theme === 'dark' ? 'dark' : 'light'}`}>Core Framework</span>
            <span className={`desc-lower-text ${theme === 'dark' ? 'dark' : 'light'}`}>
              {modalProps?.coreFramework}
            </span>
          </div>
          <div className={`modal-desc-container ${theme === 'dark' ? 'dark' : 'light'}`}>
            <span className={`desc-upper-text ${theme === 'dark' ? 'dark' : 'light'}`}>Date</span>
            <span className={`desc-lower-text ${theme === 'dark' ? 'dark' : 'light'}`}>{modalProps?.date}</span>
          </div>
        </div>
        <p className={`modal-content-paragraph ${theme === 'dark' ? 'dark' : 'light'}`}>
          {modalProps?.paragraph}
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
            {modalProps?.slides && modalProps?.slides.map((s: string, index: number) => (
              <SwiperSlide className={`modal-slide ${theme === 'dark' ? 'dark' : 'light'}`} key={index}>
                <div className="swiper-zoom-container">
                  <img src={s} alt={`modal-slide-img-${index}`} />
                </div>
              </SwiperSlide>))}
          </Swiper>
        </div>
        <div className={`modal-content-footer ${theme === 'dark' ? 'dark' : 'light'}`}>
          {modalProps?.frameworks && modalProps?.frameworks.map((
            f: IconType,
            index: number
          ) => React.createElement(f, {
            className: `fw-icon dark ${theme === 'dark' ? 'dark' : 'light'}`,
            key: index
          }))}
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
