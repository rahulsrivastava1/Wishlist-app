import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHANGE_CART_QTY,
} from "./productConstants";

export type CartItem = {
  id: string;
  title?: string;
  price?: number;
  image?: string;
  qty: number;
}

export type stateType = {
  loading: boolean
  products: CartItem[]
  cart: CartItem[]
  error: string
};

type actionType = {
  type: string
  payload: CartItem
}

const initialState = {
  loading: false,
  products: [],
  cart: [],
  error: "",
} as stateType;

const CartReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload,
        cart: [],
        error: "",
      };
    case FETCH_PRODUCT_FAILURE:
      return {
        loading: false,
        products: [],
        cart: [],
        error: action.payload,
      };
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case CHANGE_CART_QTY:
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    default:
      return state;
  }
};

export default CartReducer;
