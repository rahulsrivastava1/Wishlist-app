import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  fetchProducts,
} from "../redux/product/productActions";
import { stateType } from "../redux/product/productReducers";
import "./css/ProductPage.css";

const ProductPage = () => {
  const { products, cart } = useSelector((state: stateType) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(fetchProducts());
  }, []);

  const renderedItems = products.map((product) => {
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
        {cart.some((p) => p.id === product.id) ? (
          <button
            className={`product-btn red`}
            onClick={() => dispatch(removeFromCart(product))}
          >
            Remove from Cart
          </button>
        ) : (
          <button
            className={`product-btn green`}
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        )}
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
