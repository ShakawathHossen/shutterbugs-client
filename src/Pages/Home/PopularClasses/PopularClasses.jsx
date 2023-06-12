import React from 'react';
import ClassCard from './ClassCard';
import useClasses from '../../../hooks/useClasses';

const PopularClasses = () => {
    const [courses]= useClasses();
    const sortedCourses = courses.sort((a, b) => b.availableSeats - a.availableSeats);
    const topCourses = sortedCourses.slice(0, 6);

    return (

        <div>
            <h1 className='text-3xl  text-center'> Popular Classes</h1>

            <div className='grid md:grid-cols-3 justify-items-center grid-cols-1 gap-10 my-16'>
                {
                    topCourses.map(course => <ClassCard course={course} key={course._id}></ClassCard>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;