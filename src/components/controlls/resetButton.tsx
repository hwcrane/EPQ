import { faRandom } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { resetButtonProps } from "../../types";

export default class ResetButton extends React.Component<resetButtonProps> {
    reset = () => {
        this.props.reset();
    };

    render() {
        return (
            <button // reset button
                className="reset controlButton"
                onClick={() => this.reset()}
            >
                <FontAwesomeIcon size="2x" icon={faRandom} />
            </button>
        );
    }
}
