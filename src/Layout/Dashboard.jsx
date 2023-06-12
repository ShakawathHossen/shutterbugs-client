import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { FaDiscourse, FaHome, FaPaypal, FaShoppingCart, FaUser } from 'react-icons/fa';
import useAdmin from '../hooks/useAdmin';
import { Helmet } from 'react-helmet';

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    // const isAdmin = false;
    // const isInstructor = true;
    const [isAdmin, isInstructor] = useAdmin();
    console.log(isAdmin, isInstructor);


    return (
        <div>
            <Helmet>
                <title>ShuterBugs | Dashboard</title>
            </Helmet>
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

                        <div className="p-4">
                            <div className="text-center">
                                <img className="w-20 h-20 rounded-full mx-auto mb-2" src={user.photoURL} alt="Profile" />
                                {user && (
                                    <>
                                        <h4 className="text-lg font-bold pb-2">
                                            {user.displayName}{' '}
                                            {isAdmin ? (
                                                <span className='bg-green-600 text-white font-semibold text-xs px-2 py-1 rounded-full'>Admin</span>
                                            ) : isInstructor ? (
                                                <span className='bg-blue-600 text-white font-semibold text-xs px-2 py-1 rounded-full'>Instructor</span>
                                            ) : (
                                                <span className='bg-gray-600 text-white font-semibold text-xs px-2 py-1 rounded-full'>Student</span>
                                            )}
                                        </h4>
                                        <p className="text-gray-600">{user.email}</p>

                                    </>
                                )}
                            </div>
                        </div>
                        <hr className='border-2 border-green-600' />

                        {
                            isAdmin && (<>
                                <li> <Link><FaHome></FaHome>Admin Home</Link> </li>
                                <li> <Link to='/dashboard/allusers'><FaUser></FaUser>Manage Users</Link> </li>
                                <li> <Link to='/dashboard/managecourses'><FaDiscourse></FaDiscourse> Manage Courses</Link> </li>

                            </>
                            )
                        }

                        {isInstructor && (
                            <>
                                <li> <Link><FaHome></FaHome> Instructor Home</Link> </li>
                                <li> <Link ><FaUser></FaUser>Manage Courses</Link> </li>
                                <li> <Link ><FaUser></FaUser>Add Course</Link> </li>
                            </>
                        )}
                        {!isAdmin && !isInstructor && (<>
                            <li> <Link><FaHome></FaHome> Home</Link> </li>
                            <li> <Link to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart> My Selected Classes</Link> </li>
                            <li> <Link to='/dashboard/payment'><FaPaypal></FaPaypal> Payment</Link> </li>

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