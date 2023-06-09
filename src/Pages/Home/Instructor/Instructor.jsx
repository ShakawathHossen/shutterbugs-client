import React from 'react';
import useInstructors from '../../../hooks/useInstructors';
import { UserCard } from 'react-ui-cards';

const Instructor = () => {
    const [allInstructors] = useInstructors();
    return (
       <div>
        <h1 className='md:pt-24 text-3xl text-center'>All Instructor</h1>
         <div className='grid md:grid-cols-3 justify-items-center grid-cols-1'>
            {
                allInstructors.map(instructor =>
                    <UserCard className='shadow-xl' instructor={instructor} key={instructor._id}
                        float
                        header={instructor.CourseBanner}
                        avatar={instructor.Image}
                        name={instructor.Name}
                        positionName={instructor.Email}
                        stats={[1]}
                    >

                    </UserCard>
                )
            }



        </div>
       </div>
    );
};

export default Instructor;