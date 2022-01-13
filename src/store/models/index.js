import { createModel } from "@rematch/core";

import { setCurrency } from "./currency";
import { setCart, clearCart } from "./cart";
import { setCartOverlay } from "./cartOverlay";

export const store = createModel()({
  state: {
    currency: {
      symbol: "$",
      label: "USD",
    },
    cart: {
      quantity: 0,
      products: [],
      totalPrice: 0,
    },
    cartOverlay: false,
  },
  reducers: {
    setCart,
    clearCart,
    setCurrency,
    setCartOverlay,
  },
});

export const models = { store };
