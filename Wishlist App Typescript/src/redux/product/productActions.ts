import axios from "axios";
import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHANGE_CART_QTY,
} from "./productConstants";
import store from "../store";
import { CartItem } from "./productReducers";

export const fetchProductRequest = () => {
  return {
    type: FETCH_PRODUCT_REQUEST,
  };
};

export const fetchProductSuccess = (products: CartItem) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: products,
  };
};

export const fetchProductFailure = (error: string) => {
  return {
    type: FETCH_PRODUCT_FAILURE,
    payload: error,
  };
};

export const addToCart = (product: CartItem) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (product: CartItem) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};

export const changeCartQuantity = (product: CartItem) => {
  return {
    type: CHANGE_CART_QTY,
    payload: product,
  };
};

export type DispatchType = typeof store.dispatch;

export const fetchProducts = () => {
  return (dispatch: DispatchType) => {
    dispatch(fetchProductRequest());
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        const products = res.data;
        dispatch(fetchProductSuccess(products));
      })
      .catch((err) => {
        const errorMsg = err.message;
        dispatch(fetchProductFailure(errorMsg));
      });
  };
};
