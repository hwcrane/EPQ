import React from "react";
import { metricsProps } from "../types";

// React element for the Metrics
export const Metrics = (props: metricsProps) => {
    return (
        <div className="metrics">
            <span>Comparisons: {props.comparisons}</span>
            <br />
            <span>Swaps: {props.swaps}</span>
        </div>
    );
};
