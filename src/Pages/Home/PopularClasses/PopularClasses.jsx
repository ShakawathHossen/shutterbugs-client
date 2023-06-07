import React, { useEffect, useState } from 'react';
import { AiFillCamera } from "react-icons/ai";
import ClassCard from './ClassCard';


const PopularClasses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('classes.json')
            .then(res => res.json())
            .then(data => {

                const sortedCourses = data.sort((a, b) => b.AvailableSeats - a.AvailableSeats);
                const topCourses = sortedCourses.slice(0, 6);
                setCourses(topCourses);
            })
    }, []);






    return (

        <div>
            <h1 className='text-3xl  text-center'> Popular Classes</h1>

            <div className='grid md:grid-cols-3 justify-items-center grid-cols-1 gap-10 my-16'>
                {
                    courses.map(course => <ClassCard course={course} key={course.id}></ClassCard>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;