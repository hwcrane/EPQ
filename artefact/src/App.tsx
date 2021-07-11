import React from "react";
import { CSSProperties } from "react";
import "./App.css";

// Interface for the props passed into the bar
interface barInfo {
    size: number;
    position: number;
    numOBars: number;
    maxSize: number;
}

// React element for the bar
const Bar = (props: barInfo) => {
    // CSS styles for bar
    var style: CSSProperties = {
        height: props.size.toString() + "%",
    };
    return <div className="bar" style={style}></div>;
};

// React element for the bar container
const BarContainer = () => {
    return (
        <div className="barContainer">
            <Bar numOBars={2} maxSize={5} size={20} position={0} />
        </div>
    );
};

// React element for the Controlls
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

// React element for the Metrics
const Metrics = () => {
    return (
        <div className="metrics">
            <span>Time: </span>
            <br />
            <span>Comparisons: </span>
            <br />
            <span>Swaps: </span>
        </div>
    );
};

// react element for the Description
const Description = () => {
    return <div className="description"></div>;
};

// Base app
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
