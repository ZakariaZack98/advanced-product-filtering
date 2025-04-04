import React from 'react'
import ProductCard from '../../Components/common/ProductCard'

const Shop = () => {
  return (
    <div>
      <div className="headingPart py-3">
        <h3 className='font-semibold text-2xl'>Smartphone updated price | Gadget Land</h3>
        <p className='text-sm py-2'>Smartphone price in Bangladesh 2025 | TechLand BD begins at BDT 5,800৳ and can go up to BDT 320,000৳ depending on the brand and specifications With a variety of 643 items available at TechLand, where 283 items are in stock now & 321 items offer you the best discount price in BD. Find the perfect Smartphone Components for your requirements. Search for Smartphone, best Smartphone, external Smartphone, laptop Smartphone, best Smartphone for gaming, gaming Smartphone, pci video card, Smartphone for pc, pc Smartphone, good Smartphone, pc video card, video card for pc, to learn more about our products and services. </p>
      </div>
      <div className="flex justify-between items-stretch gap-x-3">
        <div className="filters w-[17dvw] ">

        </div>
        <div className="productGrid w-[83dvw] flex flex-wrap justify-between gap-3">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </div>
    </div>
  )
}

export default Shop
