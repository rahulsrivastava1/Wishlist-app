import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ProductPage from "./ProductPage";
import Wishlist from "./Wishlist";

const App = () => {
  const [wishlist, setWishlist] = useState([]);

  const setProduct = (product) => {
    const result = wishlist.find(({ id }) => id === product.id);
    if (!result) setWishlist([...wishlist, product]);
  };

  const removeProduct = (product) => {
    const { id } = product;
    const filteredProduct = wishlist.filter((item) => item.id !== id);
    setWishlist(filteredProduct);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<ProductPage setProduct={setProduct} wishlist={wishlist} />}
        />
        <Route
          path="/wishlist"
          element={
            <Wishlist
              wishlist={wishlist}
              setWishlist={setWishlist}
              removeProduct={removeProduct}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
