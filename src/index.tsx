import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./components/controlls/controls.css"
import "./components/info/info.css"
import Sorting from "./components/sorting/Sorting";
import NavBar from "./components/navigation/navBar";

ReactDOM.render(
    <React.StrictMode>
        <NavBar />
        <Sorting />
    </React.StrictMode>,
    document.getElementById("root")
);
