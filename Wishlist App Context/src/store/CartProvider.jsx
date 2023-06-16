import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCartHandler = (item) => {
    const result = cartItems.find(({ id }) => id === item.id);
    if (!result) setCartItems([...cartItems, item]);
  };

  const removeToCartHandler = (id) => {
    const filteredProduct = cartItems.filter((item) => item.id !== id);
    setCartItems(filteredProduct);
  };

  const cartContext = {
    items: cartItems,
    addItem: addToCartHandler,
    removeItem: removeToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
