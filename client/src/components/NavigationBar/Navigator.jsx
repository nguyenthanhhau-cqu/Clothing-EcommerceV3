import {useContext} from "react";
import { ReactComponent as Logo } from "../Assets/crown.svg";
import { Link } from "react-router-dom";
import "./NavigatorStyles.scss";
import { auth } from "../../firebase/firebaseUtils";
import {default as CartIcon} from "../Cart-icon/CartIconContainer";
import {default as CartDropdown} from "../cart-dropdown/CartDropDownContainer";
import CurrentUserContext from "../../context/current-user/CurrentUserContext";

const Navigator = ({hidden}) => {
  const currentUser = useContext(CurrentUserContext)

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
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/login">
            SIGN IN
          </Link>
        )}
        
          <CartIcon />
        
        {!hidden && <CartDropdown />}
      </div>
    </div>
  );
};


export default Navigator;
