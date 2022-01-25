import React from "react";
import "../../App.css";
import { descriptionProps } from "../../types";

export default class Description extends React.Component<descriptionProps> {
    render() {
        var info = {
            // sets info to be blank
            title: "",
            text: "",
        };

        switch (this.props.selectedAlgorithm) {
            case "": 
                info = {
                    title: "Please Select an Algorithm",
                    text: "",
                };
                break;

            case "Bubble Sort":
                info = {
                    title: "Bubble Sort",
                    text: "Bubble sort is one of the simplest algorithms to understand and implement. It works by repeatedly iterating through an array and continuously swapping adjacent elements until the list is in order. If you were sorting in ascending order, the algorithm would step through an array and at every step, it checks if the current element is larger than the next element. If it is, those elements are swapped. Once the algorithm reaches the end of an array, it repeats the process, starting from the begging. This results in the largest elements 'bubbling' up the array. Each iteration of the array is known as a run. You know the array is sorted once no elements are swapped in a run. This is because every element is less than the element that follows itBubble sort is one of the simplest algorithms to understand and implement. It works by repeatedly iterating through an array and continuously swapping adjacent elements until the list is in order. If you were sorting in ascending order, the algorithm would step through an array and at every step, it checks if the current element is larger than the next element. If it is, those elements are swapped. Once the algorithm reaches the end of an array, it repeats the process, starting from the beginning. This results in the largest elements 'bubbling' up the array. Each iteration of the array is known as a run. You know the array is sorted once no elements are swapped in a run. This is because every element is less than the element that follows it.",
                };
                break;
            case "Quick Sort":
                info = {
                    title: "Quick Sort",
                    text: "Quicksort is one of the fastest algorithms to implement. It works by taking a pivot, then moving all the elements greater it to the left or right .depending on whether or not you are sorting in increasing or decreasing order, respectively. This then creates two subsections, one where all elements are greater than the pivot and one where they are less than. This process is then applied recursively to each subsection, with each time splitting a sublist into two more sublists until the list is sorted. You know it is sorted once each subsection is one long.",
                };
                break;
                case "Insertion Sort":
                    info = {
                        title: "Insertion Sort",
                        text: "Insertion sort works by splitting a list into two sections, sorted and unsorted. The first element is automatically classed as sorted. The element directly next to the sorted section is then swapped backwards until it is in order in the sorted area. This means that it is continuously swapped with the element to its left until that element is greater or less than depending on whether or not you are sorting in ascending or descending order. The list is sorted once the unsorted section has no elements yet.",
                    };
                    break;
                case "Merge Sort":
                    info = {
                        title: "Merge Sort",
                        text: "Merge sort works by continuously splitting a list in half until the subsections are of length one. Once a list has been fully broken down, the sections are merged back together in the reverse order. With each merge, the sections are sorted. This means that since both sections are sorted, it is simple to sort them whilst merging by taking the smallest or largest, depending on whether you are sorting in ascending or descending order from both sections until both sections are empty. You know the list is sorted once you have merged back up to the whole list.",
                    };
                    break;
                case "Selection Sort":
                    info = {
                        title: "Selection Sort",
                        text: "Selection sort works by splitting the list into two sections, sorted and unsorted. The sorted section starts empty, then depending on is you are sorting ascending or descending, the smallest or largest element is selected from the unsorted section and moved to the end of sorted. This process is then repeated until the unsorted section is empty and the list is sorted.",
                    };
                    break;
        }

        return (
            <div className="description"> 
                <h1 className = "DescriptionTitle">{info.title}</h1>
                <p className = "DescriptionText">{info.text}</p>
            </div>
        );
    }
}
