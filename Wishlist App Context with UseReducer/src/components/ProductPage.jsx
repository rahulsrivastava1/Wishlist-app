import { CartState } from "../context/Context";
import "./css/ProductPage.css";

const ProductPage = () => {
  const {
    state: { products, cart },
    dispatch,
  } = CartState();

  const renderedItems = products.map((product) => {
    return (
      <div className="card" key={product.id}>
        <figure className="img-container">
          <img className="image" src={product.image} alt="product" />
        </figure>
        <div className="body">
          <h4>{product.title}</h4>
          <h5>
            <b>{`Rs. ${product.price.split(".")[0]}`}</b>
          </h5>
        </div>
        {cart.some((p) => p.id === product.id) ? (
          <button
            className={`product-btn red`}
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_CART", payload: product })
            }
          >
            Remove from Cart
          </button>
        ) : (
          <button
            className={`product-btn green`}
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
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
