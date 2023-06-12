import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManageCourses = () => {
    const { data: courses = [], refetch } = useQuery(['classes'], async () => {

        const res = await fetch(`https://shutter-bugs-server.vercel.app/classes`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        return res.json();
    })
    return (
        <div className=''>
            <div className="overflow-x-auto shadow-2xl rounded-lg" >
                <div className='flex justify-center items-center bg-red-200 py-6 px-4'>
                    <div className='text-3xl uppercase'>
                        Total Course : {courses.length}
                    </div>
                </div>

                <table className="md:table table-xs table-zebra" >
                    {/* head */}
                    <thead>

                        <tr >
                            <th>Serial</th>
                            <th>Course Info</th>
                            <th>Available Sits</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            courses.map((course, index) =>
                                <tr key={course._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="h-12 w-24">
                                                    <img src={course.Image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{course.Name}</div>
                                                <div className="text-sm opacity-50">{course.InstructorName}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {course.AvailableSeats}
                                    </td>
                                    <td>
                                        ${course.Price}
                                    </td>
                                    <td>
                                        <p className='btn btn-xs bg-green-600 text-white'>Approved</p>
                                    </td>
                                </tr>
                            )
                        }
                        {/* row 1 */}

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageCourses;