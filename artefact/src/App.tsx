import React from "react";
import { CSSProperties } from "react";
import "./App.css";
import Controls from "./Controls";
// Interface for the props passed into the bar
interface barProps {
    size: number;
    maxSize: number;
    key: number;
}

// React element for the bars
const Bar = (props: barProps) => {
    // CSS styles for bar
    var style: CSSProperties = {
        height: ((props.size / props.maxSize) * 100).toString() + "%",
    };
    return <div className="bar" style={style}></div>;
};

//interface for the props passed into the bar container
interface barContainerProps {
    bars: Array<any>;
    maxSize: number;
}

// React element for the bar container
const BarContainer = (props: barContainerProps) => {
    return (
        <div className="barContainer">
            {props.bars.map(
                (
                    bar //loop through all the array, creating a bar for each
                ) => (
                    <Bar size={bar} maxSize={props.maxSize} key={bar} />
                )
            )}
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
class App extends React.Component {
    componentDidMount() {
        // runs once the component has been loaded
        this.makeBars();
    }

    state = {
        numOBars: 50,
        bars: [],
    };

    // method to make the bars
    // if no parameters are entered, n is taken to be the number of bars
    makeBars = (n = this.state.numOBars) => {
        var b = [];
        for (let i = 0; i < n; i++) {
            // create an array b containing 1 -> n
            b.push(i + 1);
        }

        // shuffles array
        for (let i = b.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [b[i], b[j]] = [b[j], b[i]];
        }

        this.setState({ bars: b, numOBars: n }); // sets the state of bars to be b and numOBars to be n
    };

    render() {
        return (
            <div className="App">
                <BarContainer
                    bars={this.state.bars}
                    maxSize={this.state.numOBars}
                />
                <Controls makeBars={this.makeBars} />
                <Metrics />
                <Description />
            </div>
        );
    }
}

export default App;
