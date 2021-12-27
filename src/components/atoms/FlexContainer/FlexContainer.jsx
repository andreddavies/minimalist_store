import React from "react";

import * as S from "./FlexContainer.styles";

class FlexContainer extends React.Component {
  render() {
    return (
      <S.Container
        width={this.props.width}
        align={this.props.align}
        justify={this.props.justify}
        direction={this.props.direction}
        styleProps={this.props.styleProps}
      >
        {this.props.children}
      </S.Container>
    );
  }
}

export default FlexContainer;
