import React from 'react';
import CounterGroup from './components/CounterGroup'
import './App.css'

class App extends React.Component {
    render() {
        return (
            <div className={"App-header"}> Hello React
                <CounterGroup/>
            </div>
        );
    }
}

export default App;
