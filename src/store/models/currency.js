const setCurrency = (state, payload) => {
  const getPrices = () => {
    const pricesMapping = state.cart.products.map((product) => {
      return (
        product.prices.find((price) => {
          return price.currency.label === payload.label;
        }).amount * product.quantity
      );
    });

    return pricesMapping.reduce((a, b) => a + b, 0);
  };

  return {
    ...state,
    cart: {
      ...state.cart,
      totalPrice: getPrices(),
    },
    currency: {
      label: payload.label,
      symbol: payload.symbol,
    },
  };
};

export { setCurrency };
