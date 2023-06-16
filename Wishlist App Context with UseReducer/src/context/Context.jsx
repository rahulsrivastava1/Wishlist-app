import {
  createContext,
  useContext,
  useReducer,
  // useEffect,
  // useState,
} from "react";
import { faker } from "@faker-js/faker";
// import axios from "axios";
import CartReducer from "./Reducers";

const Cart = createContext();

const Context = ({ children }) => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const response = await axios.get("https://fakestoreapi.com/products");
  //     setProducts(response.data);
  //   };
  //   getProducts();
  // }, []);

  const products = [...Array(21)].map(() => ({
    id: faker.datatype.uuid(),
    title: faker.commerce.productName(),
    image: faker.image.fashion(),
    price: faker.commerce.price(),
  }));

  const [state, dispatch] = useReducer(CartReducer, {
    products: products,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
