import React from "react";
import { algoritmSelectorProps } from "./types";

export default class AlgoritmSelector extends React.Component<algoritmSelectorProps> {
    ref: React.RefObject<HTMLSelectElement>;

    constructor(props: algoritmSelectorProps) {
        super(props);
        this.ref = React.createRef();
    }

    // calls the setAlgorithm method inside the app class
    algorthmSelected = () => {
        this.props.setAlgorithm(this.ref.current?.value);
    };

    render() {
        return (
            <select // Algorithm selector
                className="algorithmSelect"
                onInput={() => this.algorthmSelected()}
                ref={this.ref}
            >
                <option value="">Select Algoritm</option>
                {this.props.algorithms.map((a) => (
                    <option value={a} key={this.props.algorithms.indexOf(a)}>
                        {a}
                    </option>
                ))}
            </select>
        );
    }
}
