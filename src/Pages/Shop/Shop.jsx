import React, { useContext, useEffect, useState } from 'react'
import ProductCard from '../../Components/common/ProductCard'
import { ProductDataContext } from '../../contexts/ProductDataContext'
import { UserFilterContext } from '../../contexts/UserFilterContext'
import SortBar from '../../Components/ShopComponents/SortBar'
import Heading from '../../Components/ShopComponents/Heading'
import FilterSidebar from '../../Components/ShopComponents/FilterSidebar'

const Shop = () => {
  const {productData} = useContext(ProductDataContext);
  const [filteredData, setFilteredData] = useState([]);
  const {userFilter} = useContext(UserFilterContext);

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

  useEffect(() => {
    setFilteredData(productData); 
  }, [productData]);

  return (
    <div className='font-roboto'>
      <Heading/>
      <SortBar filteredData={filteredData} setFilteredData={setFilteredData}/>
      <div className="flex justify-between items-stretch gap-x-3 bg-gray-300 p-2">
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
