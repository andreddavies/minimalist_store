const setAlert = (state, payload) => {
  return {
    ...state,
    alert: {
      isShowing: true,
      type: payload.type,
      message: payload.message,
    },
  };
};

const clearAlert = (state) => {
  return {
    ...state,
    alert: {
      isShowing: false,
      type: "warning",
      message: "",
    },
  };
};

export { setAlert, clearAlert };
