import React from "react";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";
import { connect } from "react-redux";

const ShopPreview = ({  collection }) => {
  console.log(collection)

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
export default connect(mapStateToProps, null)(ShopPreview);
