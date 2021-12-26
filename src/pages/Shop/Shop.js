import React from "react";
import { SHOP_DATA } from "./shop.data";
import { CollectionPreview } from "../../components/CollectionPreview/CollectionPreview";
const data = SHOP_DATA;

export const ShopPage = () => {
  return (
    <div className="shop-page">
        {
            data.map(({id, ...otherCollection}) => {
               return <CollectionPreview key={id} {...otherCollection} />
            })
        }
    </div>
  );
};
