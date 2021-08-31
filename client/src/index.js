import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CartProvider from "./provider/cart-provider/CartProvider";
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-boost";
import { resolvers, typeDefs } from "./graphql/resolver";
const httpLink = createHttpLink({
  uri: "https://crwn-clothing.com",
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache,
  typeDefs,
  resolvers,
});

client.writeData({
  data: {
    cartHidden: true,
  },
});

// client
//   .query({
//     query: gql`
//       {
//         getCollectionsByTitle(title: "Hats") {
//           title
//           id
//           items {
//             name
//             price
//             imageUrl
//           }
//         }
//       }
//     `,
//   })
//   .then((res) => console.log(res));

ReactDOM.render(
  <ApolloProvider client={client}>
    <CartProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CartProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
