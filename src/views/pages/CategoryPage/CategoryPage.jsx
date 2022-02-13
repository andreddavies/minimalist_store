import React from "react";
import { connect } from "react-redux";

import ProductList from "../../../components/molecules/ProductList/ProductList";
import PagesContainer from "../../../components/organisms/PagesContainer/PagesContainer";

import { store } from "../../../store";
import { GET_PRODUCTS } from "../../../services/queries/products";

import * as S from "./CategoryPage.styles";

class CategoryPage extends React.Component {
  state = {
    productsList: [],
  };

  componentDidMount() {
    GET_PRODUCTS().then((result) => {
      this.setState({
        productsList: result.data.category.products,
      });
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== nextState || store.getState().store.currentCategory;
  }

  render() {
    const rootState = store.getState().store;

    return (
      <PagesContainer>
        <S.TitleWrapper>
          {rootState.currentCategory.toUpperCase()}
        </S.TitleWrapper>
        <ProductList products={this.state.productsList} />
      </PagesContainer>
    );
  }
}

const mapState = (state) => ({
  store: state.store,
});

export default connect(mapState, null)(CategoryPage);
