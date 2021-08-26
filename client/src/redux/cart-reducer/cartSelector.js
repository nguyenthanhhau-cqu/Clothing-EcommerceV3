import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItem = createSelector(
  [selectCart], // input selector
  (cart) => cart.item
);
export const selectCartItemCount = createSelector(
  [selectCartItem], // input selector
  (cartItems) =>
    cartItems.reduce(
      (accumulateValue, currentItem) => accumulateValue + currentItem.quantity,
      0
    )
);
