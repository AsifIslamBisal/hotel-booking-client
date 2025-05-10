import React from 'react';
import errorLottieData from '.././assets/lottie/Animation - 1746817795434.json'
const ErrorPage = () => {
    return (
        <div className="error-page">
        <h1>404 Not Found</h1>
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <a href="/">Go Back to Home</a>
        <div>
          <Lottie animationData={errorLottieData}></Lottie>
        </div>
      </div>
    );
};

export default ErrorPage;