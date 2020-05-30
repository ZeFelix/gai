import React from "react";
import { useSelector } from "react-redux";
import logo from "../../assests/img/logo192.png";

import * as S from "./styles";

function Header() {
  const { farmSelected } = useSelector(state => state.farm);

  return (
    <S.Wrapper>
      <S.Image src={logo} alt="" />
      <span>{farmSelected.name}</span>
      <span>farmAddress</span>
      <S.Login>Login</S.Login>
    </S.Wrapper>
  );
}

export default Header;
