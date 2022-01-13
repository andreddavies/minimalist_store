const setCartOverlay = (state, payload) => {
  return {
    ...state,
    cartOverlay: payload,
  };
};

export { setCartOverlay };
