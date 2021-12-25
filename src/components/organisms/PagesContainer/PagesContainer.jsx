import React from "react";

import * as S from "./PagesContainer.styles";

class PagesContainer extends React.Component {
  render() {
    return (
      <S.Container>
        <S.ChildrenWrapper>{this.props.children}</S.ChildrenWrapper>
      </S.Container>
    );
  }
}

export default PagesContainer;
