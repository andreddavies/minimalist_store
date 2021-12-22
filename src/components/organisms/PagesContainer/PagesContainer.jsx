import React from "react";

import * as S from "./PagesContainer.styles";

class PagesContainer extends React.Component {
  render() {
    return (
      <S.Container>
        <div>{this.props.children}</div>
      </S.Container>
    );
  }
}

export default PagesContainer;
