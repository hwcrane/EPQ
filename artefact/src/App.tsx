import React from "react";
import { CSSProperties } from "react";
import "./App.css";

interface barInfo {
    size: number;
    position: number;
    numOBars: number;
    maxSize: number;
}

const Bar = (props: barInfo) => {
    var style: CSSProperties = {
        width: ((1 / props.numOBars) * 75).toString() + "vw",
        height: props.size.toString() + "%",
        transform:
            "translateX(" +
            ((props.position / props.size) * 80).toString() +
            "vw)",
    };
    return <div className="bar" style={style}></div>;
};

const BarContainer = () => {
    return (
        <div className="barContainer">
            <Bar numOBars={2} maxSize={5} size={20} position={0} />
        </div>
    );
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
