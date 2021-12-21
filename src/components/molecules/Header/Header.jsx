import React from "react";

import Tab from "../../atoms/Tab/Tab";
import CartIcon from "../../../icons/CartIcon";

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
          <CartIcon width={20} height={20} />
        </S.Box>
      </S.HeaderContainer>
    );
  }
}

export default Header;
