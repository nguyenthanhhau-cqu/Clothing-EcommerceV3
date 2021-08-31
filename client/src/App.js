import React, { useEffect, useState } from "react";
import "./App.css";
import Homepage from "./pages/Home-page/Hompage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Shop from "./pages/shop/Shop";
import { default as Navigator } from "./components/NavigationBar/NavigatorContainer";
import SignInAndSignUp from "./pages/SignIn-SignUp-page/SignInAndSignUp";
import { auth, createUserProfile } from "./firebase/firebaseUtils";
import CheckOut from "./components/check-out-page/CheckOut";
import CurrentUserContext from "./context/current-user/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({
    currentUser: null,
  });
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (!user) {
        return setCurrentUser(null);
      }
      const userRef = await createUserProfile(user);
      userRef.onSnapshot((snapShot) => {
        // to get the obj of user
        setCurrentUser({
          currentUser: {
            id: snapShot.id,
            ...snapShot.data(),
          },
        });
      });
    });
  }, [setCurrentUser]);

  return (
    <Router>
      <CurrentUserContext.Provider value={currentUser}>
        <Navigator />
      </CurrentUserContext.Provider>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route exact path="/checkout" component={CheckOut} />
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

export default App;
