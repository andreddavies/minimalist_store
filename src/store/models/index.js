import { createModel } from "@rematch/core";

import {
  setCart,
  clearCart,
  setAttributes,
  setCurrentImage,
  setProductQuantity,
} from "./cart";
import { setCategory } from "./category";
import { setCurrency } from "./currency";
import { setCartOverlay } from "./cartOverlay";
import { setAlert, clearAlert } from "./alert";

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
    setCurrentImage,
    setProductQuantity,
  },
});

export const models = { store };
