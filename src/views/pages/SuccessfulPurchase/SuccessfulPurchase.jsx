import React, { PureComponent } from "react";

import * as S from "./SuccessfulPurchase.styles";

class SuccessfulPurchase extends PureComponent {
  render() {
    return (
      <S.Container>
        <img src="https://cdn.shopify.com/s/files/1/0322/1766/1575/files/casareviva.com_-_compra_realizada_com_sucesso.png?v=1584383485" />
      </S.Container>
    );
  }
}

export default SuccessfulPurchase;
