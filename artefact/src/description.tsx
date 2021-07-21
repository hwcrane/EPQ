import React, { CSSProperties } from "react";
import "./App.css";
import { descriptionProps } from "./types";

export default class Description extends React.Component<descriptionProps> {
    render() {
        var style: CSSProperties = {}; // css properties
        var info = {
            // sets info to be blank
            title: "",
            text: "",
            complexity: {
                comparisons: {
                    worst: "",
                    best: "",
                    average: "",
                },
                swaps: {
                    worst: "",
                    best: "",
                    average: "",
                },
            },
        };

        switch (this.props.selectedAlgorithm) {
            case "": // if no algorithm is selected don't display
                style.display = "none";
                break;

            case "Bubble Sort":
                info = {
                    title: "Bubble Sort",
                    text: "Bubble sort is one of the simplest algorithms to understand and implement. It works by repeatedly iterating through an array and continuously swapping adjacent elements until the list is in order. If you were sorting in ascending order, the algorithm would step through an array and at every step, it checks if the current element is larger than the next element. If it is, those elements are swapped. Once the algorithm reaches the end of an array, it repeats the process, starting from the begging. This results in the largest elements 'bubbling' up the array. Each iteration of the array is known as a run. You know the array is sorted once no elements are swapped in a run. This is because every element is less than the element that follows it.",
                    complexity: {
                        comparisons: {
                            worst: "O(n^2)",
                            best: "O(n)",
                            average: "O(n^2)",
                        },
                        swaps: {
                            worst: "O(n^2)",
                            best: "O(1)",
                            average: "O(n^2)",
                        },
                    },
                };
                break;
        }

        return (
            <div className="description" style={style}>
                <h1>{info.title}</h1>
                <p>{info.text}</p>
                {/* table to show complexity */}
                <table>
                    <tr>
                        <th></th>
                        <th>Worst Case</th>
                        <th>Best Case</th>
                        <th>Average</th>
                    </tr>
                    <tr>
                        <th>Comparisons</th>
                        <td>{info.complexity.comparisons.worst}</td>
                        <td>{info.complexity.comparisons.best}</td>
                        <td>{info.complexity.comparisons.average}</td>
                    </tr>
                    <tr>
                        <th>Swaps</th>
                        <td>{info.complexity.swaps.worst}</td>
                        <td>{info.complexity.swaps.best}</td>
                        <td>{info.complexity.swaps.average}</td>
                    </tr>
                </table>
            </div>
        );
    }
}
