import React from "react";

import * as S from "./ProductList.styles";

class ProductList extends React.Component {
  render() {
    return (
      <S.Container>
        <S.List>
          {this.props.products.map((element, index) => (
            <S.ListItem key={index}>
              <h3>{element.title}</h3>
              <p>{element.description}</p>
            </S.ListItem>
          ))}
        </S.List>
      </S.Container>
    );
  }
}

export default ProductList;
