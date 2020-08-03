import React from "react";
import Counter from "../Counter";

class CounterGroup extends React.Component {

    constructor(props) {
        super(props);
        this.size = 5;
    }

    render() {
        const initArray = [...Array(this.size).keys()];
        return <div>
            {
                initArray.map((item, index) => <Counter key={index}/>)
            }
        </div>
    }
}

export default CounterGroup;