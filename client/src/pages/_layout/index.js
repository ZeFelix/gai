import React from "react";
import { PropTypes } from "prop-types";
import Header from "../../components/Header";

import * as S from "./styles";

function Layout({ children }) {
  return (
    <S.Container>
      <Header></Header>
      <S.Wrapper>{children}</S.Wrapper>
    </S.Container>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
