import React from "react";
import "./App.css";
import Homepage from "./pages/Hompage";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const HatPage = () => {
    return <h1>This is a Hat page</h1>
}
function App() {
    return <Router>
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route exat path='/shop/hats' component={HatPage} />
        </Switch>
    </Router>
}

export default App;
