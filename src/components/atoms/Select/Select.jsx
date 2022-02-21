import React from "react";

import { store } from "../../../store";

import * as S from "./Select.styles";

class Select extends React.Component {
  render() {
    const { dispatch } = store;
    const rootState = store.getState().store;

    return (
      <S.Select
        multiple={false}
        onChange={this.props.onChange}
        onFocus={() =>
          rootState.cartOverlay && dispatch.store.setCartOverlay(false)
        }
      >
        {this.props.children}
      </S.Select>
    );
  }
}

export default Select;
