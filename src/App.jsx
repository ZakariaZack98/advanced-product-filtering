import React from "react";
import Shop from "./Pages/Shop/Shop";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CommonLayout from "./Components/CommonLayout";
import { ProductDataProvider } from "./contexts/ProductDataContext";
import { UserFilterProvider } from "./contexts/UserFilterContext";

const App = () => {
  return (
    <ProductDataProvider>
      <UserFilterProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CommonLayout />}>
              <Route index element={<Shop />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserFilterProvider>
    </ProductDataProvider>
  );
};

export default App;
