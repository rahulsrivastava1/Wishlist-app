import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/ProductPage.css";

const ProductPage = ({ setProduct, wishlist }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    };
    getProducts();
  }, [wishlist]);

  const renderedItems = products.map((product) => {
    const result = wishlist?.find(({ id }) => {
      if (id === product.id) return id;
      else return 0;
    });

    return (
      <div className="card" key={product.id}>
        <figure className="img-container">
          <img className="image" src={product.image} alt="product" />
        </figure>
        <div className="body">
          <h4>{product.title}</h4>
          <h5>
            <b>{`Rs. ${product.price}`}</b>
          </h5>
        </div>
        <button
          className={`product-btn ${
            result?.id === product.id ? "red" : "green"
          }`}
          onClick={() => {
            setProduct(product);
          }}
        >
          {result?.id === product.id ? "Added to cart" : "Add to cart"}
        </button>
      </div>
    );
  });

  return (
    <div>
      <h1 className="heading">
        {products.length === 0 ? "Loading..." : "Products Page!"}
      </h1>
      <div className="container">{renderedItems}</div>
    </div>
  );
};

export default ProductPage;
