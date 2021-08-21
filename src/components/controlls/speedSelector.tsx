import React from "react";
import { speedSelectorProps } from "../../types";
import "../../App.css";

// react component for the control pannel
export default class SpeedSelector extends React.Component<speedSelectorProps> {
    speed: React.RefObject<HTMLInputElement>;

    constructor(props: any) {
        super(props);

        this.speed = React.createRef(); // creates a ref to be assigned to the speed slider
    }

    // calls the setSpeed method in the App class
    setSpeed = () => {
        var speed: any = this.speed.current?.value; // get value from range
        this.props.setSpeed(1000 - speed);
    };

    public render() {
        return (
            <div className="speedSelectorContainer">
                Speed:
                <input // speed range
                    type="range"
                    ref={this.speed} // linking to the speed ref element
                    onChange={() => this.setSpeed()} // call the setSpeed method whenever the value of the range is changed
                    max={1000}
                    defaultValue={750}
                    min={500}
                    step={50}
                />
            </div>
        );
    }
}
