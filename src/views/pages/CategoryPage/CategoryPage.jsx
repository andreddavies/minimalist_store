import React from "react";
import { connect } from "react-redux";

import ProductList from "../../../components/molecules/ProductList/ProductList";
import PagesContainer from "../../../components/organisms/PagesContainer/PagesContainer";

import { store } from "../../../store";

import * as S from "./CategoryPage.styles";

class CategoryPage extends React.Component {
  render() {
    const rootState = store.getState().store;

    return (
      <PagesContainer>
        <S.TitleWrapper>
          {rootState.currentCategory.toUpperCase()}
        </S.TitleWrapper>
        <ProductList />
      </PagesContainer>
    );
  }
}

const mapState = (state) => ({
  store: state.store,
});

export default connect(mapState, null)(CategoryPage);
