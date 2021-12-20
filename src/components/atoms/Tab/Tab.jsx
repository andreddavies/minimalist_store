import React from "react";

import * as S from "./Tab.styles";

class Tab extends React.Component {
  render() {
    return (
      <S.TabContainer width={this.props.width} isActive={this.props.isActive}>
        <S.Paragraph>{this.props.text}</S.Paragraph>
      </S.TabContainer>
    );
  }
}

export default Tab;
