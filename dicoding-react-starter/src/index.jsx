import React from 'react';
import { createRoot } from 'react-dom/client';
import CounterApp from './CounterApp';
// import {CounterDisplay, IncreaseButton, ResetButton} from './CounterApp'


class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        console.log('Component created!');
    }
    render() {
        return (
            <div>
                <p>Hello, {this.props.name}!</p>
                <p>{this.state.count}</p>
            </div>
        );
    }
    
}

const root = createRoot(document.getElementById('root'));
root.render(
    <div>
        <MyComponent name="Alin"/>
        <CounterApp />
    </div>
);