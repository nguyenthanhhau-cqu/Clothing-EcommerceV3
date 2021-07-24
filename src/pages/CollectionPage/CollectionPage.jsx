import React, { useEffect } from "react";
import { connect } from "react-redux";
import { displayCollection } from "../../redux/CollectionReducer/collectionAction.js";
import "./CollectionStyle.scss";
import CollectionItems from "../../components/collection-item/CollectionItems";

const CollectionPage = ({
  match,
  collection: { title, items },
  displayCollection,
  collection,
}) => {
  useEffect(
    () => displayCollection(match.params.collectionId),
    [displayCollection, match]
  );

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
const mapStateToProps = (state) => ({
  collection: state.collection.displayCollection,
});

export default connect(mapStateToProps, { displayCollection })(CollectionPage);
