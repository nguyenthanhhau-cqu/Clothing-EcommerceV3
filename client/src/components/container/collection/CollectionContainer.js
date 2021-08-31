import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import ShopPreview from "../../../pages/shop/shopPreview";

import Spinner from "../../Spinner/Spinner";

const GET_COLLECTIONS = gql`
  {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;
// return a function that contain an object
const CollectionContainer = () => (
  <Query query={GET_COLLECTIONS}>
    {({ loading, error, data }) => {
      console.log(loading);
      console.log(error);
      console.log(data);
      if (loading) return <Spinner />;
      return <ShopPreview collections={data.collections} />;
    }}
  </Query>
);

export default CollectionContainer;
