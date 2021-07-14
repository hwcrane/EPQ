import React from "react";
import "./App.css";

interface controlProps {
    makeBars: (n: any) => void;
    setAlgorithm: (selection: any) => void;
    algorithms: string[];
}

// react component for the control pannel
export default class Controls extends React.Component<controlProps> {
    barSelect: React.RefObject<HTMLInputElement>;
    algorithmSelect: React.RefObject<HTMLSelectElement>;
    constructor(props: any) {
        super(props);
        this.barSelect = React.createRef(); // creates a ref which will be assigned to the bar select element
        this.algorithmSelect = React.createRef(); // creates a ref which will be assigned to the algorithm select element
    }

    // calls the makeBars method from the app class and passes in the value of the length range
    makeBars = () => {
        this.props.makeBars(this.barSelect.current?.value);
    };

    // calls the setAlgorithm method inside the app class
    algorthmSelected = () => {
        this.props.setAlgorithm(this.algorithmSelect.current?.value);
    };

    public render() {
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
                <button className="startstop">Start</button>
                <button className="reset" onClick={() => this.makeBars()}>
                    Reset
                </button>
                Number of Bars :
                <input
                    type="range"
                    ref={this.barSelect} // linking the barSelect ref to the element
                    onChange={() => this.makeBars()} // call the `makeBars` method whenever the value of the range is changed
                />
                Speed: <input type="range" />
            </div>
        );
    }
}
