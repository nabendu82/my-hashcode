import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        //this.incrementCount = this.incrementCount.bind(this);
    }

    incrementCount(){
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
        // this.state.count = this.state.count + 1;
        // console.log(this.state.count);
    }

    incrementFiveTimes() {
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
    }
    
    render() {
        return (
            <>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.incrementFiveTimes()}>Increment</button>
            </>
        )
    }
}

export default Counter