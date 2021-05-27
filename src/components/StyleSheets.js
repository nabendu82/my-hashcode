import React from 'react'
import './stylesheets.css'

const parastyle = {
    fontSize: '20px',
    backgroundColor: 'yellow'
}

const StyleSheets = () => {
    return (
        <>
            <h1 className="primary">CSS Stylesheets</h1>
            <p className="secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. At quo rem dignissimos accusantium, error repellendus et nam ut quam enim.</p>
            <p style={parastyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis provident inventore enim dolores eveniet dignissimos amet error, eius blanditiis aspernatur. Eos aperiam corporis sunt quo esse! Expedita ut adipisci nemo?</p>
            <p style={{ color: 'red', fontWeight: 'bolder' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sunt repellendus accusantium expedita provident ex laborum alias. Cupiditate, aliquid! Iste quasi debitis molestias in, dolorem consectetur praesentium fuga? Necessitatibus, consequuntur fugit. Minima ea amet architecto eaque. Soluta dolores velit voluptatum?</p>
        </>
    )
}

export default StyleSheets
