import React from "react";
import { ReactComponent as Logo } from "../LogoSVG/crown.svg";
import { Link } from "react-router-dom";
import "./NavigatorStyles.scss";
import { auth } from "../../firebase/firebaseUtils";

const Navigator = ({ isAuthenticated }) => (
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
    </div>
  </div>
);
export default Navigator;
