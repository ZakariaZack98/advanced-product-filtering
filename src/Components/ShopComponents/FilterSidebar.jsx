import React from "react";
import FilterSec from '../../Components/ShopComponents/FilterSec'
import PriceSlider from "./PriceSlider";

const FilterSidebar = ({filterParams, filteredData, setFilteredData}) => {
  return (
    <div className="filters w-[17dvw] flex flex-col gap-y-3">
      <PriceSlider filteredData={filteredData} setFilteredData={setFilteredData}/>
      {filterParams?.map((item) => (
        <FilterSec
          key={item.filterProp}
          filterparamsArr={item.params}
          filterBy={item.filter}
          filterProp={item.filterProp}
        />
      ))}
    </div>
  );
};

export default FilterSidebar;
