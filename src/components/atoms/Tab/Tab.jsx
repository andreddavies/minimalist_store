import React from "react";

import Paragraph from "../../atoms/Paragraph/Paragraph";

import * as S from "./Tab.styles";

class Tab extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props !== nextProps;
  }

  render() {
    return (
      <S.TabContainer
        width={this.props.width}
        onClick={this.props.onClick}
        isActive={this.props.isActive}
      >
        <Paragraph color="tertiary" weight="semiBold" size="text16">
          {this.props.text}
        </Paragraph>
      </S.TabContainer>
    );
  }
}

export default Tab;
