// Resolver is an obj that can pass to our client lets us know what we want to resolve depend on queries or mutation get called from local client side.
import { gql } from "apollo-boost";
import {
  cartIteAdded,
  getCartItemQuantity,
  decreaseItem,
  filterItemFromCart,
  getCartPrice,
} from "./cartUtils";

export const typeDefs = gql`
  extend type Item {
    quantity: Int
  }
  extend type DateTime {
    nanoseconds: Int!
    seconds: Int!
  }
  extend type User {
    id: ID!
    displayName: String!
    email: String!
    createdAt: DateTime!
  }
  extend type Mutation {
    ToggleCartHidden: Boolean!
    AddItemToCart(item: Item!): [Item]!
    DecreaseItemFromCart(item: Item!): [Item]!
    RemoveItemFromCart(item: Item!): [Item]!
    SetCurrentUser(user: User!): User!
  }
`;

const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;
const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;
const GET_CART_COUNT = gql`
  {
    itemCount @client
  }
`;
const GET_TOTAL_PRICE = gql`
  {
    totalPrice @client
  }
`;
const GET_CURRENT_USER = gql`
  {
    currentUser @client
  }
`;
export const resolvers = {
  Mutation: {
    toggleCartHidden: (_root, _args, { cache }) => {
      const { cartHidden } = cache.readQuery({
        query: GET_CART_HIDDEN,
      });
      cache.writeQuery({
        query: GET_CART_HIDDEN,
        data: { cartHidden: !cartHidden },
      });
      return !cartHidden;
    },
    addItemToCart: (_root, { item }, { cache }) => {
      const { cartItems } = cache.readQuery({
        query: GET_CART_ITEMS,
      });
      const newCartItem = cartIteAdded(cartItems, item);

      cache.writeQuery({
        query: GET_CART_COUNT,
        data: {
          itemCount: getCartItemQuantity(newCartItem),
        },
      });
      cache.writeQuery({
        query: GET_TOTAL_PRICE,
        data: {
          totalPrice: getCartPrice(newCartItem),
        },
      });

      cache.writeQuery({
        query: GET_CART_ITEMS,
        data: {
          cartItems: newCartItem,
        },
      });
      return newCartItem;
    },
    decreaseItemFromCart: (_root, { item }, { cache }) => {
      const { cartItems } = cache.readQuery({
        query: GET_CART_ITEMS,
      });
      const newCartItem = decreaseItem(cartItems, item);
      cache.writeQuery({
        query: GET_CART_COUNT,
        data: {
          itemCount: getCartItemQuantity(newCartItem),
        },
      });
      cache.writeQuery({
        query: GET_TOTAL_PRICE,
        data: {
          totalPrice: getCartPrice(newCartItem),
        },
      });
      cache.writeQuery({
        query: GET_CART_ITEMS,
        data: {
          cartItems: newCartItem,
        },
      });
      return newCartItem;
    },
    removeItemFromCart: (_root, { item }, { cache }) => {
      const { cartItems } = cache.readQuery({
        query: GET_CART_ITEMS,
      });
      const newCartItem = filterItemFromCart(cartItems, item);
      cache.writeQuery({
        query: GET_CART_COUNT,
        data: {
          itemCount: getCartItemQuantity(newCartItem),
        },
      });
      cache.writeQuery({
        query: GET_TOTAL_PRICE,
        data: {
          totalPrice: getCartPrice(newCartItem),
        },
      });
      cache.writeQuery({
        query: GET_CART_ITEMS,
        data: {
          cartItems: newCartItem,
        },
      });
      return newCartItem;
    },
    setCurrentUser: (_root, { user }, { cache }) => {
      cache.writeQuery({
        query: GET_CURRENT_USER,
        data: { currentUser: user },
      });

      return user;
    },
  },
};
