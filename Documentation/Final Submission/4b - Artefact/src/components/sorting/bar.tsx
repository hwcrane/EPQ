import React from "react";
import { CSSProperties } from "react";
import { barProps } from "../../types";

// React element for the bars
export const Bar = (props: barProps) => {
    switch (
        props.state // bar colour determined from state
    ) {
        case "unsorted":
            var col = "var(--nord10)";
            break;
        case "sorted":
            var col = "var(--nord14)";
            break;
        case "selected":
            var col = "var(--nord11)";
            break;
        case "pivot":
            var col = "var(--nord15)";
            break;
    }

    // CSS styles for bar
    var style: CSSProperties = {
        height: ((props.size / props.maxSize) * 100).toString() + "%",
        background: col,
        transition: "height " + props.speed + "ms ease",
    };
    return <div className="bar" style={style}></div>;
};
