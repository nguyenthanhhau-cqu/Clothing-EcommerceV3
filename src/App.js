import React from "react";
import "./App.css";
import Homepage from "./pages/Home-page/Hompage";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Navigator from "./components/NavigationBar/Navigator";
import SignInAndSignUp from "./pages/SignIn-SignUp-page/SignInAndSignUp";


function App() {
    return <Router>
        <Navigator />
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/shop' component={Shop} />
            <Route exact path='/login' component={SignInAndSignUp} />
        </Switch>
    </Router>
}

export default App;
