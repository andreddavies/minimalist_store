import { price } from "./masks";
import { store } from "../store";

const getCartTotalPrice = () => {
  const rootState = store.getState().store;

  const prices = rootState.cart.products.map((el) => {
    if (el.quantity > 1) {
      return (
        el.prices.find((el) => el.currency.label === rootState.currency.label)
          .amount * el.quantity
      );
    }
    return el.prices.find(
      (el) => el.currency.label === rootState.currency.label
    ).amount;
  });
  const totalPrice = prices.reduce((a, b) => a + b, 0);

  return (
    (rootState.cart.products.length > 0 &&
      price(totalPrice)[rootState.currency.label]()) ||
    0
  );
};

export default getCartTotalPrice;
