import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./css/CartCheckout.css";

const CartCheckout = () => {
  const cart = useSelector(state => state.cart);

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <>
      <span className="title">{`Subtotal (${cart.length}) items`}</span>
      <span className="price">Total: ₹ {total}</span>
      <button
        type="button"
        className="btn-checkout"
        disabled={cart.length === 0}
      >
        Proceed to Checkout
      </button>
    </>
  );
};

export default CartCheckout;
