import React from "react";
import logo from "../../assests/img/logo192.png";

import * as S from "./styles";

function Header() {
  return (
    <S.Wrapper>
      <S.Image src={logo} alt="" />
      <S.Login>Login</S.Login>
    </S.Wrapper>
  );
}

export default Header;
