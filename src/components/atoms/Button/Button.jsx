import React from "react";

import * as S from "./Button.styles";

class Button extends React.PureComponent {
  render() {
    return (
      <S.Button type={this.props.type} onClick={this.props.onClick}>
        {this.props.text}
      </S.Button>
    );
  }
}

export default Button;
