import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/Cart/cart.actions";
import { selectCartItemsCount } from "../../redux/Cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer,
} from "./CartIcon.styled";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <CartContainer onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
