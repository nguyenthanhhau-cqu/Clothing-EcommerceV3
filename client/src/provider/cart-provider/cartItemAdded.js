export const cartIteAdded = (items, itemAdded) => {
  const existing = items.find((item) => item.id === itemAdded.id);

  if (existing) {
    return items.map((item) =>
      item.id === itemAdded.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...items, { ...itemAdded, quantity: 1 }];
};

export const decreaseItem = (items, itemRemoved) => {
  if (itemRemoved.quantity === 1) {
    return items.filter((item) => item.id !== itemRemoved.id);
  }
  return items.map((item) =>
    item.id === itemRemoved.id ? { ...item, quantity: item.quantity - 1 } : item
  );
};
export const getCartPrice = (cartItems) =>
  cartItems &&
  cartItems.reduce(
    (accumulateValue, currentItem) =>
      accumulateValue + currentItem.quantity * currentItem.price,
    0
  );
export const getCartItem = (cartItems) =>
  cartItems &&
  cartItems.reduce(
    (accumulateValue, currentItem) => accumulateValue + currentItem.quantity,
    0
  );
export const filterItemFromCart = (cartItems, item) =>
  cartItems.filter((cartItem) => cartItem.id !== item.id);
