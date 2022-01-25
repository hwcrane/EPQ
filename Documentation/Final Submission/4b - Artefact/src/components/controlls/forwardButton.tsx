import { faStepForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { stepForwardProps } from "../../types";

export default class ForwardButton extends React.Component<stepForwardProps> {
    // calls the stepForward method in the App class
    stepForward = () => {
        this.props.stepForward();
    };

    render() {
        return (
            <button // step forward button
                className="forward controlButton"
                onClick={() => this.stepForward()}
            >
                <FontAwesomeIcon size="2x" icon={faStepForward} />
            </button>
        );
    }
}
