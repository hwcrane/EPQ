import React from "react";
import NavTitle from "./navTitle";

// component for the nav bar
export default class NavBar extends React.Component {
    render() {
        return (
            <nav className="navBar">
                <div className="navPart">
                    <NavTitle />
                </div>
            </nav>
        );
    }
}
