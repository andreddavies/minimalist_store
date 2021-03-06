import React from "react";

import * as S from "./Button.styles";

class Button extends React.Component {
  render() {
    return (
      <S.Button
        type={this.props.type}
        width={this.props.width}
        margin={this.props.margin}
        height={this.props.height}
        onClick={this.props.onClick}
        fontSize={this.props.fontSize}
        btnStyle={this.props.btnStyle}
        disabled={this.props.disabled}
        fontWeight={this.props.fontWeight}
      >
        {this.props.children}
      </S.Button>
    );
  }
}

export default Button;
