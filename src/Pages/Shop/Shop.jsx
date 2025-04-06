import React, { useContext, useEffect, useState } from 'react'
import ProductCard from '../../Components/common/ProductCard'
import { ProductDataContext } from '../../contexts/ProductDataContext'
import { UserFilterContext } from '../../contexts/UserFilterContext'
import SortBar from '../../Components/ShopComponents/SortBar'
import Heading from '../../Components/ShopComponents/Heading'
import FilterSidebar from '../../Components/ShopComponents/FilterSidebar'
import Directory from '../../Components/common/Directory'

const Shop = () => {
  const {productData} = useContext(ProductDataContext);
  const [filteredData, setFilteredData] = useState([]);
  const {userFilter} = useContext(UserFilterContext);


  /**
   * TODO: EXTRACTING POSSIBE FILTERING FACTORS FROM PRODUCT DATA STORING INSIDE AN OBJECT (filterParams)
   * filter: Filter Title
   * filterProp: The property which will be checked between user provided filltering data and product data
   * params: The filtering factors varaiations (ie, chipset, vram ammount, brand ...)
   */ 
  
  const filterParams = [
    {
      filter: 'Chipset',
      filterProp: 'chipSetManufacturer',
      params: Array.from(new Set([...productData.map(product => product.chipSetManufacturer)])),
    },
    {
      filter: 'Brands',
      filterProp: 'brand',
      params: Array.from(new Set([...productData.map(product => product.brand)])),
    },
    {
      filter: 'VRAM Capacity',
      filterProp: 'VRAM',
      params: Array.from(new Set([...productData.map(product => product.VRAM)])).sort((a, b) => a - b),
    },
    {
      filter: 'Memory Type',
      filterProp: 'memoryType',
      params: Array.from(new Set([...productData.map(product => product.memoryType)])),
    },
    {
      filter: 'Fan Count',
      filterProp: 'fanCount',
      params: Array.from(new Set([...productData.map(product => product.fanCount)])).sort((a, b) => a - b),
    },
  ]


  /**
   * TODO: FILTER & SHOW PRODUCT BASED ON USER PROVIDED FILTERING (userFilter)
   * */ 
  useEffect(() => {
    if (productData.length === 0) return; 

    const updatedFilteredData = productData.filter(data => {
      return Object.keys(userFilter).every(key => {
        if (userFilter[key].length === 0) return true;
        return userFilter[key].includes(data[key]);
      });
    });
    setFilteredData(updatedFilteredData);
  }, [userFilter, productData]);

  //TODO: INITIATING DISPLAYING THE PRODUCT ON FIRST TIME LOAD WHEN NO FILTER IS APPLIED YET
  useEffect(() => {
    setFilteredData(productData); 
  }, [productData]);

  return (
    <div className='font-roboto'>
      <Directory/>
      <Heading/>
      <SortBar filteredData={filteredData} setFilteredData={setFilteredData}/>
      <div className="flex justify-between items-start gap-x-3 bg-gray-300 p-2">
        <FilterSidebar filterParams={filterParams} filteredData={filteredData} setFilteredData={setFilteredData}/>
        <div className="productGrid w-full flex flex-wrap justify-start items-start gap-3">
          {
            filteredData?.map(product => (
              <ProductCard
                key={product.pid}
                pid={product.pid}
                name={product.name}
                imgUrl={product.imgUrl}
                VRAM={product.VRAM}
                memoryType={product.memoryType}
                chipsetManufacturer={product.chipSetManufacturer}
                retailPrice={product.retailPrice}
                offerPrice={product.offerPrice}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Shop
