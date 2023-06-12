import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import { Toaster, toast } from 'react-hot-toast';
import { Helmet } from 'react-helmet';

const Registration = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const onSubmit = data => {

        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.data;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        const saveUser = { ...loggedUser, name: data.name, email: data.email, photo: data.photo}
                        fetch('https://shutter-bugs-server.vercel.app/users', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(saveUser)

                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data)
                                if (data.insertedId) {
                                    reset();
                                    toast.success('Registration Successfull')
                                    
                                }
                                navigate('/')
                            })

                    })
                    .catch(err => {
                        console.log(err)
                    })
                // Reset the form
                reset();
            })
    }
        ;

    return (
        <div className='md:py-6 background'>
             <Helmet>
                <title>ShuterBugs | Registration</title>
            </Helmet>
            <div><Toaster/></div>
            <div className="grid md:grid-cols-3 py-16 justify-center align-content-center justify-items-center">
                <div></div>

                <div className='shadow-xl shadow-slate-800 rounded-3xl'>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control ">
                            <label className="label">

                            </label>

                            <input type="text" {...register("name", { required: true })} name='name' placeholder="Your Name" className="input input-bordered" />
                            {errors.name && <span className='text-red-600'>Name is required</span>}
                        </div>
                        <div className="form-control ">

                            <label className="label">

                            </label>
                            <input type="email"  {...register("email", { required: true })} name='email' placeholder="Your Email" className="input input-bordered" />
                            {errors.email && <span className='text-red-600'>Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">Password</label>
                            <input
                                type="password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters long",
                                    },
                                    pattern: {
                                        value: /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$#!%*?&]+$/,
                                        message: 'Uppercase or Special Character Missing',
                                    },
                                })}
                                name="password"
                                placeholder="Password"
                                className="input input-bordered"
                            />
                            {errors.password && <span className='text-red-600'>{errors.password.message}</span>}
                        </div>
                        {/* <div className="form-control">
                            <label className="label">

                            </label>
                            <input type="password" {...register("password", { required: true })} name='password' placeholder=" Confirm Password" className="input input-bordered" />
                            {errors.password && <span>This field is required</span>}

                        </div> */}
                        <div className="form-control ">
                            <label className="label">

                            </label>
                            <input type="text" {...register("photo", { required: true })} name='photo' placeholder="Photo Url" className="input input-bordered" />
                            {errors.photo && <span className='text-red-600'>Photo Url is required</span>}
                        </div>
                        <div className="mt-6 form-control">
                            <button className="border customButton" type="submit">Submit</button>
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