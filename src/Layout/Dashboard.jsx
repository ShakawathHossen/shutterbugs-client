import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { FaHome, FaPaypal, FaShoppingCart, FaUser } from 'react-icons/fa';

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const isAdmin = true;
    // const isInstructor = true;


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
                                <img className="w-20 h-20 rounded-full mx-auto mb-2" src="https://i.ibb.co/vVHPqWv/cindy.jpg" alt="Profile" />
                                <h4 className="text-lg font-bold">user.displayName</h4>
                                <p className="text-gray-600">Frontend Developer</p>
                            </div>
                        </div>
                        <hr className='border-2 border-green-600' />

                        {/* {isAdmin && (
                            <>
                                <li>
                                    <Link to="/dashboard"><FaHome /> Admin Home</Link></li>
                                <li>
                                    <Link><FaShoppingCart /> My Cart</Link>
                                </li>
                                <li>
                                    <Link ><FaPaypal /> Payment
                                    </Link>
                                </li>
                            </>
                        )}

                        {isInstructor && (
                            <>
                                <li>
                                    <Link to="/dashboard"><FaHome /> Instructor Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/myclasses"><FaShoppingCart /> My Classes
                                    </Link>
                                </li>
                                <li>
                                    <Link ><FaPaypal /> Payment
                                    </Link>
                                </li>
                            </>
                        )}

                        {!isAdmin && !isInstructor && (
                            <>
                                <li>
                                    <Link to="/dashboard"><FaHome /> Home</Link>
                                </li>
                                <li>
                                    <Link to="mycart"><FaShoppingCart /> My Selected Classes
                                    </Link>
                                </li>
                                <li>
                                    <Link ><FaPaypal /> Payment</Link>
                                </li>
                            </>
                        )} */}

                        {
                            isAdmin ? <>
                                <li> <Link><FaHome></FaHome>Admin Home</Link> </li>
                                <li> <Link to='allusers'><FaUser></FaUser>Manage Users</Link> </li>
                                <li> <Link><FaPaypal></FaPaypal> Payment</Link> </li>

                            </>
                                : <>
                                    <li> <Link><FaHome></FaHome> Home</Link> </li>
                                    <li> <Link to='mycart'><FaShoppingCart></FaShoppingCart> My Selected Classes</Link> </li>
                                    <li> <Link><FaPaypal></FaPaypal> Payment</Link> </li>

                                </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;