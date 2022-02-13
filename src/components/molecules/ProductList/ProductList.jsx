import React from "react";
import { connect } from "react-redux";
import { store } from "../../../store";

import * as S from "./ProductList.styles";
import ProductCard from "../../atoms/ProductCard/ProductCard";

class ProductList extends React.Component {
  render() {
    const rootState = store.getState().store;

    return (
      <S.Container>
        <S.List>
          {(rootState.currentCategory !== "all" && (
            <ProductCard
              products={this.props.products.filter(
                (el) => el.category === rootState.currentCategory
              )}
            />
          )) || <ProductCard products={this.props.products} />}
        </S.List>
      </S.Container>
    );
  }
}

const mapState = (state) => ({
  store: state.store,
});

export default connect(mapState, null)(ProductList);
