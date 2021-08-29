import React,{useContext} from "react";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";
import CollectionsContext from "../../context/collections/CollectionContext"

const ShopPreview = () => {
  const collectionsMap = useContext(CollectionsContext);
  const collections = Object.keys(collectionsMap).map(
    key => collectionsMap[key]
  );

  return (
    <div className="shop-page">
      {collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </div>
  );
};

export default ShopPreview;
