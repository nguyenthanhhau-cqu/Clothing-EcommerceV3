import React from "react";
import { graphql } from "react-apollo";
import { flowRight } from "lodash";
import { gql } from "apollo-boost";

import CheckOutItem from "../check-out-items/CheckOutItem";

const ADD_ITEM_TO_CART = gql`
  mutation AddItemToCart($item: Item!) {
    addItemToCart(item: $item) @client
  }
`;
const DECREASE_ITEM_FROM_CART = gql`
  mutation DecreaseItemFromCart($item: Item!) {
    decreaseItemFromCart(item: $item) @client
  }
`;
const CLEAR_ITEM_FROM_CART = gql`
  mutation RemoveItemFromCart($item: Item!) {
    removeItemFromCart(item: $item) @client
  }
`;

const checkOutItemContainer = ({
  addItemToCart,
  decreaseItemFromCart,
  clearItemFromCart,
  ...otherProps
}) => (
  <CheckOutItem
    {...otherProps}
    addItemToCart={(item) => addItemToCart({ variables: { item } })}
    decreaseItemFromCart={(item) =>
      decreaseItemFromCart({ variables: { item } })
    }
    clearItemFromCart={(item) => clearItemFromCart({ variables: { item } })}
  />
);

export default flowRight(
  graphql(ADD_ITEM_TO_CART, { name: "addItemToCart" }),
  graphql(DECREASE_ITEM_FROM_CART, { name: "decreaseItemFromCart" }),
  graphql(CLEAR_ITEM_FROM_CART, { name: "clearItemFromCart" })
)(checkOutItemContainer);
