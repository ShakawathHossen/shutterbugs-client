import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';

const Dashboard = () => {
    const {user}=useContext(AuthContext)


    return (
        <div className=''>
            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className=" drawer-buttona lg:hidden absolute right-0 bottom-0">x</label>

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
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;