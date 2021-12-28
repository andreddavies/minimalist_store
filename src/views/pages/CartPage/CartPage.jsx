import React from "react";

import Cart from "../../../components/molecules/Cart/Cart";
import PagesContainer from "../../../components/organisms/PagesContainer/PagesContainer";

class CartPage extends React.Component {
  render() {
    return (
      <PagesContainer>
        <Cart />
      </PagesContainer>
    );
  }
}

export default CartPage;
