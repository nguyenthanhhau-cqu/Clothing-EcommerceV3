import React from "react";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";

const ShopPreview = ({collections}) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id}  {...collectionProps} />
      ))}
    </div>
  );
};

export default ShopPreview;
