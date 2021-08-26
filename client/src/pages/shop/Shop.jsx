import React,{useEffect} from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import {collectionActionAsync} from "../../redux/CollectionReducer/collectionAction"
import CollectionContainer from "../../components/container/CollectionContainer";
import ShopPreviewContainer from "../../components/container/ShopPreviewContainer";


const Shop = ({ match,collectionActionAsync }) => {
  
  useEffect(()=> {
    collectionActionAsync()
  },[collectionActionAsync])
  
  return(
  <div>
    <Route exact path={`${match.path}`} component={ShopPreviewContainer} />
    <Route path={`${match.path}/:collectionId`} component={CollectionContainer} />
  </div>
)
};
export default connect(null,{collectionActionAsync} )(Shop);
