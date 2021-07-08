import React from "react";
import "./App.css";

const BarContainer = () => {
    return <div className="barContainer"></div>;
};
const Controlls = () => {
    return (
        <div className="controlls">
            <select className="algorithmSelect">
                <option value="">Select Algoritm</option>
            </select>
            <button className="startstop">Start</button>
            <button className="reset">Reset</button>
            Number of Bars :<input type="range" />
            Speed: <input type="range" />
        </div>
    );
};
const Metrics = () => {
    return (
        <div className="metrics">
            <Time />
            <br />
            <Comparisons />
            <br />
            <Swaps />
        </div>
    );
};
const Time = () => {
    return <span>Time: </span>;
};
const Comparisons = () => {
    return <span>Comparisons: </span>;
};
const Swaps = () => {
    return <span>Swaps: </span>;
};
const Description = () => {
    return <div className="description"></div>;
};
function App() {
    return (
        <div className="App">
            <BarContainer />
            <Controlls />
            <Metrics />
            <Description />
        </div>
    );
}

export default App;
