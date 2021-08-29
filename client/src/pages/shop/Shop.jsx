import React from "react";
import { Route } from "react-router-dom";
import CollectionPage from "../../pages/CollectionPage/CollectionPage";
import ShopPreview from "../../pages/shop/shopPreview";




const Shop = ({ match }) => {
  
  
  return(
  <div>
    <Route exact path={`${match.path}`} component={ShopPreview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
)
};
export default Shop;
