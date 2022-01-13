const setCurrency = (state, payload) => {
  return {
    ...state,
    currency: {
      label: payload.label,
      symbol: payload.symbol,
    },
  };
};

export { setCurrency };
