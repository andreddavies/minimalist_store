import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Tab from "../../atoms/Tab/Tab";
import Button from "../../atoms/Button/Button";
import Select from "../../atoms/Select/Select";
import CartIcon from "../../../icons/CartIcon";
import Heading from "../../atoms/Heading/Heading";

import { store } from "../../../store";
import { GET_CURRENCIES } from "../../../services/queries/currencies";
import { GET_CATEGORIES } from "../../../services/queries/categories";

import * as S from "./Header.styles";

class Header extends React.Component {
  state = {
    categories: [],
    currencies: [],
  };

  componentDidMount() {
    GET_CATEGORIES().then((categoriesResult) => {
      GET_CURRENCIES().then((currenciesResult) => {
        this.setState({
          categories: categoriesResult.data.categories,
          currencies: currenciesResult.data.currencies,
        });
      });
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.state !== nextState ||
      store.getState().store.currentCategory ||
      store.getState().store.currency
    );
  }

  render() {
    const { dispatch } = store;
    const rootState = store.getState().store;

    return (
      <S.HeaderContainer>
        <S.Box>
          {this.state.categories.map((el, index) => (
            <Tab
              key={index}
              width="100%"
              text={el.name.toUpperCase()}
              isActive={rootState.currentCategory === el.name}
              onClick={() => dispatch.store.setCategory(el.name)}
            />
          ))}
        </S.Box>
        <S.Box>
          <Link to="/">
            <S.Image src={`${process.env.PUBLIC_URL}/assets/logo.png`} />
          </Link>
        </S.Box>
        <S.Box justify="flex-start">
          <Select
            onChange={(event) => {
              dispatch.store.setCurrency(
                this.state.currencies[event.target.selectedIndex]
              );
            }}
          >
            {this.state.currencies.map((option, index) => (
              <option
                key={index}
                selected={option.label === rootState.currency.label}
              >
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
  setCategory: dispatch.store.setCategory,
  setCurrency: dispatch.store.setCurrency,
  setCartOverlay: dispatch.store.setCartOverlay,
});

export default connect(mapState, mapDispatch)(Header);
