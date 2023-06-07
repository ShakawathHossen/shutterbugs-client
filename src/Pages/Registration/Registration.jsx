import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className='md:py-6 background'>
            <div className="grid md:grid-cols-3 py-16 justify-center align-content-center justify-items-center">
                <div></div>



                <div className='shadow-xl shadow-slate-800 rounded-3xl'>
                    <form className="card-body">
                        <div className="form-control ">
                            <label className="label">

                            </label>

                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control ">

                            <label className="label">

                            </label>
                            <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">

                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" required />


                        </div>
                        <div className="form-control">
                            <label className="label">

                            </label>
                            <input type="password" name='password' placeholder=" Confirm Password" className="input input-bordered" required />


                        </div>
                        <div className="form-control ">
                            <label className="label">

                            </label>
                            <input type="file" name="" id="" />
                        </div>
                        <div className="mt-6 form-control">
                            <button className="border customButton">Registration</button>
                        </div>
                        <div>
                                <p className='text-sm'>Already have an account?<Link to="/login"><button className="btn btn-active btn-link normal-case text-sm text-sky-700 ">Login Here</button>
                                </Link></p>
                            </div>
                    </form>
                    
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Registration;