import { price } from "./masks";
import { store } from "../store";

const getProductTotalPrice = (product) => {
  const rootState = store.getState().store;

  const prices = () => {
    if (product.quantity > 1) {
      return (
        product.prices.find((price) => {
          return price.currency.label === rootState.currency.label;
        }).amount * product.quantity
      );
    }
    return product.prices.find((price) => {
      return price.currency.label === rootState.currency.label;
    }).amount;
  };
  const totalPrice = prices();

  return price(totalPrice)[rootState.currency.label]();
};

export default getProductTotalPrice;
