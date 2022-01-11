import React from "react";

import { CustomButtonContainer } from "./CustomButton.styled";

export const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);
