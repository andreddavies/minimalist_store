import React from "react";

import * as S from "./Button.styles";

class Button extends React.PureComponent {
  render() {
    return (
      <S.Button
        type={this.props.type}
        width={this.props.width}
        height={this.props.height}
        onClick={this.props.onClick}
        btnStyle={this.props.btnStyle}
        disabled={this.props.disabled}
        background={this.props.background}
      >
        {this.props.text || this.props.children}
      </S.Button>
    );
  }
}

export default Button;
