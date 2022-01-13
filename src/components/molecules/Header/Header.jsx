import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Tab from "../../atoms/Tab/Tab";
import Button from "../../atoms/Button/Button";
import Select from "../../atoms/Select/Select";
import CartIcon from "../../../icons/CartIcon";
import Heading from "../../atoms/Heading/Heading";

import { store } from "../../../store";

import * as S from "./Header.styles";

class Header extends React.Component {
  render() {
    const { dispatch } = store;
    const rootState = store.getState().store;

    const options = [
      { symbol: "$", label: "USD" },
      { symbol: "€", label: "EUR" },
      { symbol: "¥", label: "JPY" },
    ];

    return (
      <S.HeaderContainer>
        <S.Box>
          <Tab width="100%" isActive={true} text="Women" />
        </S.Box>
        <S.Box>
          <Link to="/">
            <S.Image src={`${process.env.PUBLIC_URL}/assets/logo.png`} />
          </Link>
        </S.Box>
        <S.Box justify="flex-start">
          <Select
            onChange={(event) => {
              dispatch.store.setCurrency(options[event.target.selectedIndex]);
            }}
          >
            {options.map((option, index) => (
              <option key={index}>
                {option.symbol} {option.label}
              </option>
            ))}
          </Select>
          <S.Box>
            <Button
              width="20px"
              type="button"
              height="20px"
              btnStyle="none"
              onClick={() => {
                dispatch.store.setCartOverlay(!rootState.cartOverlay);
              }}
            >
              <CartIcon width={20} height={20} />
              {rootState.cart.quantity > 0 && (
                <S.CartQuantity>
                  <Heading size="14px" color="secondary" weight="700">
                    {rootState.cart.quantity}
                  </Heading>
                </S.CartQuantity>
              )}
            </Button>
          </S.Box>
        </S.Box>
      </S.HeaderContainer>
    );
  }
}

const mapState = (state) => ({
  store: state.store,
});

const mapDispatch = (dispatch) => ({
  setCartOverlay: dispatch.store.setCartOverlay,
});

export default connect(mapState, mapDispatch)(Header);
