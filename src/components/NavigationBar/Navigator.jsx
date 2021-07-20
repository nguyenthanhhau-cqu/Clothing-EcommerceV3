import React, { useState } from "react";
import { ReactComponent as Logo } from "../Assets/crown.svg";
import { Link } from "react-router-dom";
import "./NavigatorStyles.scss";
import { auth } from "../../firebase/firebaseUtils";
import { connect } from "react-redux";
import CartIcon from "../Cart-icon/CarIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";

const Navigator = ({ isAuthenticated }) => {
  const [carDropdown, setCartDropdown] = useState(false);

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
        <div onClick={() => setCartDropdown(!carDropdown)}>
          <CartIcon />
        </div>
        {carDropdown && <CartDropdown />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.user.currentUser,
});

export default connect(mapStateToProps)(Navigator);
