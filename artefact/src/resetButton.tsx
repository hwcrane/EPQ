import React from "react";
import { resetButtonProps } from "./types";

export default class ResetButton extends React.Component<resetButtonProps> {
    reset = () => {
        this.props.reset();
    };

    render() {
        return (
            <button // reset button
                className="reset"
                onClick={() => this.reset()}
            >
                Reset
            </button>
        );
    }
}
