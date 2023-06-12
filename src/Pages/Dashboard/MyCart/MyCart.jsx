import React from 'react';
import useCart from '../../../hooks/useCart';
import { FaTrash } from 'react-icons/fa';
import { Toaster, toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const MyCart = () => {
    const { refetch, cart } = useCart();
    const total = cart.reduce((sum, item) => sum + item.Price, 0).toFixed(2);

    const handleDelete = item => {
        fetch(`https://shutter-bugs-server.vercel.app/carts/${item._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    toast('Course Deleted from Cart', {
                        icon: '❌',
                    });
                }
            })
    }
    return (
        <div className=''>
            <Helmet>
                <title>ShuterBugs | My Cart</title>
            </Helmet>
            <div><Toaster /></div>
            <div className="overflow-x-auto shadow-2xl rounded-lg" >
                <div className='flex justify-between items-center bg-red-200 py-6 px-4'>
                    <div>
                        Selected Course : {cart.length}
                    </div>
                    <div>
                        Total Payble: ${total}
                    </div>

                </div>

                <table className="table">
                    {/* head */}
                    <thead>

                        <tr>
                            <th>Serial</th>
                            <th>Course Banner</th>
                            <th>Course Name</th>
                            <th>Instructor</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) =>
                                <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="h-12 w-24">
                                                    <img src={item.Image} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.Name}
                                        <br />
                                    </td>
                                    <td>{item.InstructorName}</td>
                                    <td>
                                        ${item.Price}
                                        <br />
                                    </td>
                                    <th>
                                        <button onClick={() => handleDelete(item)} className=" bg-red-600 text-white px-2 py-1 rounded-full">Delete</button>
                                    </th>
                                    <td>
                                        <Link to={`/dashboard/payment/${item._id}`}><button className='bg-yellow-400 text-white px-2 py-1 rounded-full'> Pay</button></Link>
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

export default MyCart;