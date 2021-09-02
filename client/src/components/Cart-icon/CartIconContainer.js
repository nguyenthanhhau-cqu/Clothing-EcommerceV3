import React from "react";
import { graphql } from "react-apollo";
import { flowRight } from "lodash";
import { gql } from "apollo-boost";

import CartIcon from "./CarIcon";

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;
const GET_CART_COUNT = gql`
  {
    itemCount @client
  }
`;

const CartIconContainer = ({ toggleCartHidden, data: { itemCount } }) => (
  <CartIcon toggleCartHidden={toggleCartHidden} cartItemCount={itemCount} />
);
export default flowRight(
  graphql(GET_CART_COUNT),
  graphql(TOGGLE_CART_HIDDEN, { name: "toggleCartHidden" })
)(CartIconContainer);
