import React from "react";
import FilterSec from '../../Components/ShopComponents/FilterSec'

const FilterSidebar = ({filterParams}) => {
  return (
    <div className="filters w-[17dvw] flex flex-col gap-y-3">
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
