import React from "react";
import { connect } from "react-redux";
import { CustomButton } from "../CustomButton/CustomButton";
import { addItem } from "../../redux/Cart/cart.actions";
import "./CollectionItem.scss";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl, id } = item;

  return (
    <div className="collection-item" key={id}>
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
