import React from "react";
import "./css/Wishlist.css";

const Wishlist = (props) => {
  const renderedProducts = props.wishlist.map((item) => {
    return (
      <div key={item.id}>
        <div className="wishlist-container">
          <div className="wishlist-card" key={item.id}>
            <img className="product-image" src={item.image} alt="product" />
            <div className="card-body">
              <h3>{item.title}</h3>
              <h4>
                <strong>{`Rs. ${item.price}`}</strong>
              </h4>
              <p>{item.description}</p>
              <button
                className="cart-btn"
                onClick={() => props.removeProduct(item)}
              >
                Remove from cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });

  if (props.wishlist.length === 0) {
    return (
      <div>
        <h1 className="empty">Please add items in cart first!</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="heading">Your items </h1>
        {renderedProducts}
      </div>
    );
  }
};

export default Wishlist;
