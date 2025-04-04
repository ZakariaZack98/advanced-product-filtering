import React from "react";
import Shop from "./Pages/Shop/Shop";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CommonLayout from "./Components/CommonLayout";
import { ProductDataProvider } from "./contexts/ProductDataContext";

const App = () => {
  return (
    <ProductDataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CommonLayout />}>
            <Route index element={<Shop />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProductDataProvider>
  );
};

export default App;
