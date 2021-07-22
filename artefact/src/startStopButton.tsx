import React from "react";
import { startStopProps } from "./types";

export default class StartStopButton extends React.Component<startStopProps> {
    // calls the togglePlayState method in the App class
    togglePlayState = () => {
        this.props.togglePlayState();
    };

    render() {
        var buttonlbl: string;
        if (this.props.isRunning) {
            buttonlbl = "stop";
        } else {
            buttonlbl = "start";
        }
        return (
            <button // start stop button
                className="startstop"
                onClick={() => this.togglePlayState()}
            >
                {buttonlbl}
            </button>
        );
    }
}
