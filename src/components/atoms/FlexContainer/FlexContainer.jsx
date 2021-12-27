import React from "react";

import * as S from "./FlexContainer.styles";

class FlexContainer extends React.Component {
  render() {
    return (
      <S.Container
        wrap={this.props.wrap}
        width={this.props.width}
        align={this.props.align}
        margin={this.props.margin}
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
