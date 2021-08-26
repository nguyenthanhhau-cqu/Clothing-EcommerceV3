import CollectionPage from "../../pages/CollectionPage/CollectionPage";
import { connect } from "react-redux";
import WithSpinner from "../../components/Spinner/SpinnerButton";
import { compose } from "redux";

const mapStateToProps = (state) => ({
  isLoading: state.collection.isFetching,
});

const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionContainer;
