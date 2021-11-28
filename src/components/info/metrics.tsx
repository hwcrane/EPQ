import React from "react";
import { metricsProps } from "../../types";
import './info.css'

// React element for the Metrics
export const Metrics = (props: metricsProps) => {
    return (
        <div className="metrics">
            <span>Comparisons: {props.comparisons}</span>
            <span>Swaps: {props.swaps}</span>
        </div>
    );
};
