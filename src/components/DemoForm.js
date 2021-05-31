import React, { Component } from 'react'

class DemoForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: ''
        }
    }
    
    handleUserChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.username)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={this.state.username} onChange={this.handleUserChange} />
                    {/* textarea, select, radio, checkbox */}
                    {/* React Final Form */}
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default DemoForm
