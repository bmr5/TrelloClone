import React from 'react';
import AddCard from './AddCard.jsx'
import Card from './Card.jsx'


const Column = (props) => {
    let cardArr=[]
    props.cards.forEach((name, i) => cardArr.push(<Card className={props.id} name={name} key={`card ${name}`}/>))
    return (
        <div className='col' id={props.id}>
            <h1>I am Column {props.label}</h1>
            {cardArr}
            <AddCard id={props.id} handleNewCard={props.handleNewCard}/>
        </div>
    )
}

export default Column