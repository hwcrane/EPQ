import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { waffleProps } from "../../types";

export default class NavWaffle extends React.Component<waffleProps> {
    toggleMenu = () => {
        this.props.toggleMenu();
    };

    render() {
        return (
            <button className="waffle" onClick={() => this.toggleMenu()}>
                <FontAwesomeIcon icon={faBars} size="2x" />
            </button>
        );
    }
}
