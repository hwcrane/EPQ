import React from "react";
import { CSSProperties } from "react";

// type for bar state
type barState = "unsorted" | "sorted" | "selected" | "pivot";

// Interface for the props passed into the bar
export interface barProps {
    size: number;
    maxSize: number;
    key: number;
    state: barState;
}

// React element for the bars
export const Bar = (props: barProps) => {
    switch (
        props.state // bar colour determined from state
    ) {
        case "unsorted":
            var col = "grey";
            break;
        case "sorted":
            var col = "green";
            break;
        case "selected":
            var col = "red";
            break;
        case "pivot":
            var col = "purple";
            break;
    }

    // CSS styles for bar
    var style: CSSProperties = {
        height: ((props.size / props.maxSize) * 100).toString() + "%",
        background: col,
    };
    return <div className="bar" style={style}></div>;
};
