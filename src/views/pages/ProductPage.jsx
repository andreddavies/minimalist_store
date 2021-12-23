import React from "react";
import withRouter from "../../hocs/withRouter";

import Header from "../../components/molecules/Header/Header";
import PagesContainer from "../../components/organisms/PagesContainer/PagesContainer";

class ProductPage extends React.Component {
  render() {
    const { productId } = this.props.params;

    return (
      <PagesContainer>
        <Header />
        <p>{productId}</p>
      </PagesContainer>
    );
  }
}

export default withRouter(ProductPage);
