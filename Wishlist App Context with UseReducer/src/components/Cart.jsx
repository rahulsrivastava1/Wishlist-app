import { CartState } from "../context/Context";
import CartCheckout from "./CartCheckout";
import "./css/Cart.css";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const renderedProducts = cart.map((item) => {
    return (
      <div key={item.id}>
        <div className="wishlist-container">
          <div className="wishlist-card" key={item.id}>
            <img className="product-image" src={item.image} alt="product" />
            <div className="card-body">
              <h1>{item.title}</h1>
              <h4>
                <strong>{`Rs. ${item.price.split(".")[0]}`}</strong>
              </h4>
              <form>
                <label for="qty">Quantity: </label>
                <select
                  name="qty"
                  id="qty"
                  onClick={(e) =>
                    dispatch({
                      type: "CHANGE_CART_QTY",
                      payload: { id: item.id, qty: e.target.value },
                    })
                  }
                >
                  {[...Array(5).keys()].map((x) => (
                    <option key={x + 1}>{x + 1}</option>
                  ))}
                </select>
              </form>
              <button
                className="cart-btn"
                onClick={() =>
                  dispatch({ type: "REMOVE_FROM_CART", payload: item })
                }
              >
                Remove from cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });

  if (cart.length === 0) {
    return (
      <>
        <div className="home">
          <div className="left">
            <h1 className="empty">Please add items in cart first!</h1>
          </div>
          <div className="right">
            <CartCheckout />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="home">
          <div className="left">
            <h1 className="heading">Your items </h1>
            {renderedProducts}
          </div>
          <div className="right">
            <CartCheckout />
          </div>
        </div>
      </>
    );
  }
};

export default Cart;
