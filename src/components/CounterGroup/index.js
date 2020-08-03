import React from "react";
import Counter from "../Counter";
import store from "../store/index"
import {SETSIZE} from "../store/actionTypes";

class CounterGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 0,
            totalNum: store.getState().totalNum
        };
        this.storeChange = this.storeChange.bind(this);
        store.subscribe(this.storeChange);
    }

    storeChange() {
        this.setState({
            totalNum: store.getState().totalNum
        })
    }

    handleResize = (event) => {
        if (isNaN(parseInt(event.target.value))) {
            return;
        }
        if (event.target.value !== this.state.size) {
            this.setState({
                size: event.target.value ? parseInt(event.target.value) : 0,
            });
            store.dispatch({type: SETSIZE, size: event.target.value})
        }
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
                             groupSize={this.state.size}
                             key={index}/>)
            }
        </div>
    }
}

export default CounterGroup;
