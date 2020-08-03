import React from "react";
import Counter from "../Counter";

class CounterGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            size: 0,
            totalNum: 0
        }
    }

    handleResize = (event) => {
        if (isNaN(parseInt(event.target.value))) {
            return;
        }
        this.setState({
            size: event.target.value ? parseInt(event.target.value) : 0
        });
    };

    handleIncrease = () => {
        this.setState(preState => ({
            totalNum: preState.totalNum + 1
        }))
    };

    handleReduce = () => {
        this.setState(preState => ({
            totalNum: preState.totalNum - 1
        }))
    };

    render() {
        const initArray = [...Array(this.state.size).keys()];
        return <div>
            <label>
                <input onBlur={this.handleResize} defaultValue={0}/>
            </label>
            <div>
                Total Number:
                {this.state.totalNum}
            </div>
            {
                initArray.map((item, index) =>
                    <Counter onHandleIncrease={this.handleIncrease}
                             onHandleReduce={this.handleReduce}
                             key={index}/>)
            }
        </div>
    }
}

export default CounterGroup;