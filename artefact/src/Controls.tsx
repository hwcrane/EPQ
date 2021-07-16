import React from "react";
import { bubble } from "./algorithms";
import "./App.css";

interface controlProps {
    makeBars: (n: any) => void;
    setAlgorithm: (selection: any) => void;
    togglePlayState: () => void;
    setSpeed: (speed: any) => void;
    isRunning: boolean;
    algorithms: string[];
}

// react component for the control pannel
export default class Controls extends React.Component<controlProps> {
    barSelect: React.RefObject<HTMLInputElement>;
    speed: React.RefObject<HTMLInputElement>;
    algorithmSelect: React.RefObject<HTMLSelectElement>;

    constructor(props: any) {
        super(props);
        this.barSelect = React.createRef(); // creates a ref which will be assigned to the bar select element
        this.algorithmSelect = React.createRef(); // creates a ref which will be assigned to the algorithm select element
        this.speed = React.createRef(); // creates a ref to be assigned to the speed slider
    }

    // calls the makeBars method from the app class and passes in the value of the length range
    makeBars = () => {
        this.props.makeBars(this.barSelect.current?.value);
    };

    // calls the setAlgorithm method inside the app class
    algorthmSelected = () => {
        this.props.setAlgorithm(this.algorithmSelect.current?.value);
    };

    // calls the togglePlayState method in the App class
    togglePlayState = () => {
        this.props.togglePlayState();
    };

    // calls the setSpeed method in the App class
    setSpeed = () => {
        var speed: any = this.speed.current?.value; // get value from range
        this.props.setSpeed(1000 - speed);
    };

    public render() {
        if (this.props.isRunning) {
            var buttonlbl = "stop";
        } else {
            var buttonlbl = "start";
        }
        return (
            <div className="controls">
                <select
                    className="algorithmSelect"
                    onInput={() => this.algorthmSelected()}
                    ref={this.algorithmSelect}
                >
                    <option value="">Select Algoritm</option>
                    {this.props.algorithms.map((a) => (
                        <option
                            value={a}
                            key={this.props.algorithms.indexOf(a)}
                        >
                            {a}
                        </option>
                    ))}
                </select>
                <button
                    className="startstop"
                    onClick={() => this.togglePlayState()}
                >
                    {buttonlbl}
                </button>
                <button className="reset" onClick={() => this.makeBars()}>
                    Reset
                </button>
                Number of Bars :
                <input
                    type="range"
                    ref={this.barSelect} // linking the barSelect ref to the element
                    onChange={() => this.makeBars()} // call the `makeBars` method whenever the value of the range is changed
                    min={5}
                    max={200}
                />
                Speed:{" "}
                <input
                    type="range"
                    ref={this.speed} // linking to the speed ref element
                    onChange={() => this.setSpeed()} // call the setSpeed method whenever the value of the range is changed
                    max={1000}
                    defaultValue={750}
                    min={0}
                />
            </div>
        );
    }
}
