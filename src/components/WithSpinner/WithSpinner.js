import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./WithSpinner.styled";

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent />
    );
  };
  return Spinner;
};

export default WithSpinner;
