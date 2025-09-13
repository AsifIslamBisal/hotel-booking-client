import React, { useContext } from 'react';
import loginLottieJSON from '../assets/lottie/login.json'
import Lottie from 'lottie-react';
import authContext from '../context/AuthContext';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import GoogleLogin from './GoogleLogin';
import { toast } from 'react-toastify';

const SignIn = () => {
  
    const {signInUser} = useContext(authContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('in signIn page', location)
    const from = location.state || '/';

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        signInUser(email,password)
        .then(result =>{
          toast.success("Login successful!");
          form.reset();
        })
        .catch(error =>{
          console.error(error);
          toast.error("Login failed: " + error.message);
  
            
        })
       
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-96">
            <Lottie animationData={loginLottieJSON}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="ml-8 mt-4 text-5xl font-bold">Login now!</h1>
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            
            
              <GoogleLogin></GoogleLogin>
            <div className=' pl-24'>
              <p className='px-6'><small>New Hear? <Link to="/register" className='text-blue-600'>Create an account</Link></small></p>
            </div>
          </div>
          
        </div>
      </div>
    );
};

export default SignIn;