import React from "react";
import { connect } from "react-redux";
import { CartItem } from "../CartItem/CartItem";
import { selectCartItems } from "../../redux/Cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router-dom";
import { toggleCartHidden } from "../../redux/Cart/cart.actions";
import { CartDropdownContainer, CartDropdownButton, EmptyMessageContainer, CartItemsContainer } from "./CartDropdown.styled";

const CartDropdown = ({ cartItems, dispatch }) => {
  let navigate = useNavigate();
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton
        onClick={() => {
          navigate("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
