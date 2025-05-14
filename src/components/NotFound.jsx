import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl text-white mb-6">Page Not Found</h2>
        <p className="text-gray-400 mb-8">The page you are looking for doesn't exist or has been moved.</p>
        {/* <Link 
          to="/" 
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Return Home
        </Link> */}
      </div>
    </div>
  );
};

export default NotFound;