import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Tab from "../../atoms/Tab/Tab";
import Button from "../../atoms/Button/Button";
import Select from "../../atoms/Select/Select";
import CartIcon from "../../../icons/CartIcon";
import Heading from "../../atoms/Heading/Heading";

import withRouter from "../../../hocs/withRouter";
import { GET_CURRENCIES } from "../../../services/queries/currencies";
import { GET_CATEGORIES } from "../../../services/queries/categories";

import * as S from "./Header.styles";

class Header extends React.Component {
  state = {
    categories: [],
    currencies: [],
  };

  getCategories = async () => {
    try {
      const data = await GET_CATEGORIES();

      this.setState({ categories: data.categories });
    } catch (err) {
      console.log(err.errors[0].message);
    }
  };

  getCurrencies = async () => {
    try {
      const data = await GET_CURRENCIES();

      this.setState({ currencies: data.currencies });
    } catch (err) {
      console.log(err.errors[0].message);
    }
  };

  componentDidMount() {
    this.getCategories();
    this.getCurrencies();
  }

  render() {
    const {
      cart,
      router,
      currency,
      navigate,
      cartOverlay,
      setCategory,
      setCurrency,
      setCartOverlay,
      currentCategory,
    } = this.props;

    console.log(this.state.currencies);

    return (
      <S.HeaderContainer>
        <S.CenterWrapper>
          <S.Box>
            {this.state.categories.map((el, index) => (
              <Tab
                key={index}
                width="100%"
                text={el.name.toUpperCase()}
                isActive={currentCategory === el.name}
                onClick={() => {
                  if (router.pathname !== "/") {
                    setCategory(el.name);
                    navigate("/");
                  }
                  setCategory(el.name);
                }}
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
              defaultValue={this.state.currencies.find(
                (el) => el.label === currency.label
              )}
              onChange={(event) => {
                setCurrency(this.state.currencies[event.target.selectedIndex]);
              }}
            >
              {this.state.currencies.map((option, index) => (
                <option key={index} selected={currency.label === option.label}>
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
                  setCartOverlay(!cartOverlay);
                }}
              >
                <CartIcon width={20} height={20} />
                {cart.quantity > 0 && (
                  <S.CartQuantity>
                    <Heading size="14px" color="secondary" weight="700">
                      {cart.quantity}
                    </Heading>
                  </S.CartQuantity>
                )}
              </Button>
            </S.Box>
          </S.Box>
        </S.CenterWrapper>
      </S.HeaderContainer>
    );
  }
}

const mapState = (state) => ({
  cart: state.store.cart,
  currency: state.store.currency,
  cartOverlay: state.store.cartOverlay,
  currentCategory: state.store.currentCategory,
});

const mapDispatch = (dispatch) => ({
  setCategory: dispatch.store.setCategory,
  setCurrency: dispatch.store.setCurrency,
  setCartOverlay: dispatch.store.setCartOverlay,
});

export default withRouter(connect(mapState, mapDispatch)(Header));
