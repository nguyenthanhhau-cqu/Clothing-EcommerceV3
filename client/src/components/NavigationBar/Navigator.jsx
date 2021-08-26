import React from "react";
import { ReactComponent as Logo } from "../Assets/crown.svg";
import { Link } from "react-router-dom";
import "./NavigatorStyles.scss";
import { auth } from "../../firebase/firebaseUtils";
import { connect } from "react-redux";
import CartIcon from "../Cart-icon/CarIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { cartHidden } from "../../redux/cart-reducer/cartAction";

const Navigator = ({ isAuthenticated, cartDropDown, cartHidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {isAuthenticated ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/login">
            SIGN IN
          </Link>
        )}
        <div onClick={() => cartHidden()}>
          <CartIcon />
        </div>
        {cartDropDown && <CartDropdown />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.user.currentUser,
  cartDropDown: state.cart.hidden,
});

export default connect(mapStateToProps, { cartHidden })(Navigator);
