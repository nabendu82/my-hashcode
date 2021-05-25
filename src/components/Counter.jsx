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
        this.setState({ count: this.state.count + 1 })
    }
    
    render() {
        return (
            <>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.incrementCount()}>Increment</button>
            </>
        )
    }
}

export default Counter