import React from "react";
import { graphql } from "react-apollo";
import { flowRight } from "lodash";
import { gql } from "apollo-boost";

import CheckOut from "./CheckOut";

const GET_CART_ITEMS_AND_TOTAL = gql`
  {
    cartItems @client
    totalPrice @client
  }
`;

const CartIconContainer = ({ data: { cartItems, totalPrice } }) => (
  <CheckOut cartItems={cartItems} totalPrice={totalPrice} />
);

export default flowRight(graphql(GET_CART_ITEMS_AND_TOTAL))(CartIconContainer);
