import React from "react";
import { Route, Routes } from "react-router-dom";
import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";
import Collection from "../Collection/Collection";

const ShopPage = () => {
  return (
    <div className="shop-page">
      <Routes>
        <Route path="/" element={<CollectionsOverview />} />
        <Route path=":categoryId" element={<Collection />} />
      </Routes>
    </div>
  );
};

export default ShopPage;
