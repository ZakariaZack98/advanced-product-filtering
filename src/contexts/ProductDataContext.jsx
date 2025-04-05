import React, { createContext, useEffect, useState } from "react";
import gpuData from "../lib/gpuData.json";
const ProductDataContext = createContext();

const ProductDataProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    // fetch("https://dummyjson.com/products/category/smartphones") //* DATA WILL BE PLACED DYNAMICALLY
    //   .then((res) => res.json())
    //   .then((data) => setProductData(data.products))
    //   .catch(console.error);
    // JSON.parse('../lib/gpuData.json')
    setProductData(gpuData);
  }, []);

  return <ProductDataContext.Provider value={{productData, setProductData}}>
    {children}
  </ProductDataContext.Provider>;
};

export { ProductDataContext , ProductDataProvider }
