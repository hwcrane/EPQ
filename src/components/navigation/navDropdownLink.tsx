import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";
import { navDropdownLinkProps } from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// component for the navbar links

export default class NavDropdownLink extends React.Component<navDropdownLinkProps> {
    render() {
        var extraclass = "dropdownLinkUnselected";
        if (this.props.current) {
            extraclass = "dropdownLinkSelected";
        }
        return (
            <Link
                to={this.props.linkTo}
                className={"navDropdownLink " + extraclass}
            >
                <FontAwesomeIcon
                    icon={this.props.icon}
                    rotation={this.props.iconRotation}
                    className="icon"
                />

                {this.props.text}
            </Link>
        );
    }
}
