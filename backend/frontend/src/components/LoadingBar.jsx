// src/components/LoadingBar.jsx
import React from 'react';

const LoadingBar = () => {
  return (
    <div className="relative w-full h-1 bg-gray-200 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-loading-bar"></div>
    </div>
  );
};

export default LoadingBar;
