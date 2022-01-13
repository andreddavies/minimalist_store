import React from "react";

import * as S from "./Select.styles";

class Select extends React.Component {
  render() {
    return (
      <S.Select onChange={this.props.onChange}>{this.props.children}</S.Select>
    );
  }
}

export default Select;
