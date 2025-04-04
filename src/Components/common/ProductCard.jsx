import React, { useContext } from "react";


const ProductCard = ({
  pid,
  imgUrl,
  name,
  retailPrice,
  preferredPrice,
  buyHandler,
  pageLink = "/error",
}) => {
  
  return (
    <div
      className="w-[24%] p-5 rounded-xl bg-white dark:bg-gray-700 dark:text-lightPink font-dmSans mx-auto shadow-xl cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        
      }}
    >
      <picture>
        <img
          src='https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/2.png'
          className=" h-[250px] mx-auto object-cover object-center "
        />
      </picture>
      <div className="textSec mt-1">
        <h3 className="text-2xl font-semibold max-h-25px">Apple iPhone 5S</h3>
        <p>
          Retail: <strike>89$</strike>
        </p>
        <p>Preferred: 80$</p>
      </div>
    </div>
  );
};

export default ProductCard;