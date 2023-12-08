// ProductLoader.jsx

import React from 'react';

const ProductLoader = () => (
  <div className="flex flex-col p-4 border border-gray-300 rounded">
    <div className="w-full pl-3 h-56 bg-gray-300 animate-pulse mb-2 rounded"></div>
    <div className="w-1/2 ml-3 h-4 bg-gray-300 mb-2 rounded animate-pulse"></div>
    <div className="w-full ml-3 h-4 bg-gradient-to-r from-gray-300 to-transparent animate-pulse mb-2 rounded"></div>
    <div className="w-1/3 ml-3 h-4 bg-gray-300 mb-2 rounded animate-pulse"></div>
  </div>
);

export default ProductLoader;