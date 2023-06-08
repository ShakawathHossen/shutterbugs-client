import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, EffectCreative, Pagination } from "swiper";
import './Slider.css'


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


const Slider = () => {
    return (

        <>
            <Swiper pagination={true}
                modules={[EffectCreative,Autoplay, Pagination]}
                 loop={true}
                 autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                grabCursor={true}
                effect={"creative"}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ["100%", 0, 0],
                    },
                }}

                className="mySwiper">
                <SwiperSlide>
                    <img src="https://i.ibb.co/CmmcWwF/3.png" alt="" />
                    <div className="absolute md:top-72 top-10 left-0 right-0 flex justify-center">
                        <div className="text-center flex flex-col gap-6">
                        <h1 className="md:text-8xl uppercase font-bold text-slate-950 drop-shadow-2xl ">Focus, Click, Inspire!</h1>
                        <marquee className="md:text-3xl font-medium" behavior="" direction="">30% Discount untill 21June</marquee>
                        <button className="  customButton mx-auto shadow-2x">Join Today</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/XsswpT9/2.png" alt="" />
                <div className="absolute md:top-72 top-10 left-0 right-0 flex justify-center">
                        <div className="text-center flex flex-col gap-6">
                        <h1 className="md:text-8xl uppercase font-bold text-slate-950 drop-shadow-2xl ">Picture-Perfect Summer Adventures!</h1>
                        <marquee className="md:text-3xl font-medium" behavior="" direction="">30% Discount untill 21June</marquee>
                        <button className="  customButton mx-auto shadow-2x">Join Today</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/0c1Hkzm/1.png" alt="" />
                <div className="absolute md:top-72 top-10 left-0 right-0 flex justify-center">
                        <div className="text-center flex flex-col gap-6">
                        <h1 className="md:text-8xl uppercase font-bold text-slate-950 drop-shadow-2xl ">Unleash Your Inner Photographer!</h1>
                        <marquee className="md:text-3xl font-medium" behavior="" direction="">30% Discount untill 21June</marquee>
                        <button className="  customButton mx-auto shadow-2x">Join Today</button>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>

    );
};

export default Slider;