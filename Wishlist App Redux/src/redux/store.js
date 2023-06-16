import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import cartReducer from "../redux/product/productReducers";

const store = createStore(
  cartReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
