import React from "react";
import withRouter from "../../../hocs/withRouter";

import Product from "../../../components/molecules/Product/Product";
import PagesContainer from "../../../components/organisms/PagesContainer/PagesContainer";

class ProductPage extends React.Component {
  render() {
    return (
      <PagesContainer>
        <Product productId={this.props.params.productId} />
      </PagesContainer>
    );
  }
}

export default withRouter(ProductPage);
