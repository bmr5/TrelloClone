import React from 'react'

const Card = (props) => {
    return (
        <div className={props.className}>
            <h3>I am card {props.name}</h3>
        </div>
    )
}

export default Card