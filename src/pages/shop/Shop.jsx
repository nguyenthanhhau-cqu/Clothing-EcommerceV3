import React,{useEffect,useState} from "react";
import { Route } from "react-router-dom";
import ShopPreview from "./shopPreview";
import CollectionPage from "../CollectionPage/CollectionPage";
import {fireStore,convertCollectionsSnapshotToMap} from "../../firebase/firebaseUtils"
import {collectionAction} from "../../redux/CollectionReducer/collectionAction"
import { connect } from "react-redux";
import WithSpinner from "../../components/Spinner/SpinnerButton"

const WithSpinnerShopPreview = WithSpinner(ShopPreview)

const Shop = ({ match,collectionAction }) => {
  
  const [loading,setLoading] = useState(true)

  useEffect(()=> {
    const collectionRef = fireStore.collection('collections')
    collectionRef.onSnapshot(async snapshot=> {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot)
      collectionAction(collectionMap)
      setLoading(false);
    })
  },[collectionAction])
  
  
  return(
  <div>
    <Route exact path={`${match.path}`} render={(props) => <WithSpinnerShopPreview isLoading={loading} {...props} />} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
)
};

export default connect(null,{collectionAction} )(Shop);
