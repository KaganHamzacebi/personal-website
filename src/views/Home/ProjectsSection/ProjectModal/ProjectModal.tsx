import './projectModal.scss';
import React, {useEffect, useRef} from "react";
import useOutsideAlerter from "../../../../utils/useOutsideAlerter";
import {IoMdClose} from 'react-icons/io'

// Swiper
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Navigation, A11y, Zoom} from 'swiper';
// Swiper Styles
import 'swiper/scss'
import "swiper/scss/zoom";
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import {BsShieldFill, BsShieldSlashFill} from "react-icons/bs";
import {FiLink} from "react-icons/fi";

function ProjectModal({
                          props
                      }: any) {

    const modalRef = useRef(null);
    useOutsideAlerter(modalRef, props.setOpenModal);

    useEffect(() => {
        if (props.openModal) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "auto";
        }
    }, [props])

    return (
        <div className={`projectModalMain ${props.openModal ? 'open' : 'close'}`}>
            <div ref={modalRef} className="modal-content">
                <IoMdClose className="modal-close-icon" onClick={() => props.setOpenModal(false)}/>
                <h1 className="modal-content-heading">
                    {props.modalProps.heading}
                    {props.modalProps.isPrivate ?
                        <BsShieldFill className="modal-private-icon"/>
                        :
                        <BsShieldSlashFill className="modal-private-icon"/>
                    }
                    {
                        props.modalProps.src &&
                        <FiLink
                            className="modal-link"
                            onClick={() => window.open(props.modalProps.src, '_target')} />
                    }
                </h1>
                <div className="modal-content-desc">
                    <div className="modal-desc-container">
                        <span className="desc-upper-text">Project Type</span>
                        <span className="desc-lower-text">{props.modalProps.projectType}</span>
                    </div>
                    <div className="modal-desc-container middle-desc">
                        <span className="desc-upper-text">Core Framework</span>
                        <span className="desc-lower-text">{props.modalProps.coreFramework}</span>
                    </div>
                    <div className="modal-desc-container">
                        <span className="desc-upper-text">Date</span>
                        <span className="desc-lower-text">{props.modalProps.date}</span>
                    </div>
                </div>
                <p className="modal-content-paragraph">{props.modalProps.paragraph}</p>
                <div className="modal-content-gallery">
                    <Swiper
                        className="modal-slider"
                        modules={[Pagination, Navigation, A11y, Zoom]}
                        centeredSlides={true}
                        slidesPerView={1}
                        navigation={true}
                        zoom={true}
                        pagination={{clickable: true}}
                    >
                        {
                            props.modalProps.slides &&
                            props.modalProps.slides.map((s: any, index: number) => {
                                return (
                                    <SwiperSlide className="modal-slide" key={index}>
                                        <div className="swiper-zoom-container">
                                            <img src={s} alt={`modal-slide-img-${index}`}/>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
                <div className="modal-content-footer">
                    {
                        props.modalProps.frameworks &&
                        props.modalProps.frameworks.map((f: any, index: number) => {
                            return (
                                React.createElement(f, {className: "fw-icon", key: index})
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectModal;