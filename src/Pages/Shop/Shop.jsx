import React, { useContext, useState } from 'react'
import ProductCard from '../../Components/common/ProductCard'
import FilterSec from '../../Components/ShopComponents/FilterSec'
import { ProductDataContext } from '../../contexts/ProductDataContext'

const Shop = () => {
  const {productData} = useContext(ProductDataContext);
  const [filteredData, setFilteredData] = useState(productData);

  return (
    <div className='font-roboto'>
      <div className="headingPart py-3">
        <h3 className='font-semibold text-2xl'>Smartphone updated price | Gadget Land</h3>
        <p className='text-sm py-2'>Smartphone price in Bangladesh 2025 | Gadget Land  begins at T 5,800৳ and can go up to T 320,000৳ depending on the brand and specifications With a variety of 643 items available at Gadget Land, where 283 items are in stock now & 321 items offer you the best discount price in . Find the perfect Smartphone Components for your requirements. Search for Smartphone, best Smartphone, external Smartphone, laptop Smartphone, best Smartphone for gaming, gaming Smartphone, pci video card, Smartphone for pc, pc Smartphone, good Smartphone, pc video card, video card for pc, to learn more about our products and services. </p>
      </div>
      <div className="flex justify-between items-stretch gap-x-3 bg-gray-300 p-2">
        <div className="filters w-[17dvw] ">
          <FilterSec/>
        </div>
        <div className="productGrid w-[83dvw] flex flex-wrap justify-between gap-3">
          {
            filteredData?.map(product => <ProductCard pid={product.pid} name={product.name} imgUrl={product.imgUrl} VRAM={product.VRAM} memoryType={product.memoryType} chipsetManufacturer={product.chipsetManufacturer} retailPrice={product.retailPrice} offerPrice={product.offerPrice}/>)
          }
        </div>
      </div>
    </div>
  )
}

export default Shop
