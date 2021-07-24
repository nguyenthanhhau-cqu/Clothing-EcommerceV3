import React from "react";
import { Route } from "react-router-dom";
import ShopPreview from "./shopPreview";
import CollectionPage from "../CollectionPage/CollectionPage";

const Shop = ({ match }) => (
  <div>
    <Route exact path={`${match.path}`} component={ShopPreview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default Shop;
