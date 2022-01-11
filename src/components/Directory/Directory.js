import React from "react";
import MenuItem from "../Menu-Item/MenuItem";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/Directory/directory.selector";
import { createStructuredSelector } from "reselect";
import { DirectoryMenuContainer } from "./Directory.styled";


const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
