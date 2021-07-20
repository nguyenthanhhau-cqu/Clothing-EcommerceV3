import React, { useEffect } from "react";
import "./App.css";
import Homepage from "./pages/Home-page/Hompage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Navigator from "./components/NavigationBar/Navigator";
import SignInAndSignUp from "./pages/SignIn-SignUp-page/SignInAndSignUp";
import { auth, createUserProfile } from "./firebase/firebaseUtils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user-reducer/userAction";

function App({ setCurrentUser, currentUser }) {
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (!user) {
        return setCurrentUser(null);
      }
      const userRef = await createUserProfile(user);
      userRef.onSnapshot((snapShot) => {
        // to get the obj of user
        setCurrentUser({
          id: snapShot.id,
          ...snapShot.data(),
        });
      });
    });
  }, [setCurrentUser]);

  return (
    <Router>
      <Navigator />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
        <Route
          exact
          path="/login"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
          }
        />
      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
const mapDispatchToProps = () => (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
