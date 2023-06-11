import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { FaHome, FaPaypal, FaShoppingCart, FaUser } from 'react-icons/fa';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    // const isAdmin = true;
    // const isInstructor = true;
    const [isAdmin]= useAdmin();


    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col p-10">
                    <label htmlFor="my-drawer-2" className=" drawer-buttona lg:hidden absolute right-0 bottom-0">open side bar</label>

                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        {/* Profile section */}
                        <div className="p-4">
                            <div className="text-center">
                                <img className="w-20 h-20 rounded-full mx-auto mb-2" src={user.photoURL} alt="Profile" />
                                {user && (
                                    <>
                                        <h4 className="text-lg font-bold pb-2">{user.displayName} <span className='bg-green-600 text-white font-semibold text-xs px-2 py-1 rounded-full'>{isAdmin ? 'Admin' : 'User'}</span></h4>
                                        <p className="text-gray-600">{user.email}</p>
                                       
                                    </>
                                )}
                            </div>
                        </div>
                        <hr className='border-2 border-green-600' />

                        {
                            isAdmin  && (<>
                                <li> <Link><FaHome></FaHome>Admin Home</Link> </li>
                                <li> <Link to='allusers'><FaUser></FaUser>Manage Users</Link> </li>
                                <li> <Link><FaPaypal></FaPaypal> Payment</Link> </li>

                            </>
                            ) 
                        }
                              {!isAdmin  && ( <>
                                    <li> <Link><FaHome></FaHome> Home</Link> </li>
                                    <li> <Link to='mycart'><FaShoppingCart></FaShoppingCart> My Selected Classes</Link> </li>
                                    <li> <Link><FaPaypal></FaPaypal> Payment</Link> </li>

                                </>
                           ) 
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;