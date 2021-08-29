import {useContext} from "react";
import { ReactComponent as Logo } from "../Assets/crown.svg";
import { Link } from "react-router-dom";
import "./NavigatorStyles.scss";
import { auth } from "../../firebase/firebaseUtils";
import CartIcon from "../Cart-icon/CarIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import CurrentUserContext from "../../context/current-user/CurrentUserContext";
import {CartContext} from "../../provider/cart-provider/CartProvider"

const Navigator = () => {
  const currentUser = useContext(CurrentUserContext)
  const {hidden} = useContext(CartContext)

  
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
