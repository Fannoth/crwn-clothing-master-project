import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";
import Collection from "../Collection/Collection";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/Shop/shop.actions";
import WithSpinner from "../../components/WithSpinner/WithSpinner";

const CollectoinsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(Collection);

const ShopPage = ({ updateCollections }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const collecitonRef = firestore.collection("collections");

    collecitonRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      setIsLoading(false);
    });
  }, [updateCollections]);
  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={<CollectoinsOverviewWithSpinner isLoading={isLoading} />}
        />
        <Route
          path=":categoryId"
          element={<CollectionPageWithSpinner isLoading={isLoading} />}
        />
      </Routes>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
