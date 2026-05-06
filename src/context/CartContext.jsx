import { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext(null);

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const exists = state.items.find((i) => i.id === action.product.id);
      if (exists) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.product.id ? { ...i, qty: i.qty + 1 } : i
          ),
        };
      }
      return { ...state, items: [...state.items, { ...action.product, qty: 1 }] };
    }
    case "REMOVE":
      return { ...state, items: state.items.filter((i) => i.id !== action.id) };
    case "UPDATE_QTY":
      if (action.qty <= 0) {
        return { ...state, items: state.items.filter((i) => i.id !== action.id) };
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.id ? { ...i, qty: action.qty } : i
        ),
      };
    case "CLEAR":
      return { ...state, items: [] };
    case "LOAD":
      return { ...state, items: action.items };
    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("shopwave_cart");
      if (saved) dispatch({ type: "LOAD", items: JSON.parse(saved) });
    } catch {}
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem("shopwave_cart", JSON.stringify(state.items));
  }, [state.items]);

  const totalItems = state.items.reduce((s, i) => s + i.qty, 0);
  const totalPrice = state.items.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <CartContext.Provider value={{ items: state.items, totalItems, totalPrice, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
