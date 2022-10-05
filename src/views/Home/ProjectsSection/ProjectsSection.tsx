import './projectsSection.scss'

import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper.scss'
import {useEffect, useState} from "react";

function ProjectsSection() {

    const slides = {
        a: 1,
        b: 2,
        c: 3,
        d: 4
    }

    const [slidesPerView, setSlidesPerView] = useState(3);

    useEffect(() => {
        window.addEventListener('scroll', scrollTracker);
        return () => {
            window.removeEventListener('scroll', scrollTracker);
        };
    })

    function scrollTracker() {
        console.log(window.innerWidth)
        if (window.innerWidth > 1200) {
            setSlidesPerView(3);
        }
    }

    return (
        <div className="projectsSectionMain">
            <Swiper
                className="projectsSlider"
                spaceBetween={50}
                slidesPerView={slidesPerView}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    Object.entries(slides).map(slide => {
                        const [k, v] = slide;
                        return (
                            <SwiperSlide>
                                <div>
                                    {v}
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default ProjectsSection;