import React, { useState } from 'react';

const PriceSlider = ({filteredData, setFilteredData}) => {
  const [minValue, setMinValue] = useState(129); // Initial minimum value
  const [maxValue, setMaxValue] = useState(1899); // Initial maximum value
  const minRange = 129; // Minimum range value
  const maxRange = 1899; // Maximum range value

  const updateFilteredData = () => {
    const clonedFilteredData = [...filteredData];
    const updatedFilteredData = clonedFilteredData.filter(data => data.offerPrice >= minValue && data.offerPrice <= maxValue);
    setFilteredData(updatedFilteredData)
  }

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 1); // Ensure minValue is less than maxValue
    setMinValue(value);
    updateFilteredData()
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 1); // Ensure maxValue is greater than minValue
    setMaxValue(value);
    updateFilteredData();
  };

  const handleMinInputBlur = (e) => {
    const value = Math.max(minRange, Math.min(Number(e.target.value), maxValue - 1)); // Ensure value is within range
    setMinValue(value);
  };

  const handleMaxInputBlur = (e) => {
    const value = Math.min(maxRange, Math.max(Number(e.target.value), minValue + 1)); // Ensure value is within range
    setMaxValue(value);
  };

  return (
    <div className="bg-white rounded-md p-2 price-slider w-full flex flex-col items-center">
      <h4 className='w-full text-start text-gray-400 font-semibold mb-5 '>Price</h4>
      <div className="relative w-full h-2">
        <div
          className="absolute h-2 bg-blue-500 rounded-lg pointer-events-none"
          style={{
            left: `${(minValue / maxRange) * 100}%`,
            right: `${100 - (maxValue / maxRange) * 100}%`,
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

      {/* Display Min and Max Values as Input Fields */}
      <div className="flex justify-between w-full mt-4 text-sm text-gray-700">
        <input
          type="number"
          value={minValue}
          onChange={(e) => setMinValue(Number(e.target.value))} // Allow temporary input
          onBlur={handleMinInputBlur} // Validate on blur
          className="w-20 p-1 border border-gray-300 rounded"
        />
        <input
          type="number"
          value={maxValue}
          onChange={(e) => setMaxValue(Number(e.target.value))} // Allow temporary input
          onBlur={handleMaxInputBlur} // Validate on blur
          className="w-20 p-1 border border-gray-300 rounded"
        />
      </div>
    </div>
  );
};

export default PriceSlider;
