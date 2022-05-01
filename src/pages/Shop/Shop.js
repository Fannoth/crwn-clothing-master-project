import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/Shop/shop.actions";
import CollectionsOverviewContainer from "../../components/CollectionsOverview/CollectionOverviewContainer";
import CollectionPageContainer from "../Collection/CollectionContainer";

const ShopPage = ({ fetchCollectionsStartAsync }) => {
  useEffect(() => {
    fetchCollectionsStartAsync();
  }, [fetchCollectionsStartAsync]);

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<CollectionsOverviewContainer />} />
        <Route path=":categoryId" element={<CollectionPageContainer />} />
      </Routes>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
