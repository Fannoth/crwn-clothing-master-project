import React from "react";
import StripeCheckout from "react-stripe-checkout";

export const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KF2PMCtILNpRI8Ef5ZSYx902xGcmWQSnGlqam0XqssKhdz4Hfoy0wXrwAaCQgH3h5fBIWHD9fjx5JV8blFeZzkp00ol1lnBwx";

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }
  return (
    <StripeCheckout
    label="Pay now"
    name="CRWN Clothing Ltd."
    billingAddress
    shippingAddress
    image="https://svgshare.com/i/CUz.svg"
    description={`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel="Pay now"
    token={onToken}
    stripeKey={publishableKey}
    />

  );
};

export default StripeButton;
