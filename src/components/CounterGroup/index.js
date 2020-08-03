import React from "react";
import Counter from "../Counter";

class CounterGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            size: 0
        }
    }

    handleResize = (event) => {
        this.setState({
            size: event.target.value ? parseInt(event.target.value) : 0
        });
        console.log(this.state.size)
    };

    render() {
        const initArray = [...Array(this.state.size).keys()];
        return <div>
            <label>
                <input onBlur={this.handleResize} defaultValue={0}/>
            </label>
            {
                initArray.map((item, index) => <Counter key={index}/>)
            }
        </div>
    }
}

export default CounterGroup;