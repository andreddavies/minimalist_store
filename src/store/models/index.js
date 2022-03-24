import { createModel } from "@rematch/core";

import { setCategory } from "./category";
import { setCurrency } from "./currency";
import { setCartOverlay } from "./cartOverlay";
import { setAlert, clearAlert } from "./alert";
import { setCart, setAttributes, setProductQuantity, clearCart } from "./cart";

export const store = createModel()({
  state: {
    alert: {
      isShowing: false,
      type: "warning",
      message: "",
    },
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
    currentCategory: "all",
  },
  reducers: {
    setCart,
    setAlert,
    clearCart,
    clearAlert,
    setCategory,
    setCurrency,
    setAttributes,
    setCartOverlay,
    setProductQuantity,
  },
});

export const models = { store };
