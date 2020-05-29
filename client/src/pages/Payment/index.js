import React from "react";
import Layout from "../_layout";
import Input from "../../components/shared/Input";

import * as S from "./styles";

function Payment() {
  return (
    <Layout>
      <S.Wrapper>
        <S.Left>
          <S.Offer>
            <S.Title>Offer bird</S.Title>
            <S.Item>
              Price: <Input type="text" />
              $/sac
            </S.Item>
            <S.Item>
              Yield: <Input type="text" />
              sac
            </S.Item>
            <S.Total>Total: XXXX $</S.Total>
          </S.Offer>

          <S.PayWith>
            <h1>Pay With</h1>
            <button>Paypal</button>
            <button>Credit Card</button>
          </S.PayWith>
        </S.Left>

        <S.Right>
          <S.PayLogin>
            <h1>Login Paypal</h1>
            <Input type="text" />
            <label>user</label>
            <Input type="password" />
            <label>password</label>
          </S.PayLogin>
          <S.CardInfo>
            <label>Card Number</label>
            <Input type="text" />
            <label>Name</label>
            <Input type="text" />
          </S.CardInfo>
        </S.Right>
      </S.Wrapper>
      <S.PayButton>Pay</S.PayButton>
    </Layout>
  );
}

export default Payment;
