import React from "react";
import { numOBarsSelectorProps } from "../../types";

export default class NumOBarsSelector extends React.Component<numOBarsSelectorProps> {
    ref: React.RefObject<HTMLInputElement>;

    constructor(props: numOBarsSelectorProps) {
        super(props);
        this.ref = React.createRef();
    }

    // calls the makeBars method from the app class and passes in the value of the length range
    makeBars = () => {
        this.props.makeBars(this.ref.current?.value);
    };

    render() {
        return (
            <div className = "numOfBarsSelectorContainer">
                Number of Bars :
                <input // bat range
                    type="range"
                    ref={this.ref} // linking the barSelect ref to the element
                    onChange={() => this.makeBars()} // call the `makeBars` method whenever the value of the range is changed
                    min={5}
                    max={200}
                    className = "numOfBarsSelector"
                />
            </div>
        );
    }
}
