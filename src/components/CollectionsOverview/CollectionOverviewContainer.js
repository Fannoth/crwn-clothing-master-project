import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollctionFetching } from "../../redux/Shop/shop.selectors";
import WithSpinner from "../WithSpinner/WithSpinner";
import CollectionsOverview from "./CollectionsOverview";
import { compose } from "redux";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollctionFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer