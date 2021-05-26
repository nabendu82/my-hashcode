import React from 'react'

const Greet = (props) => {
    const { name, children } = props;

    return (
        <>
            <h1>Hello {name}</h1>
            <p>{children}</p>
        </>
    )
    // return React.createElement(
    //     'div',
    //     null,
    //     React.createElement('h1', null, 'Hello World')
    // )
}

export default Greet;