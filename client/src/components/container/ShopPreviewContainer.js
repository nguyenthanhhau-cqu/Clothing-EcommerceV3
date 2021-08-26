import ShopPreview from "../../pages/shop/shopPreview";
import { connect } from "react-redux";
import WithSpinner from "../../components/Spinner/SpinnerButton";
import { compose } from "redux";

const mapStateToProps = (state) => ({
  isLoading: state.collection.isFetching,
});

const ShopPreviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(ShopPreview);

export default ShopPreviewContainer;
