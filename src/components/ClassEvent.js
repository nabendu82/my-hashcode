import React, { Component } from 'react'

class ClassEvent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: 'Hello World!!'
        }
        // this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick = () => {
        this.setState({
            message: 'Hello React'
        })
        console.log(this)
    }

    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                {/* <button onClick={this.handleClick.bind(this)}>Click Me</button> */}
                {/* <button onClick={() => this.handleClick()}>Click Me</button> */}
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}

export default ClassEvent
