import React from "react";
import { connect } from "react-redux";

import * as S from "./Select.styles";

class Select extends React.Component {
  render() {
    const { onChange, children, cartOverlay, defaultValue, setCartOverlay } =
      this.props;

    return (
      <S.Select
        multiple={false}
        onChange={onChange}
        defaultValue={defaultValue}
        onFocus={() => cartOverlay && setCartOverlay(false)}
      >
        {children}
      </S.Select>
    );
  }
}

const mapState = (state) => ({
  cartOverlay: state.store.cartOverlay,
});

const mapDispatch = (dispatch) => ({
  setCartOverlay: dispatch.store.setCartOverlay,
});

export default connect(mapState, mapDispatch)(Select);
