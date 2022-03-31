import React from "react";

import * as S from "./FlexContainer.styles";

class FlexContainer extends React.Component {
  render() {
    const { wrap, width, margin, align, justify, column, children } =
      this.props;

    return (
      <S.Container
        wrap={wrap}
        width={width}
        align={align}
        column={column}
        margin={margin}
        justify={justify}
      >
        {children}
      </S.Container>
    );
  }
}

export default FlexContainer;
