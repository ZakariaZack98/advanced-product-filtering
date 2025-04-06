//! THIS SLIDER NEEDS TO BE MADE DYNAMIC, RECiEVE RANGE FROM FILTERED DATA

import React, { useState, useContext } from 'react';
import { ProductDataContext } from '../../contexts/ProductDataContext';

const PriceSlider = ({ filteredData, setFilteredData }) => {
  const [minValue, setMinValue] = useState(129); 
  const [maxValue, setMaxValue] = useState(1899); 
  const maxRange = 1899; 
  const minRange = 129;
  const {productData} = useContext(ProductDataContext);

  const updateFilteredData = (newMinValue, newMaxValue) => {
    const updatedFilteredData = productData.filter(
      (data) => data.offerPrice >= newMinValue && data.offerPrice <= newMaxValue
    );
    console.log(newMinValue, maxValue, updatedFilteredData.length)
    setFilteredData(updatedFilteredData);
  };

  const handleMinChange = (e) => {
    const value = Number(e.target.value);
    if (value < maxValue) {
      setMinValue(value); 
    }
    updateFilteredData(value, maxValue); 
  };

  const handleMaxChange = (e) => {
    const value = Number(e.target.value);
    if (value > minValue) {
      setMaxValue(value); 
    }
    updateFilteredData(minValue, value); 
  };

  const handleMinInputBlur = (e) => {
    const value = Math.max(minRange, Math.min(Number(e.target.value), maxValue - 1)); 
    setMinValue(value);
    updateFilteredData(value, maxValue); 
  };

  const handleMaxInputBlur = (e) => {
    const value = Math.min(maxRange, Math.max(Number(e.target.value), minValue + 1)); 
    setMaxValue(value);
    updateFilteredData(minValue, value); 
  };

  return (
    <div className="bg-white rounded-md p-2 price-slider w-full flex flex-col items-center">
      <h4 className="w-full text-start text-gray-400 font-semibold mb-5">Price</h4>
      <div className="relative w-full h-2">
        <div
          className="absolute h-2 bg-blue-500 rounded-lg pointer-events-none"
          style={{
            left: `${((minValue - minRange) / (maxRange - minRange)) * 100}%`,
            right: `${100 - ((maxValue - minRange) / (maxRange - minRange)) * 100}%`,
          }}
        ></div>

        {/* Left Thumb */}
        <input
          type="range"
          min={minRange}
          max={maxRange}
          value={minValue}
          onChange={handleMinChange}
          className="absolute h-2 bg-transparent appearance-none pointer-events-auto z-30"
          style={{
            width: '100%',
            left: 0,
          }}
        />

        {/* Right Thumb */}
        <input
          type="range"
          min={minRange}
          max={maxRange}
          value={maxValue}
          onChange={handleMaxChange}
          className="absolute h-2 bg-transparent appearance-none pointer-events-auto z-20"
          style={{
            width: '100%',
            left: 0,
          }}
        />
      </div>

      
      <div className="flex justify-between w-full mt-4 text-sm text-gray-700">
        <input
          type="number"
          value={minValue}
          onChange={(e) => setMinValue(Number(e.target.value))} 
          onBlur={handleMinInputBlur} 
          className="w-20 p-1 border border-gray-300 rounded"
        />
        <input
          type="number"
          value={maxValue}
          onChange={(e) => setMaxValue(Number(e.target.value))} 
          onBlur={handleMaxInputBlur} 
          className="w-20 p-1 border border-gray-300 rounded"
        />
      </div>
    </div>
  );
};

export default PriceSlider;
