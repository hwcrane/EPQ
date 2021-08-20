import React, { CSSProperties } from "react";
import { progressBarProps } from "../../types";

// component for the progress bar of the visuliser
export default class ProgressBar extends React.Component<progressBarProps> {
    render() {
        var style: CSSProperties = {
            width:
                ((this.props.stage / (this.props.max - 1)) * 100).toString() +
                "%", // sets width proportional to how far it is into the visuliation
        };
        return (
            <div className="outerProgressBar">
                <div className="innerProgressBar" style={style}></div>
            </div>
        );
    }
}
