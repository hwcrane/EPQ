import logo from "./logo.svg";
import "./App.css";
import React from "react";

const Bar = (props) => {
    return (
        <div
            className="bar"
            style={{
                transform: `translateX(${
                    (props.positon / props.arrLen) * 80
                }vw)`,
                height: `${props.height}rem`,
                width: `${(1 / props.arrLen) * 75}vw`,
            }}
        >
            {props.height}
        </div>
    );
};

class App extends React.Component {
    state = {
        bars: [],
    };

    sort = () => {
        var bars = this.state.bars;
        for (var i = 0; i < bars.length; i++) {
            bars[i].positon = bars[i].height - 1;
        }
        this.setState({
            bars: bars,
        });
    };

    resetBars = () => {
        var arrLen = 30;
        var p = [];
        for (var i = 0; i < arrLen; i++) {
            p.push({
                height: i + 1,
                positon: 29 - i,
            });
        }

        this.setState({
            bars: p,
        });
    };

    render() {
        return (
            <div>
                <div className="arrContainer" onClick={() => this.resetBars()}>
                    {this.state.bars.map((bar) => (
                        <Bar
                            className="bar"
                            height={bar.height.toString()}
                            positon={bar.positon.toString()}
                            arrLen={this.state.bars.length}
                        />
                    ))}
                </div>
                <button onClick={() => this.sort()} />
            </div>
        );
    }
}

export default App;
