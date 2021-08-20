import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Sorting from "./components/sorting/Sorting";
import { Route, Link, HashRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import Searching from "./components/searching/Searching";
import Pathfinding from "./components/pathfinding/Pathfinding";
import NavBar from "./components/navigation/navBar";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Route exact path="/">
                <NavBar page="home" />
                <Home />
            </Route>
            <Route path="/sorting">
                <NavBar page="sorting" />
                <Sorting />
            </Route>
            <Route path="/searching">
                <NavBar page="searching" />
                <Searching />
            </Route>
            <Route path="/pathfinding">
                <NavBar page="pathfinding" />
                <Pathfinding />
            </Route>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
