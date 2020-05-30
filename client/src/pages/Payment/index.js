import React, { useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../_layout";
import Input from "../../components/shared/Input";

import * as S from "./styles";

function Payment() {
  const [total, setTotal] = useState(0);
  const { farmSelected } = useSelector(state => state.farm);

  function handleInputChange(event) {
    const value = parseFloat(event.currentTarget.value);
    const { price } = farmSelected;
    value ? setTotal(value * price) : setTotal(0);
  }

  return (
    <Layout>
      <S.Wrapper>
        <S.Left>
          <S.Offer>
            <S.Title>Offer bird</S.Title>
            <S.Item>
              Price: {farmSelected.price}
              $/sac
            </S.Item>
            <S.Item>
              Yield:{" "}
              <Input type="number" max={10} onChange={handleInputChange} />
              sac
            </S.Item>
            <S.Total>Total: {total} $</S.Total>
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
