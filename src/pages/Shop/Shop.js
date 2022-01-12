import React, { useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";
import Collection from "../Collection/Collection";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/Shop/shop.actions";

const ShopPage = ({ updateCollections }) => {
  var unsubscribeFromSnapshot = useRef(null);
  useEffect(() => {
    const collecitonRef = firestore.collection("collections");

    unsubscribeFromSnapshot.current = collecitonRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }, [updateCollections, unsubscribeFromSnapshot]);
  return (
    <div className="shop-page">
      <Routes>
        <Route path="/" element={<CollectionsOverview />} />
        <Route path=":categoryId" element={<Collection />} />
      </Routes>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
