import React, { useContext } from "react";
import "./CollectionStyle.scss";
import CollectionItems from "../../components/collection-item/CollectionItems";
import CollectionsContext from "../../context/collections/CollectionContext"

const CollectionPage = ({
  match
}) => {
  const collections = useContext(CollectionsContext)
  const collection = collections[match.params.collectionId]
  const { title, items} = collection

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items &&
          items.map((item) => <CollectionItems key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default CollectionPage;
