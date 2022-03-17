import React from "react";
import { connect } from "react-redux";

import ProductList from "../../../components/molecules/ProductList/ProductList";
import PagesContainer from "../../../components/organisms/PagesContainer/PagesContainer";

import * as S from "./CategoryPage.styles";

class CategoryPage extends React.Component {
  render() {
    const { currentCategory } = this.props;

    return (
      <PagesContainer>
        <S.TitleWrapper>{currentCategory.toUpperCase()}</S.TitleWrapper>
        <ProductList />
      </PagesContainer>
    );
  }
}

const mapState = (state) => ({
  currentCategory: state.store.currentCategory,
});

export default connect(mapState, null)(CategoryPage);
