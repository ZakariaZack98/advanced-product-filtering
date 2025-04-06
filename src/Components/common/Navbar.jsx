import React, { Component, useContext, useEffect, useState } from 'react';
import { FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { ProductDataContext } from '../../contexts/ProductDataContext';
import SearchResult from './SearchResult';

const Navbar = () => {
  const [searchInput, setSearchInput] = useState('');
  const { productData } = useContext(ProductDataContext);
  const [matchedProducts, setMatchedProducts] = useState([]);


  /**
   * TODO: SHOW SEARCH RESULT======================================
   * @param {string} searchInput
   * @returns {Component} SearchResult
   * 
  */
  useEffect(() => {
    if(searchInput.length > 2) { 
      const matchedBySearch = productData.filter(product =>
        product.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setMatchedProducts(matchedBySearch);
    } else setMatchedProducts([])
  }, [searchInput, productData]);

  const searchHandler = (value) => {
    setSearchInput(value);
  };

  return (
    <div className="flex items-center justify-between px-6 py-4 bg-blue-950 text-white shadow-md relative z-50">
      <div className="text-2xl font-bold text-center">
        GADGET LAND
      </div>

      <div className="w-1/3 relative">
        <input
          type="text"
          placeholder="Search Products..."
          className="w-full px-4 py-1 text-black bg-white border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          value={searchInput}
          onChange={(e) => searchHandler(e.target.value)} 
        />
        <SearchResult matchedProducts={matchedProducts} />
      </div>

      {/* Left Section: Icons */}
      <div className="flex space-x-6">
        <FaUser className="text-xl cursor-pointer hover:text-gray-400" title="Profile" />
        <FaHeart className="text-xl cursor-pointer hover:text-gray-400" title="Wishlist" />
        <FaShoppingCart className="text-xl cursor-pointer hover:text-gray-400" title="Cart" />
      </div>
    </div>
  );
};

export default Navbar;
