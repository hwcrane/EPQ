import React from "react";
import { stepForwardProps } from "./types";

export default class ForwardButton extends React.Component<stepForwardProps> {
    // calls the stepForward method in the App class
    stepForward = () => {
        this.props.stepForward();
    };

    render() {
        return (
            <button // step forward button
                className="forward"
                onClick={() => this.stepForward()}
            >
                forward
            </button>
        );
    }
}
