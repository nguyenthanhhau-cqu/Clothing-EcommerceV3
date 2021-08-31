import React from "react"
import { Query } from "react-apollo";
import { gql } from "apollo-boost";  

import Navigator from "./Navigator"


const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;

const NavigatorContainer = () => (
    <Query query={GET_CART_HIDDEN}>
        {
          ({data: {cartHidden}}) => <Navigator hidden= {cartHidden}/>
        }
    </Query>
)

export default NavigatorContainer;