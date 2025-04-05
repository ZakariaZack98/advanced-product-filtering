import React, { useContext } from "react";
import { ProductDataContext } from "../../contexts/ProductDataContext";

const SortBar = ({filteredData, setFilteredData}) => {
  const {productData} = useContext(ProductDataContext);

  const changeHandler = e => {
    if(e.currentTarget.value === 'lowToHigh') {
      const sortedData = [...filteredData].sort((a, b) => a.offerPrice - b.offerPrice)
      setFilteredData(sortedData);
    }
    else if (e.currentTarget.value === 'highToLow') {
      const sortedData = [...filteredData].sort((a, b) => b.offerPrice - a.offerPrice)
      setFilteredData(sortedData);
    } else setFilteredData(productData);
  }

  return (
    <div className="sortBar flex justify-between py-3">
      <h4 className="font-semibold text-2xl">Graphics Card</h4>
      <div className="sort flex items-center gap-x-3">
        <p>Sort By:</p>
        <select name="sortBy" id="sortBy" className="border-black border-2 px-2 py-1" onChange={e => changeHandler(e)}>
          <option value="default">Default</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default SortBar;
