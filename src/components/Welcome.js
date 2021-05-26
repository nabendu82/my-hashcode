import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        const { name, children } = this.props;

        return (
            <div>
                <h1>Welcome to {name}</h1>
                <p>{children}</p>
            </div>
        )
    }
}

export default Welcome
