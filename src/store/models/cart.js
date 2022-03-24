const setCart = (state, payload) => {
  if (!payload.inStock) {
    alert("OUT OF STOCK");
    return { ...state };
  }
  return {
    ...state,
    cart: {
      totalPrice: 0,
      quantity: (state.cart.quantity += 1),
      products: [
        ...state.cart.products,
        { ...payload, quantity: payload.quantity },
      ],
    },
  };
};

const setAttributes = (state, payload) => {
  const product = state.cart.products.find((product) => {
    return (
      product.id === payload.id &&
      product.selectedAttributes === payload.oldAttributes
    );
  });

  product.selectedAttributes = payload.selectedAttributes;

  return {
    ...state,
  };
};

const setProductQuantity = (state, payload) => {
  const product = state.cart.products.find((product) => {
    return (
      product.id === payload.id &&
      product.selectedAttributes === payload.selectedAttributes
    );
  });

  const indexOfProduct = state.cart.products.findIndex((product) => {
    return (
      product.id === payload.id &&
      product.selectedAttributes === payload.selectedAttributes
    );
  });

  if (product.quantity === 1 && payload.operation === "decrement") {
    state.cart.products.splice(indexOfProduct, 1);
    return {
      ...state,
      cart: {
        ...state.cart,
        quantity: (state.cart.quantity -= 1),
      },
    };
  }

  if (payload.operation === "increment") product.quantity += 1;
  else product.quantity -= 1;

  return {
    ...state,
    cart: {
      ...state.cart,
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

export { setCart, setAttributes, setProductQuantity, clearCart };
