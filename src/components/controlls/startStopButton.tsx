import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { startStopProps } from "../../types";

export default class StartStopButton extends React.Component<startStopProps> {
    // calls the togglePlayState method in the App class
    togglePlayState = () => {
        this.props.togglePlayState();
    };

    render() {
        var buttonlbl: JSX.Element;
        if (this.props.isRunning) {
            buttonlbl = <FontAwesomeIcon size="2x" icon={faPause} />;
        } else {
            buttonlbl = <FontAwesomeIcon size="2x" icon={faPlay} />;
        }
        return (
            <button // start stop button
                className="startstop controlButton"
                onClick={() => this.togglePlayState()}
            >
                {buttonlbl}
            </button>
        );
    }
}
