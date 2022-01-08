import React from "react";
import { Link } from "react-router-dom";

import Tab from "../../atoms/Tab/Tab";
import Button from "../../atoms/Button/Button";
import Select from "../../atoms/Select/Select";
import CartIcon from "../../../icons/CartIcon";
import Heading from "../../atoms/Heading/Heading";

import * as S from "./Header.styles";

class Header extends React.Component {
  render() {
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
            options={[
              { currency: "$ USD" },
              { currency: "€ EUR" },
              { currency: "¥ JPY" },
            ]}
          />
          <S.Box>
            <Button
              type="button"
              width="20px"
              height="20px"
              btnStyle="none"
              onClick={() => {
                console.log("Hello");
              }}
            >
              <CartIcon width={20} height={20} />
              <S.CartQuantity>
                <Heading size="14px" color="secondary" weight="700">
                  2
                </Heading>
              </S.CartQuantity>
            </Button>
          </S.Box>
        </S.Box>
      </S.HeaderContainer>
    );
  }
}

export default Header;
