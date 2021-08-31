import React from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

import CartDropdown from "./CartDropdown";

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const CartDropdownContainer = () => (
  <Mutation mutation={TOGGLE_CART_HIDDEN}>
    {(toggleCartHidden) => <CartDropdown toggleCartHidden={toggleCartHidden} />}
  </Mutation>
);
export default CartDropdownContainer;
