import React from "react";
import store from "../store/index"
import {DECREMENT, INCREMENT} from "../store/actionTypes";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            size: 0
        };
        this.storeChange = this.storeChange.bind(this);
        store.subscribe(this.storeChange);
    }

    increase = () => {
        this.setState(preState => ({
            value: preState.value + 1
        }));
        store.dispatch({type: INCREMENT})
    };

    storeChange() {
        let currentSize = this.state.size;
        if (currentSize === 0) {
            this.setState({
                size: store.getState().size
            })
        } else if (currentSize !== store.getState().size) {
            this.setState({
                value: 0,
                size: store.getState().size
            })
        }
    }

    reduce = () => {
        if (this.state.value <= 0) {
            return;
        }
        this.setState(preState => ({
            value: preState.value - 1
        }));
        store.dispatch({type: DECREMENT})
    };

    render() {
        return (
            <div>
                <button onClick={this.reduce}>-</button>
                <mark>{this.state.value}</mark>
                <button onClick={this.increase}>+</button>
            </div>
        )
    }
}

export default Counter
