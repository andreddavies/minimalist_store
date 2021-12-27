import React from "react";

import ProductList from "../../../components/molecules/ProductList/ProductList";
import PagesContainer from "../../../components/organisms/PagesContainer/PagesContainer";

import * as S from "./CategoryPage.styles";

class CategoryPage extends React.Component {
  render() {
    const products = [
      { title: "Product One", price: 2400, currency: "$", inStock: true },
    ];
    const categoryTitle = "Category One";

    return (
      <PagesContainer>
        <S.TitleWrapper>{categoryTitle}</S.TitleWrapper>
        <ProductList products={products} />
      </PagesContainer>
    );
  }
}

export default CategoryPage;
