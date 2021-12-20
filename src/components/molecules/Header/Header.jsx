import React from "react";

import * as S from "./Header.styles";

class Header extends React.PureComponent {
  render() {
    return (
      <S.HeaderContainer>
        <h1>Header Component</h1>
      </S.HeaderContainer>
    );
  }
}

export default Header;
