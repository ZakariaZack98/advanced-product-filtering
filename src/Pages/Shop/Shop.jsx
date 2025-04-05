import React, { useContext, useState } from 'react'
import ProductCard from '../../Components/common/ProductCard'
import FilterSec from '../../Components/ShopComponents/FilterSec'
import { ProductDataContext } from '../../contexts/ProductDataContext'

const Shop = () => {
  const {productData} = useContext(ProductDataContext);
  const [filteredData, setFilteredData] = useState(productData);

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

  return (
    <div className='font-roboto'>
      <div className="headingPart py-3">
        <h3 className='font-semibold text-2xl'>Smartphone updated price | Gadget Land</h3>
        <p className='text-sm py-2'>Smartphone price in Bangladesh 2025 | Gadget Land  begins at T 5,800৳ and can go up to T 320,000৳ depending on the brand and specifications With a variety of 643 items available at Gadget Land, where 283 items are in stock now & 321 items offer you the best discount price in . Find the perfect Smartphone Components for your requirements. Search for Smartphone, best Smartphone, external Smartphone, laptop Smartphone, best Smartphone for gaming, gaming Smartphone, pci video card, Smartphone for pc, pc Smartphone, good Smartphone, pc video card, video card for pc, to learn more about our products and services. </p>
      </div>
      <div className="flex justify-between items-stretch gap-x-3 bg-gray-300 p-2">
        <div className="filters w-[17dvw] flex flex-col gap-y-3">
          {
            filterParams?.map(item => <FilterSec key={item.filterProp} filterparamsArr={item.params} filterBy={item.filter} filterProp={item.filterProp}/>)
          }
        </div>
        <div className="productGrid w-[83dvw] flex flex-wrap justify-between gap-3">
          {
            productData?.map(product => <ProductCard key={product.pid} pid={product.pid} name={product.name} imgUrl={product.imgUrl} VRAM={product.VRAM} memoryType={product.memoryType} chipsetManufacturer={product.chipSetManufacturer} retailPrice={product.retailPrice} offerPrice={product.offerPrice}/>)
          }
        </div>
      </div>
    </div>
  )
}

export default Shop
