import React, { useEffect, useState } from 'react';
import InstructorCard from './InstructorCard';


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";


const PopularInstructors = () => {

    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('instructors.json')
            .then(res => res.json())
            .then(data => {
                setInstructors(data);
            })
    }, []);




    return (
        <div>
            <h1 className='text-3xl  text-center'> Popular Instructor</h1>



            <>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >

                    {
                        instructors.map(instructor => <SwiperSlide>
                            <div className="relative">
                                <img className="w-screen h-full" src={instructor.Image} alt="" />
                                <div className="absolute top-0 left-0 right-0 bottom-0 bg-green-950 opacity-0 hover:opacity-60 transition-opacity duration-300"></div>
                                <div className="absolute top-32 left-0 right-0 flex justify-center">
                                    <div className="text-center flex flex-col gap-6">
                                        <h1 className="text-white text-3xl">{instructor.Name}</h1>
                                        <p className="text-white">{instructor.Email}</p>
                                        <div className="flex gap-4">
                                            {/* Add your social icons here */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }

                </Swiper>
            </>
        </div>
    );
};

export default PopularInstructors;