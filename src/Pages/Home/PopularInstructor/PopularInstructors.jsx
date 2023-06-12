import React from 'react';

import useInstructors from '../../../hooks/useInstructors'; 
import { UserCard } from 'react-ui-cards';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";


const PopularInstructors = () => {

    const [instructors]= useInstructors();
    const topInstructors = instructors.slice(0, 6);

    return (
        <div>
            <h1 className='text-3xl  text-center'> Popular Instructor</h1>

            <div className='grid md:grid-cols-3 justify-items-center grid-cols-1'>
        
                    {
                        topInstructors.map(instructor => <UserCard className='shadow-xl' instructor={instructor} key={instructor._id}
                        float
                        header={instructor.CourseBanner}
                        avatar={instructor.Image}
                        name={instructor.Name}
                        positionName={instructor.Email}
                        stats={[1]}
                    >

                    </UserCard>)
                    }
            </div>
        </div>
    );
};

export default PopularInstructors;