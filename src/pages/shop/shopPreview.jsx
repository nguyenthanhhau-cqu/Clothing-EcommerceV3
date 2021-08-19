import React, { useEffect } from "react";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";
import { connect } from "react-redux";
import { collectionAction } from "../../redux/CollectionReducer/collectionAction";

const ShopPreview = ({ collectionAction, collection }) => {
  useEffect(() => collectionAction(),[collectionAction]);

  return (
    <div className="shop-page">
      {collection.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </div>
  );
};
const mapStateToProps = (state) => ({
  collection: state.collection.collections ? Object.keys(state.collection.collections).map(
    (key) => state.collection.collections[key]
  ) : []
});
export default connect(mapStateToProps, { collectionAction })(ShopPreview);
