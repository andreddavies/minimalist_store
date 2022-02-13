export const price = (data) => {
  return {
    USD: () => {
      return data.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    },
    GBP: () => {
      return data.toLocaleString("en-GB", {
        style: "currency",
        currency: "GBP",
      });
    },
    AUD: () => {
      return data.toLocaleString("en-US", {
        style: "currency",
        currency: "AUD",
      });
    },
    JPY: () => {
      return data.toLocaleString("ja-JP", {
        style: "currency",
        currency: "JPY",
      });
    },
    RUB: () => {
      return data.toLocaleString("ru-RU", {
        style: "currency",
        currency: "RUB",
      });
    },
  };
};
