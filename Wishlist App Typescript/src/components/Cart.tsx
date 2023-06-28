import { useSelector, useDispatch } from "react-redux";
import {
  changeCartQuantity,
  removeFromCart,
} from "../redux/product/productActions";
import CartCheckout from "./CartCheckout";
import { stateType, CartItem } from "../redux/product/productReducers";
import "./css/Cart.css";

const Cart = () => {
  const cart = useSelector((state: stateType) => state.cart);
  const dispatch = useDispatch();

  const renderedProducts = cart.map((item: CartItem) => {
    return (
      <div key={item.id}>
        <div className="wishlist-container">
          <div className="wishlist-card" key={item.id}>
            <img className="product-image" src={item.image} alt="product" />
            <div className="card-body">
              <h1>{item.title}</h1>
              <h4>
                <strong>{`Rs. ${item.price}`}</strong>
              </h4>
              <form>
                <label htmlFor="qty">Quantity: </label>
                <select
                  name="qty"
                  id="qty"
                  onClick={(e) =>
                    dispatch(
                      changeCartQuantity({
                        id: item.id,
                        qty: Number((e.target as HTMLInputElement).value),
                      })
                    )
                  }
                >
                  {[...Array(5).keys()].map((x) => (
                    <option key={x + 1}>{x + 1}</option>
                  ))}
                </select>
              </form>
              <button
                className="cart-btn"
                onClick={() => dispatch(removeFromCart(item))}
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
