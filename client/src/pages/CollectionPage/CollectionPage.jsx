import React from "react";
import "./CollectionStyle.scss";
import CollectionItems from "../../components/collection-item/CollectionItems";

const CollectionPage = ({
  collection
}) => {

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
