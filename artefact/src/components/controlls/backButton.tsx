import React from "react";
import { stepBackwardsProps } from "../../types";

export default class BackButton extends React.Component<stepBackwardsProps> {
    // calls the stepBackward method in the App class
    stepBackward = () => {
        this.props.stepBackward();
    };

    render() {
        return (
            <button className="backButton" onClick={() => this.stepBackward()}>
                back
            </button>
        );
    }
}
