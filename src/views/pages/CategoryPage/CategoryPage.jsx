import React from "react";
import { Link } from "react-router-dom";

import PagesContainer from "../../../components/organisms/PagesContainer/PagesContainer";

import * as S from "./CategoryPage.styles";

class CategoryPage extends React.Component {
  render() {
    const productId = "ps-5";
    return (
      <PagesContainer>
        <h1>Category Page</h1>
        <Link to={`/product/${productId}`}>Playstation 5</Link>
      </PagesContainer>
    );
  }
}

export default CategoryPage;
