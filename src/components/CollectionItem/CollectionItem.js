import React from "react";
import { connect } from "react-redux";
import { CustomButton } from "../CustomButton/CustomButton";
import { addItem } from "../../redux/Cart/cart.actions";
import "./CollectionItem.scss";

const CollectionItem = ({ item, addItem }) => {


  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${item.imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{item.name}</span>
        <span className='price'>{item.price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);