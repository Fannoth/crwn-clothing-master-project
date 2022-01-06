import React from "react";
import MenuItem from "../Menu-Item/MenuItem";
import "./Directory.scss";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/Directory/directory.selector";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
