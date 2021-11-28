import React, { CSSProperties } from "react";
import "../../App.css";
import { descriptionProps } from "../../types";

export default class Description extends React.Component<descriptionProps> {
    render() {
        var style: CSSProperties = {}; // css properties
        var info = {
            // sets info to be blank
            title: "",
            text: "",
        };

        switch (this.props.selectedAlgorithm) {
            case "": // if no algorithm is selected don't display
                style.display = "none";
                break;

            case "Bubble Sort":
                info = {
                    title: "Bubble Sort",
                    text: "Bubble sort is one of the simplest algorithms to understand and implement. It works by repeatedly iterating through an array and continuously swapping adjacent elements until the list is in order. If you were sorting in ascending order, the algorithm would step through an array and at every step, it checks if the current element is larger than the next element. If it is, those elements are swapped. Once the algorithm reaches the end of an array, it repeats the process, starting from the begging. This results in the largest elements 'bubbling' up the array. Each iteration of the array is known as a run. You know the array is sorted once no elements are swapped in a run. This is because every element is less than the element that follows it.",
                };
                break;
            case "Quick Sort":
                info = {
                    title: "Quick Sort",
                    text: "Quick sort is one of the most effiecent sorting algorithms. It works by taking a pivot",
                };
                break;
        }

        return (
            <div className="description" style={style}>
                <h1 className = "DescriptionTitle">{info.title}</h1>
                <p className = "DescriptionText">{info.text}</p>
                
            </div>
        );
    }
}
