export const cartIteAdded = (items, itemAdded) => {
  const existing = items.find((item) => item.id === itemAdded.id);

  if (existing) {
    return items.map((item) =>
      item.id === itemAdded.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...items, { ...itemAdded, quantity: 1 }];
};
