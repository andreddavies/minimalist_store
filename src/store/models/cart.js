const setCart = (state, payload) => {
  return {
    ...state,
    cart: {
      quantity: payload.quantity,
      products: payload.products,
      totalPrice: payload.totalPrice,
    },
  };
};

const clearCart = (state) => {
  return {
    ...state,
    cart: {
      quantity: 0,
      products: [],
      totalPrice: 0,
    },
  };
};

export { setCart, clearCart };
