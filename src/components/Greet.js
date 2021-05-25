import React from 'react'

const Greet = (props) => {
    console.log(props)
    return (
        <>
            <h1>Hello {props.name}</h1>
            <p>{props.children}</p>
        </>
    )
    // return React.createElement(
    //     'div',
    //     null,
    //     React.createElement('h1', null, 'Hello World')
    // )
}

export default Greet;