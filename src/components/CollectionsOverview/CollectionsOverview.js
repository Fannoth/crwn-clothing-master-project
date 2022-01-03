import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./CollectionsOverview.scss";
import { CollectionPreview } from "../CollectionPreview/CollectionPreview";
import { selectCollections } from "../../redux/Shop/shop.selectors";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollection }) => {
      return <CollectionPreview key={id} {...otherCollection} />;
    })}
  </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections,
  });

export default connect(mapStateToProps)(CollectionsOverview);
