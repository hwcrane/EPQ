import React from "react";
import { CSSProperties } from "react";
import "./App.css";
import Controls from "./Controls";
import { bubble } from "./algorithms";

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
                    <Bar
                        size={bar.size}
                        maxSize={props.maxSize}
                        key={props.bars.indexOf(bar)}
                    />
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
        algorithms: [
            "Bubble Sort",
            "Quick Sort",
            "Insertion Sort",
            "Merge Sort",
            "Selection Sort",
            "Heap Sort",
            "Radix Sort",
            "Bucket Sort",
        ],
        sortingStages: [],
        sortingStage: 0,
        selectedAlgorithm: "",
        stagesGenerated: false,
    };

    // method to make the bars
    // if no parameters are entered, n is taken to be the number of bars
    makeBars = (n = this.state.numOBars) => {
        var b = [];
        for (let i = 0; i < n; i++) {
            // create an array b containing 1 -> n
            b.push({ size: i + 1 });
        }

        // shuffles array
        for (let i = b.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [b[i], b[j]] = [b[j], b[i]];
        }

        this.setState({ bars: b, numOBars: n }); // sets the state of bars to be b and numOBars to be n
    };

    // method to set the selected algorithm
    setAlgorithm = (algorithm: string) => {
        this.setState({ selectedAlgorithm: algorithm });
    };

    // method to run whichever sorting algorithm is selected
    runAlgorithm = (selected: string) => {
        var sortingStages;
        switch (
            selected // Switch statement to select the algorithm to use
        ) {
            case "Bubble Sort":
                sortingStages = bubble(
                    JSON.parse(JSON.stringify(this.state.bars)) // remove object refrences
                );
        }
        console.log(sortingStages);
        this.setState({ sortingStages: sortingStages, sortingStage: 0 }); // sets the sortingStages array inside the state to be the stages genetrated by the algorithm, also sets the sorting stage to 0
    };

    render() {
        return (
            <div className="App">
                <BarContainer
                    bars={this.state.bars}
                    maxSize={this.state.numOBars}
                />
                <Controls
                    makeBars={this.makeBars}
                    algorithms={this.state.algorithms}
                    setAlgorithm={this.setAlgorithm}
                />
                <Metrics />
                <Description />
            </div>
        );
    }
}

export default App;
