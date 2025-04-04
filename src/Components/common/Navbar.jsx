import React from 'react';
import { FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-blue-950 text-white shadow-md">

      {/* Middle Section: Logo */}
      <div className="text-2xl font-bold text-center">
        GADGET LAND
      </div>

      <div className='w-1/3'>
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-1 text-black bg-white border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>

      

      {/* Left Section: Icons */}
      <div className="flex space-x-6">
        <FaUser className="text-xl cursor-pointer hover:text-gray-400" title="Profile" />
        <FaHeart className="text-xl cursor-pointer hover:text-gray-400" title="Wishlist" />
        <FaShoppingCart className="text-xl cursor-pointer hover:text-gray-400" title="Cart" />
      </div>

      

      {/* Right Section: Search Bar */}
      
    </div>
  );
};

export default Navbar;
