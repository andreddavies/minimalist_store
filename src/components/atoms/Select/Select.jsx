import React from "react";

import * as S from "./Select.styles";

class Select extends React.Component {
  render() {
    return (
      <S.Select>
        {this.props.options.map((element, index) => (
          <S.Option key={index}>{element.currency}</S.Option>
        ))}
      </S.Select>
    );
  }
}

export default Select;
