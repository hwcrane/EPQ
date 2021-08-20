import React from "react";
import "./navBar.css";
import NavLink from "./navLink";
import NavTitle from "./navTitle";
import {
    faHome,
    faSortAmountDownAlt,
    faSearch,
    faRoute,
} from "@fortawesome/free-solid-svg-icons";
import { navBarProps, navBarState } from "../../types";
import NavWaffle from "./navWaffle";
import NavDropdown from "./navDropdown";

// component for the nav bar
export default class NavBar extends React.Component<navBarProps, navBarState> {
    state = {
        menuActive: false,
    };

    toggleMenu = () => {
        console.log("test");
        this.setState((prevstate) => ({
            menuActive: !prevstate.menuActive,
        }));
    };

    render() {
        return (
            <nav className="navBar">
                <div className="navPart">
                    <NavTitle />
                </div>
                {/* links are wrapped inside a container div so that they are kept together */}
                <div className="navPart">
                    <NavLink
                        icon={faHome}
                        text="Home"
                        current={this.props.page == "home"}
                        linkTo=""
                    ></NavLink>
                    <NavLink
                        icon={faSortAmountDownAlt}
                        text="Sorting"
                        current={this.props.page == "sorting"}
                        iconRotation={270}
                        linkTo="sorting"
                    ></NavLink>
                    <NavLink
                        icon={faSearch}
                        text="Searching"
                        current={this.props.page == "searching"}
                        linkTo="searching"
                    ></NavLink>
                    <NavLink
                        icon={faRoute}
                        text="Pathfinding"
                        current={this.props.page == "pathfinding"}
                        linkTo="pathfinding"
                    ></NavLink>
                </div>
                <NavWaffle toggleMenu={this.toggleMenu} />
                <NavDropdown
                    menuActive={this.state.menuActive}
                    page={this.props.page}
                />
            </nav>
        );
    }
}
