import React from "react";

import * as S from "./PagesContainer.styles";

class PagesContainer extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <S.Container>
        <S.ChildrenWrapper>{children}</S.ChildrenWrapper>
      </S.Container>
    );
  }
}

export default PagesContainer;
