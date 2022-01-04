import React from "react";
import SpeedSelector from "../controlls/speedSelector";
import { bubble, heap, insertion, merge, quick, selection } from "../../algorithms";
import { appState, bar, stage } from "../../types";
import Description from "../info/description";
import ProgressBar from "./progressBar";
import AlgoritmSelector from "../controlls/algoritmSelector";
import BackButton from "../controlls/backButton";
import StartStopButton from "../controlls/startStopButton";
import ForwardButton from "../controlls/forwardButton";
import ResetButton from "../controlls/resetButton";
import NumOBarsSelector from "../controlls/numOBarsSelector";
import { BarContainer } from "./barContainer";
import { Metrics } from "../info/metrics";
import ColourInfo from "../info/colourInfo";

// function for creating a delay
const pause = (time: number) => {
    return new Promise((resolve) => setTimeout(resolve, time));
};

// Base app
class Sorting extends React.Component<any, appState> {
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
        ],
        isRunning: false,
        sortingStages: [],
        sortingStage: 0,
        selectedAlgorithm: "",
        stagesGenerated: false,
        speed: 750,
        comparisons: 0,
        swaps: 0,
    };

    // method to make the bars
    // if no parameters are entered, n is taken to be the number of bars
    makeBars = (n = this.state.numOBars) => {
        var b = [];
        var newbar: bar;
        for (let i = 0; i < n; i++) {
            // create an array b containing 1 -> n
            newbar = { size: i + 1, state: "unsorted" };
            b.push(newbar);
        }

        // shuffles array
        for (let i = b.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [b[i], b[j]] = [b[j], b[i]];
        }

        this.setState({
            bars: b,
            numOBars: n,
            isRunning: false,
            stagesGenerated: false,
        }); // sets the state of bars to be b and numOBars to be n
    };

    // method to set the selected algorithm
    setAlgorithm = (algorithm: string) => {
        this.setState({
            selectedAlgorithm: algorithm,
            stagesGenerated: false,
            isRunning: false,
        });
    };

    // method to set the speed of the visuliser
    setSpeed = (speed: number) => {
        this.setState({ speed: speed });
    };

    // method to run whichever sorting algorithm is selected
    runAlgorithm = () => {
        var sortingStages: stage[] = [];
        switch (
            this.state.selectedAlgorithm // Switch statement to select the algorithm to use
        ) {
            case "Bubble Sort":
                sortingStages = bubble(
                    JSON.parse(JSON.stringify(this.state.bars)) // remove object refrences
                );
                break;
            case "Quick Sort":
                sortingStages = quick(
                    JSON.parse(JSON.stringify(this.state.bars)) // remove object refrences
                );
                break;
            case "Insertion Sort":
                sortingStages = insertion(
                    JSON.parse(JSON.stringify(this.state.bars)) // remove object refrences
                );
                break;
            case "Merge Sort":
                sortingStages = merge(
                    JSON.parse(JSON.stringify(this.state.bars)) // remove object refrences
                );
                break;
            case "Selection Sort":
                sortingStages = selection(
                    JSON.parse(JSON.stringify(this.state.bars)) // remove object refrences
                );
                break;
            case "Heap Sort":
                sortingStages = heap(
                    JSON.parse(JSON.stringify(this.state.bars)) // remove object refrences
                );
                break;
        }
        this.setState({
            sortingStages: sortingStages,
            sortingStage: 0,
            stagesGenerated: true,
        }); // sets the sortingStages array inside the state to be the stages genetrated by the algorithm, also sets the sorting stage to 0
    };

    // method to toggle the display state of the algorithm
    togglePlayState = async () => {
        if (this.state.selectedAlgorithm == "") {
            alert("No algorithm selected");
        } else {
            if (!this.state.stagesGenerated) {
                // generates the stages if not generated
                await this.runAlgorithm();
            }
            await this.setState((prevState: any) => ({
                //wait for the state to be toggled
                isRunning: !prevState.isRunning,
            }));
            this.visulise();
        }
    };

    // steps forward through the visulisation by one step
    stepForward = async () => {
        if (this.state.selectedAlgorithm == "") {
            // checks if algorithm is selected
            alert("No algorithm selected");
        } else {
            if (!this.state.stagesGenerated) {
                // runs algorithm is no steps are generated
                await this.runAlgorithm();
            }
            this.setState({ isRunning: false }); // sets running to false to stop the visulisation if it is running
            if (
                this.state.stagesGenerated &&
                this.state.sortingStage < this.state.sortingStages.length - 1
            ) {
                // sets the state to be the next stage of the sorting and increments sortingStage
                this.setState((prevState: any) => ({
                    bars: prevState.sortingStages[prevState.sortingStage + 1]
                        .bars,
                    swaps: prevState.sortingStages[prevState.sortingStage + 1]
                        .swaps,
                    comparisons:
                        prevState.sortingStages[prevState.sortingStage + 1]
                            .comparisons,
                    sortingStage: prevState.sortingStage + 1,
                }));
            }
        }
    };

    // steps backwards through the visulisation by one step
    stepBackward = async () => {
        if (this.state.selectedAlgorithm == "") {
            // checks if algorithm is selected
            alert("No algorithm selected");
        } else {
            if (!this.state.stagesGenerated) {
                // runs algorithm is no steps are generated
                await this.runAlgorithm();
            }
            await this.setState({ isRunning: false }); // sets running to false to stop the visulisation if it is running
            if (this.state.stagesGenerated && this.state.sortingStage > 0) {
                // sets the state to be the next stage of the sorting and increments sortingStage
                this.setState((prevState: any) => ({
                    bars: prevState.sortingStages[prevState.sortingStage - 1]
                        .bars,
                    swaps: prevState.sortingStages[prevState.sortingStage - 1]
                        .swaps,
                    comparisons:
                        prevState.sortingStages[prevState.sortingStage - 1]
                            .comparisons,
                    sortingStage: prevState.sortingStage - 1,
                }));
            }
        }
    };

    // method to visulise the selected algorithm
    visulise = async () => {
        // checks if the visulisation is running and that there are stages left to visulise
        if (
            this.state.isRunning &&
            this.state.sortingStage < this.state.sortingStages.length - 1
        ) {
            // sets the state to be the next stage of the sorting and increments sortingStage
            this.setState((prevState: any) => ({
                bars: prevState.sortingStages[prevState.sortingStage + 1].bars,
                swaps: prevState.sortingStages[prevState.sortingStage + 1]
                    .swaps,
                comparisons:
                    prevState.sortingStages[prevState.sortingStage + 1]
                        .comparisons,
                sortingStage: prevState.sortingStage + 1,
            }));
            await pause(this.state.speed); // delay
            this.visulise(); // Calls itself to keep visulising
        }
    };
    render() {
        return (
            <div className="App">
                <div className="container visuliserContainer">
                    <BarContainer
                        bars={this.state.bars}
                        maxSize={this.state.numOBars}
                        speed={this.state.speed}
                    />
                    <ProgressBar
                        stage={this.state.sortingStage}
                        max={this.state.sortingStages.length}
                    />
                </div>

                <div className="container setupControls">
                    <AlgoritmSelector
                        setAlgorithm={this.setAlgorithm}
                        algorithms={this.state.algorithms}
                    />
                    <NumOBarsSelector makeBars={this.makeBars} />
                </div>

                <div className="container liveControls">
                    <BackButton stepBackward={this.stepBackward} />
                    <StartStopButton
                        isRunning={this.state.isRunning}
                        togglePlayState={this.togglePlayState}
                    />
                    <ForwardButton stepForward={this.stepForward} />
                    <ResetButton reset={this.makeBars} />
                    <SpeedSelector setSpeed={this.setSpeed} />
                </div>

                <div className="container metricsContainer">
                    <Metrics
                        swaps={this.state.swaps}
                        comparisons={this.state.comparisons}
                    />
                    <ColourInfo />
                </div>

                <div className="container descriptionContainer">
                    <Description
                        selectedAlgorithm={this.state.selectedAlgorithm}
                    />
                </div>
            </div>
        );
    }
}

export default Sorting;
