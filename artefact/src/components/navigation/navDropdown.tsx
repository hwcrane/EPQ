import React from "react";
import {
    faHome,
    faSortAmountDownAlt,
    faSearch,
    faRoute,
} from "@fortawesome/free-solid-svg-icons";
import NavDropdownLink from "./navDropdownLink";
import { navDropdownProps } from "../../types";

export default class NavDropdown extends React.Component<navDropdownProps> {
    render() {
        var extraClass = "dropdownHidden";
        if (this.props.menuActive) {
            extraClass = "dropdownShow";
        }
        return (
            <div className={"navDropdown " + extraClass}>
                <NavDropdownLink
                    icon={faHome}
                    text="Home"
                    current={this.props.page == "home"}
                    linkTo=""
                ></NavDropdownLink>
                <NavDropdownLink
                    icon={faSortAmountDownAlt}
                    text="Sorting"
                    current={this.props.page == "sorting"}
                    iconRotation={270}
                    linkTo="sorting"
                ></NavDropdownLink>
                <NavDropdownLink
                    icon={faSearch}
                    text="Searching"
                    current={this.props.page == "searching"}
                    linkTo="searching"
                ></NavDropdownLink>
                <NavDropdownLink
                    icon={faRoute}
                    text="Pathfinding"
                    current={this.props.page == "pathfinding"}
                    linkTo="pathfinding"
                ></NavDropdownLink>
            </div>
        );
    }
}
