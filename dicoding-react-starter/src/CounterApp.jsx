import React from 'react';

function CounterDisplay({ count }) {
    return <p>{count}</p>;
}

function IncreaseButton({ increase }) {
    return (
        <div>
            <button onClick={increase}>+ increase</button>
        </div>
    );
}

function ResetButton({ reset }) {
    return (
        <div>
            <button onClick={reset}>- reset</button>
        </div>
    );
}

class CounterApp extends React.Component {
    constructor(props) {
        super(props);

        // inisialisasi nilai count di dalam state
        this.state = {
            count: 0
        };

        this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this);
        this.onResetEventHandler = this.onResetEventHandler.bind(this);
    }
    onIncreaseEventHandler() {
        this.setState((previousState) => {
            return {
                count: previousState.count + 1
            };
        });
    }
    onResetEventHandler() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }
    render() {
        return (
            <div>
                <p>TODO: selesaikan component-nya!</p>
                <IncreaseButton increase={this.onIncreaseEventHandler} />
                <CounterDisplay count={this.state.count} />
                <ResetButton reset={this.onResetEventHandler} />
            </div>
        );
    }
}

export default CounterApp;
// export {CounterDisplay, IncreaseButton, ResetButton}