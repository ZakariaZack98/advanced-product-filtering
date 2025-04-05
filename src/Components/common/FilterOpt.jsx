import React, { useContext } from "react";
import { UserFilterContext } from "../../contexts/UserFilterContext";

const FilterOpt = ({ category, param, filterProp }) => {
  const { userFilter, setUserFilter } = useContext(UserFilterContext);

  const updateFilterData = (e) => {
    const updatedUserFilter = { ...userFilter };
    e.currentTarget.checked
      ? updatedUserFilter[filterProp].push(param)
      : updatedUserFilter[filterProp].splice(updatedUserFilter[filterProp].indexOf(param), 1);
    setUserFilter(updatedUserFilter);
  };

  return (
    <div className="flex gap-x-2">
      <input
        type="checkbox"
        data-category={category}
        id={param}
        name={param}
        onChange={(e) => updateFilterData(e)}
      />
      <label htmlFor={param} className="font-sm">
        {param}
      </label>
    </div>
  );
};

export default FilterOpt;
