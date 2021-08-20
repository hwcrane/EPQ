import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";
import { navLinkProps } from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// component for the navbar links

export default class NavLink extends React.Component<navLinkProps> {
    render() {
        var extraclass = "";
        if (this.props.current) {
            // if link set to current, the selected class will be assigned to it, this gives it a diferent text colour and background
            extraclass = "selected";
        }
        return (
            <Link
                to={this.props.linkTo}
                className={"navItem navLink " + extraclass}
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
