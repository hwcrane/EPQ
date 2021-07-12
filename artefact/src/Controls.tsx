import React from "react";
import "./App.css";

interface controlProps {
    makeBars: any;
}

// react component for the control pannel
export default class Controls extends React.Component<controlProps> {
    barSelect: React.RefObject<HTMLInputElement>;
    constructor(props: any) {
        super(props);
        this.barSelect = React.createRef(); // creates a ref which will be assigned to the bar select element
    }

    // calls the makeBars method from the app class and passes in the value of the length range
    makeBars = () => {
        this.props.makeBars(this.barSelect.current?.value);
    };

    public render() {
        return (
            <div className="controls">
                <select className="algorithmSelect">
                    <option value="">Select Algoritm</option>
                </select>
                <button className="startstop">Start</button>
                <button className="reset">Reset</button>
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
