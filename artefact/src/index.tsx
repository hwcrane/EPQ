import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Sorting from "./components/sorting/Sorting";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import Searching from "./components/searching/Searching";
import Pathfinding from "./components/pathfinding/Pathfinding";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route path="/sorting">
                <Sorting></Sorting>
            </Route>
            <Route path="/searching">
                <Searching></Searching>
            </Route>
            <Route path="/pathfinding">
                <Pathfinding></Pathfinding>
            </Route>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
