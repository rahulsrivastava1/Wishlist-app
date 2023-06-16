import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import CartContext from "../store/cart-context";
import "./css/ProductPage.css";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  const cartCtx = useContext(CartContext);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    };
    getProducts();
  }, []);

  const renderedItems = products.map((product) => {
    const result = cartCtx.items?.find(({ id }) => {
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
            cartCtx.addItem(product);
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
