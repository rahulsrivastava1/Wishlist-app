import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { stateType } from "../redux/product/productReducers";
import "./css/Navbar.css";

const Navbar = () => {
  const cart = useSelector((state: stateType) => state.cart);

  return (
    <nav className="navbar">
      <div className="list">
        <Link to="/" className="list-item-1">
          Home
        </Link>
        <Link to="/cart" className="list-item-2">
          {cart.length === 0 ? "Cart" : `Cart (${cart.length})`}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
