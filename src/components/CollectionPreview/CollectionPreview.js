import React from "react";
import CollectionItem from "../CollectionItem/CollectionItem";
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from "./CollectionPreview.styled";
import { useNavigate } from "react-router-dom";

export const CollectionPreview = ({ title, items }) => {
  let navigate = useNavigate();
  return (
    <CollectionPreviewContainer>
      <TitleContainer onClick={() => navigate(`/shop/${title.toLowerCase()}`)}>
        {title.toUpperCase()}
      </TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};
