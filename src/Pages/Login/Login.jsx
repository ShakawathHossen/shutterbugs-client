import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProviders';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';



const Login = () => {
    const {signIn}= useContext(AuthContext)
    const Auth= getAuth(app);
    const googleProvider= new GoogleAuthProvider();









      // google sign in 

      const handleGoogleSignIn=()=>{
        signInWithPopup(Auth,googleProvider)
        .then(result=>{
            const loggedInUser=result.data;


        })
        .catch(err=>{console.log(err);});
    }

    // google sign in 












    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        if (password.length < 6) {
           alert('password must be 6 character long')
        }
        // email password sign in 
        // signIn(email, password)
        //     .then(result => {
        //         const user = result.user;
        //         console.log(user);
        //         nevigate(from,{replace:true})
        //         Swal.fire({
        //             title: 'login Successfull',
        //             text: 'Continue your browsing',
        //             icon: 'success',
        //             confirmButtonText: 'Thanks'
        //           })
        //     })
        //     .catch((error) => {
        //         Swal.fire(
        //             'User and password not matched',
        //           )
        //     });
        
    }





    return (
        <div className='md:py-6 background'>
            <div className="grid md:grid-cols-3 py-16 justify-center align-content-center justify-items-center">
                <div></div>



                <div className='shadow-xl shadow-slate-800 rounded-3xl'>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control ">
                            <label className="label">

                            </label>

                            <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">

                            </label>

                            <input type="password" name='password' placeholder="Password" className="input input-bordered" required />

                            <label className="label">
                                <small><input type="checkbox" name="" id="" /> show Password</small>
                            </label>
                        </div>
                        
                        <div className="mt-6 form-control">
                            <button className="border customButton">Login</button>
                        </div>
                        <div className='text-center  mt-6'>
                            <p className='text-lg  divider '>Or Connect With</p>
                            <div className='my-4'>
                                <button onClick={handleGoogleSignIn} className='px-4'>
                                    <img className='w-10' src="https://i.ibb.co/ftwyb00/Google-G-Logo-svg.png" alt="" />
                                </button>
                                <button className='px-4'>
                                    <img className='w-10' src="https://i.ibb.co/VxKN3Mg/github.png" alt="" />

                                </button>
                            </div>
                            <div>
                                <p className='text-sm'>New to <span className='font-semibold text-[#283149]'>SutterBugs</span> ?<Link to="/registration"><button className="btn btn-active btn-link normal-case text-sm text-sky-700 ">Registration Here</button>
                                </Link></p>
                            </div>
                        </div>
                    </form>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Login;