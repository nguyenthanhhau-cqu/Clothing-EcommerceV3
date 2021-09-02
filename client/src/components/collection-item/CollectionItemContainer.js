import React from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

import CollectionItems from "./CollectionItems";

const ADD_ITEM_TO_CART = gql`
  mutation AddItemToCart($item: Item!) {
    addItemToCart(item: $item) @client
  }
`;

const CollectionItemContainer = (props) => (
  <Mutation mutation={ADD_ITEM_TO_CART}>
    {(addItemToCart) => (
      <CollectionItems
        {...props}
        addItem={(item) => addItemToCart({ variables: { item } })}
      />
    )}
  </Mutation>
);
export default CollectionItemContainer;
