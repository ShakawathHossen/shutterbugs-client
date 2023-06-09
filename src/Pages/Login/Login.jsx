import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProviders';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const Auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  // Function to handle email and password sign in
  const handleEmailPasswordSignIn = data => {
    const { email, password } = data;
    signInWithEmailAndPassword(Auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        // Redirect to desired page after successful login
      })
      .catch(error => {
        console.log(error);
      });
  };

  // Function to handle Google sign in
  const handleGoogleSignIn = () => {
    signInWithPopup(Auth, googleProvider)
      .then(result => {
        const loggedInUser = result.data;
        console.log(loggedInUser);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="md:py-6 background">
      <div className="grid md:grid-cols-3 py-16 justify-center align-content-center justify-items-center">
        <div></div>
        <div className="shadow-xl shadow-slate-800 rounded-3xl">
          <form onSubmit={handleSubmit(handleEmailPasswordSignIn)} className="card-body">
            <div className="form-control">
              <label className="label">Email</label>
              <input
                type="email"
                {...register('email', { required: true })}
                name="email"
                placeholder="Your Email"
                className="input input-bordered"
                required
              />
              {errors.email && <span className="error-message">This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                {...register('password', { required: true })}
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <small>
                  <input type="checkbox" checked={showPassword} onChange={togglePasswordVisibility} /> Show Password
                </small>
              </label>
              {errors.password && <span className="error-message">This field is required</span>}
            </div>
            <div className="mt-6 form-control">
              <button className="border customButton">Login</button>
            </div>
            <div className="text-center mt-6">
              <p className="text-lg divider">Or Connect With</p>
              <div className="my-4">
                <button onClick={handleGoogleSignIn} className="px-4">
                  <img className="w-10" src="https://i.ibb.co/ftwyb00/Google-G-Logo-svg.png" alt="" />
                </button>
                <button className="px-4">
                  <img className="w-10" src="https://i.ibb.co/VxKN3Mg/github.png" alt="" />
                </button>
              </div>
              <div>
                <p className="text-sm">
                  New to <span className="font-semibold text-[#283149]">SutterBugs</span>?
                  <Link to="/registration">
                    <button className="btn btn-active btn-link normal-case text-sm text-sky-700">Registration Here</button>
                  </Link>
                </p>
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
