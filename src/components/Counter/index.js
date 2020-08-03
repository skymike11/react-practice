import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            groupSize: 0
        }
    }

    increase = () => {
        this.setState(preState => ({
            value: preState.value + 1
        }));
        this.props.onHandleIncrease();
    };

    static getDerivedStateFromProps(props, state) {
        if (props.groupSize !== state.groupSize) {
            return {
                value: 0,
                groupSize: props.groupSize
            }
        }
        return null;
    }

    reduce = () => {
        this.setState(preState => ({
            value: preState.value - 1
        }));
        this.props.onHandleReduce();
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