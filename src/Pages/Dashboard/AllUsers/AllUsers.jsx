import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { FaTrash } from 'react-icons/fa';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {

        const res = await fetch(`http://localhost:5000/users`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        return res.json();
    })
    const handleMakeAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                toast.success(`${user.name} is now Admin`)
                if (data.modifiedCount) {
                    refetch()
                }
            })
    }

    const handleMakeInstructor = (user) => {
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                toast.success(`${user.name} is now Instructor`);
                if (data.modifiedCount) {
                    refetch();
                }
            });
    };



    const handleDelete = user => {
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    toast('User Deleted', {
                        icon: '❌',
                    });
                }
            })
    }
    return (
        <div className=''>
            <div><Toaster></Toaster></div>
            <div className="overflow-x-auto shadow-2xl rounded-lg" >
                <div className='flex justify-center items-center bg-red-200 py-6 px-4'>
                    <div className='text-3xl uppercase'>
                        Total User : {users.length}
                    </div>
                </div>

                <table className="md:table table-xs table-zebra" >
                    {/* head */}
                    <thead>

                        <tr >
                            <th>Serial</th>
                            <th>User Info</th>
                            <th>Role</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                                <tr key={user._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="rounded-full w-20 h-20">
                                                    <img src={user.photo} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{user.name}</div>
                                                <div className="text-sm opacity-50">{user.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {user.role === 'admin' ? (
                                            <span className='bg-green-600 text-white px-2 py-1 rounded-full'>Admin</span>
                                        ) : user.role === 'instructor' ? (
                                            <span className='bg-blue-600 text-white px-2 py-1 rounded-full'>Instructor</span>
                                        ) : (
                                            <>
                                                <button
                                                    onClick={() => handleMakeAdmin(user)}
                                                    className='bg-sky-600 text-white px-2 py-1 rounded-full'
                                                >
                                                    Make Admin
                                                </button>
                                                <button
                                                    onClick={() => handleMakeInstructor(user)}
                                                    className='bg-blue-600 text-white px-2 py-1 rounded-full ml-2'
                                                >
                                                    Make Instructor
                                                </button>
                                            </>
                                        )}
                                    </td>
                                    <td>
                  <button onClick={() => handleDelete(user)} className='bg-red-600 text-white px-2 py-1 rounded-full'>
                    Delete User
                  </button>
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

export default AllUsers;