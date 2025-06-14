import React from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from '../assets/Loading.json';

const LoadingAnimation: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="h-32 w-64">
        <Lottie animationData={loadingAnimation} loop={true} autoplay={true} />
      </div>
    </div>
  );
};

export default LoadingAnimation;
