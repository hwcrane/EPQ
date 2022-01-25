import React from "react";
import { barContainerProps } from "../../types";
import { Bar } from "./bar";

// React element for the bar container
export const BarContainer = (props: barContainerProps) => {
    return (
        <div className="barContainer">
            {props.bars.map(
                (
                    bar //loop through all the array, creating a bar for each
                ) => (
                    <Bar
                        size={bar.size}
                        maxSize={props.maxSize}
                        key={props.bars.indexOf(bar)}
                        state={bar.state}
                        speed={props.speed}
                    />
                )
            )}
        </div>
    );
};
