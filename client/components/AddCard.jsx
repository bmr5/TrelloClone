import React from 'react';

const AddCard = (props) => {
    return (
        <div className = 'div-addCard'>
            <p>Create New Card</p>
            <input type='text' id={props.id + '-add-card'}></input>
            <input type='submit' value='add card' onClick={props.handleNewCard}></input>
        </div>
    )
}

export default AddCard