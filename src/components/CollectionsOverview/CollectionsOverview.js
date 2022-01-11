import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { CollectionPreview } from "../CollectionPreview/CollectionPreview";
import { selectCollectionsForPreview } from "../../redux/Shop/shop.selectors";
import { CollectionsOverviewContainer } from "./CollectionsOverview.styled";

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
