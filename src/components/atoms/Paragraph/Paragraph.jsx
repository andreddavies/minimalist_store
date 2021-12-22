import React from "react";

import * as S from "./Paragraph.styles";

class Paragraph extends React.PureComponent {
  render() {
    return (
      <S.Paragraph
        size={this.props.size}
        color={this.props.color}
        weight={this.props.weight}
      >
        {this.props.children}
      </S.Paragraph>
    );
  }
}

export default Paragraph;
