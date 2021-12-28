import React from "react";

import * as S from "./Heading.styles";

class Heading extends React.Component {
  render() {
    return (
      <S.Container
        size={this.props.size}
        color={this.props.color}
        margin={this.props.margin}
        weight={this.props.weight}
        tabletMinScreen={this.props.tabletMinScreen}
      >
        {this.props.children}
      </S.Container>
    );
  }
}

export default Heading;
