import logo from "./logo.svg";
import "./App.css";
import React from "react";

const Bar = (props) => {
    return (
        <div
            className="bar"
            style={{
                transform: `translateX(${props.positon * 3}rem)`,
                height: `${props.height}rem`,
            }}
        >
            {props.positon}
        </div>
    );
};

class App extends React.Component {
    state = {
        bars: [
            {
                height: 5,
                positon: 9,
            },
            {
                height: 10,
                positon: 2,
            },
            {
                height: 20,
                positon: 3,
            },
        ],
    };

    render() {
        return (
            <div className="arrContainer">
                {this.state.bars.map((bar) => (
                    <Bar
                        className="bar"
                        height={bar.height.toString()}
                        positon={bar.positon.toString()}
                    />
                ))}
            </div>
        );
    }
}

export default App;
