import React from 'react';
import useCart from '../../../hooks/useCart';
import { key } from 'localforage';

const MyCart = () => {
    const { cart } = useCart();
    console.log(cart);
    const total = cart.reduce((sum, item) => sum + item.Price, 0).toFixed(2);
    return (
        <div className=''>
            <div className="overflow-x-auto shadow-2xl rounded-lg" >
                <div className='flex justify-between items-center bg-red-200 py-6 px-4'>
                    <div>
                        Selected Course : {cart.length}
                    </div>
                    <div>
                        Total Payble: ${total}
                    </div>
                    <div>
                        <button className='btn bg-yellow-300 border-none'>Pay</button>
                    </div>
                </div>

                <table className="table">
                    {/* head */}
                    <thead>

                        <tr>
                            <th>ID</th>
                            <th>Course Banner</th>
                            <th>Course Name</th>
                            <th>Instructor</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map(item =>
                                <tr key={item._id}>
                                    <th>
                                        {item._id}
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
                                        <button className="btn bg-red-600 text-white btn-xs">Delete</button>
                                    </th>
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