import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class Child extends Component {
    render() {
        return (
            <UserConsumer>
                {(username) => {
                    return (
                        <>
                            <h1>Child Component</h1>
                            <h3>Hello {username}</h3>
                        </>
                    )
                }}
            </UserConsumer>
        )
    }
}

export default Child
