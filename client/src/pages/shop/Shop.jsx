import React from "react";
import { Route } from "react-router-dom";
import {default as CollectionPage} from "../../components/container/collection/CollectionPageContainer";
import {default as ShopPreview} from "../../components/container/collection/CollectionContainer";




const Shop = ({ match }) => {
  
  
  return(
  <div>
    <Route exact path={`${match.path}`} component={ShopPreview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
)
};
export default Shop;
