import React from "react";

import Tab from "../../atoms/Tab/Tab";
import CartIcon from "../../../icons/CartIcon";
import Select from "../../atoms/Select/Select";

import * as S from "./Header.styles";

class Header extends React.PureComponent {
  render() {
    return (
      <S.HeaderContainer>
        <S.Box>
          <Tab width="100%" isActive={true} text="Women" />
        </S.Box>
        <S.Box>
          <S.Image src={`${process.env.PUBLIC_URL}/assets/logo.png`} />
        </S.Box>
        <S.Box>
          <S.Box margin="0 20px 0 0">
            <Select
              options={[
                { currency: "$ USD" },
                { currency: "€ EUR" },
                { currency: "¥ JPY" },
              ]}
            />
          </S.Box>
          <CartIcon width={20} height={20} />
        </S.Box>
      </S.HeaderContainer>
    );
  }
}

export default Header;
