import React from "react";
import { controlProps } from "./types";
import "./App.css";

// react component for the control pannel
export default class Controls extends React.Component<controlProps> {
    barSelect: React.RefObject<HTMLInputElement>;
    speed: React.RefObject<HTMLInputElement>;

    constructor(props: any) {
        super(props);
        this.barSelect = React.createRef(); // creates a ref which will be assigned to the bar select element

        this.speed = React.createRef(); // creates a ref to be assigned to the speed slider
    }

    // calls the makeBars method from the app class and passes in the value of the length range
    makeBars = () => {
        this.props.makeBars(this.barSelect.current?.value);
    };

    // calls the setSpeed method in the App class
    setSpeed = () => {
        var speed: any = this.speed.current?.value; // get value from range
        this.props.setSpeed(1000 - speed);
    };

    public render() {
        return (
            <div className="controls">
                Number of Bars :
                <input // bat range
                    type="range"
                    ref={this.barSelect} // linking the barSelect ref to the element
                    onChange={() => this.makeBars()} // call the `makeBars` method whenever the value of the range is changed
                    min={5}
                    max={200}
                />
                Speed:{" "}
                <input // speed range
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
