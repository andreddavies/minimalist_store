import React from "react";
import withRouter from "../../../hocs/withRouter";

import PagesContainer from "../../../components/organisms/PagesContainer/PagesContainer";

import * as S from "./ProductPage.styles";

class ProductPage extends React.Component {
  render() {
    const { productId } = this.props.params;

    return (
      <PagesContainer>
        <p>{productId}</p>
      </PagesContainer>
    );
  }
}

export default withRouter(ProductPage);