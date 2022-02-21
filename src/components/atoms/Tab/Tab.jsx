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
        <Paragraph
          size="text16"
          weight="semiBold"
          color={(this.props.isActive && "tertiary") || "secondary"}
        >
          {this.props.text}
        </Paragraph>
      </S.TabContainer>
    );
  }
}

export default Tab;
