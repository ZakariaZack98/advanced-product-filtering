import React, { useContext } from "react";
import ButtonPrimary from "./ButtonPrimary";


const ProductCard = ({
  pid,
  imgUrl,
  name,
  VRAM,
  memoryType,
  chipsetManufacturer,
  retailPrice,
  offerPrice,
  pageLink = "/error",
}) => {
  
  return (
    <div
      className="w-[24%] max-h-118 p-2 rounded-md bg-white dark:bg-gray-700 dark:text-lightPink font-dmSans shadow-xl cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        
      }}
    >
      <picture>
        <img
          src={imgUrl}
          className=" h-[250px] mx-auto object-cover object-center "
        />
      </picture>
      <div className="textSec mt-1 h-50 flex flex-col justify-between">
        <h3 className="text-sm font-semibold max-h-25px">{name}</h3>
        <div className="featureSec text-[13px] opacity-60">
          <ul className=" list-disc ms-3">
            <li>VRAM: {VRAM}GB</li>
            <li>Memory Type: {memoryType}</li>
            <li>Chipset: {chipsetManufacturer}</li>
            <li>3 Years Warrantee</li>
          </ul>
        </div>
        <div className="priceSec flex justify-center gap-x-3 my-2">
          <strike className="text-sm font-semibold text-red-500">{retailPrice}$</strike>
          <p className="text-sm font-semibold text-green-500">{offerPrice}$</p>
        </div>
        <ButtonPrimary label={'Add to Cart'} onClick={e => console.log(`Universal cart function here`, pid)}/>
      </div>
    </div>
  );
};

export default ProductCard;