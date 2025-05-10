import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import registerLottieData from '.././assets/lottie/register.json'
import authContext from '../context/AuthContext';
import GoogleLogin from './GoogleLogin';
import { toast } from 'react-toastify';


const Register = () => {
  const { createUser } = useContext(authContext);

  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const url = form.url.value;
    const password = form.password.value;

    createUser(email, password, name, url)
      .then(result => {
        console.log(result.user);
        toast.success("Registration successful!");
        form.reset();
      })
      .catch(error => {
        console.log(error.message);
        toast.error(`Registration failed: ${error.message}`);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={registerLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="ml-8 mt-4 text-5xl font-bold">Register now!</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input type="url" name='url' placeholder="photo URL" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-yellow-200">Register</button>
            </div>
          </form>

          <GoogleLogin />
        </div>
      </div>
    </div>
  );
};

export default Register;
