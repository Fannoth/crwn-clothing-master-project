import React, { useEffect } from "react";
import { useParams } from "react-router-dom"
import { connect } from "react-redux";
import CollectionItem from "../../components/CollectionItem/CollectionItem";
import { selectCollection } from "../../redux/shop/shop.selectors";
import { changeShopParams } from "../../redux/shop/shop.actions";
import "./Collection.scss";

const CollectionPage = ({ collection, changeParams }) => {
  let params = useParams();

  useEffect(() => {
    changeParams(params.categoryId);
  }, []);

  return (
    <div className='collection-page'>
      <h2 className='title'>{collection.title}</h2>
      <div className='items'>
        {collection.items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  collection: selectCollection(state.shop.params)(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeParams: (item) => dispatch(changeShopParams(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPage);
