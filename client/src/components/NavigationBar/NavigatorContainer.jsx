import React from "react"
import { Query } from "react-apollo";
import { gql } from "apollo-boost";  

import Navigator from "./Navigator"


const GET_CLIENT_PROPERTIES = gql`
  {
    cartHidden @client
    currentUser @client
  }
`;

const NavigatorContainer = () => (
    <Query query={GET_CLIENT_PROPERTIES}>
        {
          ({data: {cartHidden}}) => <Navigator  hidden= {cartHidden}/>
        }
    </Query>
)

export default NavigatorContainer;