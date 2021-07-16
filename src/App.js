import React from "react";
import "./App.css";
import Homepage from "./pages/Hompage";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Shop from "./components/shop/Shop";


function App() {
    return <Router>
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/shop' component={Shop} />
        </Switch>
    </Router>
}

export default App;
