import React, { useEffect, useState } from "react";
import "./App.css";
import Homepage from "./pages/Home-page/Hompage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Navigator from "./components/NavigationBar/Navigator";
import SignInAndSignUp from "./pages/SignIn-SignUp-page/SignInAndSignUp";
import { auth, createUserProfile } from "./firebase/firebaseUtils";

function App() {
  const [currentUser, setCurrentUser] = useState({
    currentUser: {},
  });

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (!user) {
        setCurrentUser({ currentUser: user });
      } else {
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
      }
    });
  }, []);
  console.log(currentUser);

  return (
    <Router>
      <Navigator isAuthenticated={currentUser.currentUser} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/login" component={SignInAndSignUp} />
      </Switch>
    </Router>
  );
}

export default App;
