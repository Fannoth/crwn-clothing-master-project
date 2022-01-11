import React, { useEffect } from "react";
import { useParams } from "react-router-dom"
import { connect } from "react-redux";
import CollectionItem from "../../components/CollectionItem/CollectionItem";
import { selectCollection } from "../../redux/Shop/shop.selectors";
import { changeShopParams } from "../../redux/Shop/shop.actions";
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './Collection.styled';

const CollectionPage = ({ collection, changeParams }) => {
  let params = useParams();
 const {title, items} = collection
  useEffect(() => {
    changeParams(params.categoryId);
  }, [changeParams, params.categoryId]);

  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state) => ({
  collection: selectCollection(state.shop.params)(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeParams: (item) => dispatch(changeShopParams(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPage);
