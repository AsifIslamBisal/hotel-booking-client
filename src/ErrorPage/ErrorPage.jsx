import Lottie from "lottie-react";

import errorAnimation from '../assets/lottie/error.json';
const ErrorPage = () => {
    return (
        <div className="error-page">
        <h1>404 Not Found</h1>
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <a href="/">Go Back to Home</a>
        <div>
          <Lottie animationData={errorAnimation}></Lottie>
        </div>
      </div>
    );
};

export default ErrorPage;