import { createContext, useContext, useEffect, useReducer } from "react";

import commerce from "../lib/commerce";

const CartStateContext = createContext();
const CardDispatchContext = createContext();

const SET_CART = "SET_CART";

const initialState = {
  total_items: 0,
  total_unique_items: 0,
  line_items: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CART:
      return { ...state, ...action.payload };
    default:
      throw new Error(`Unknown Action ${action.type}`);
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getCart()
    console.log('here')
  },[])

  const setCart = (payload) => dispatch({ type: SET_CART, payload });

  const getCart = async () => {
    try {
      const cart = await commerce.cart.retrieve();
      setCart(cart)
    } catch (err) {
      console.log(err);
    }
  };

  return(
    <CardDispatchContext.Provider value={{setCart}}>
        <CartStateContext.Provider value={state}>
            {children}
        </CartStateContext.Provider>
    </CardDispatchContext.Provider>
  )
};

export const useCartState = () => useContext(CartStateContext)
export const useCartDispatch = () => useContext(CardDispatchContext)
