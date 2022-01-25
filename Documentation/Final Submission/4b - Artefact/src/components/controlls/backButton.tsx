import React from "react";
import { stepBackwardsProps } from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStepBackward } from "@fortawesome/free-solid-svg-icons";

export default class BackButton extends React.Component<stepBackwardsProps> {
    // calls the stepBackward method in the App class
    stepBackward = () => {
        this.props.stepBackward();
    };

    render() {
        return (
            <button
                className="backButton controlButton"
                onClick={() => this.stepBackward()}
            >
                <FontAwesomeIcon size="2x" icon={faStepBackward} />
            </button>
        );
    }
}
