import Lottie from "lottie-react";

import errorAnimation from '../assets/lottie/error.json';
const ErrorPage = () => {
    return (
        <div className="error-page flex items-center justify-center">
        <h1>404 Not Found</h1>
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <a className='text-blue-600' href="/">Go Back to Home</a>
        <div className='w-96'>
          <Lottie animationData={errorAnimation}></Lottie>
        </div>
      </div>
    );
};

export default ErrorPage;