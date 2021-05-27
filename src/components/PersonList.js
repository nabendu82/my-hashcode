import React from 'react'

const PersonList = () => {
    const names = ['Nabendu', 'Parag', 'Amit'];
    return names.map(name => <h1 key={name}>{name}</h1>)
}

export default PersonList
