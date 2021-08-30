import React from "react";

export default class ColourInfo extends React.Component {
    render() {
        return (
            <ul className="ColourList">
                <li className="colourItem">
                    <div
                        className="colourBox"
                        style={{ background: "var(--nord10)" }}
                    ></div>
                    Unsorted
                </li>
                <li className="colourItem">
                    <div
                        className="colourBox"
                        style={{ background: "var(--nord11)" }}
                    ></div>
                    Selected
                </li>
                <li className="colourItem">
                    <div
                        className="colourBox"
                        style={{ background: "var(--nord15)" }}
                    ></div>
                    Pivot
                </li>
                <li className="colourItem">
                    <div
                        className="colourBox"
                        style={{ background: "var(--nord14)" }}
                    ></div>
                    Sorted
                </li>
            </ul>
        );
    }
}
