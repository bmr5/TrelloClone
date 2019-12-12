import React, { Component} from 'react';
import './styles.css'
import Column from './components/Column.jsx'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            columns: [
                {name: 'col 1', cards: ['test', 'test2']},
                {name: 'col 2', cards: []}
            ]
        }
        this.handleNewCol = this.handleNewCol.bind(this)
        this.handleNewCard = this.handleNewCard.bind(this)
    }

    handleNewCol(e) {
        this.setState({
            columns: [...this.state.columns, {name: document.querySelector('.input-newcol').value, cards: []}]
        })
    }

    handleNewCard(e) {
        let colIndex = e.target.parentNode.parentNode.id
        let newCardName = document.querySelector(`#${colIndex}-add-card`).value
        let newState = {...this.state}
        newState.columns[colIndex.replace('col', '')].cards.push(newCardName)
        this.setState(newState)
    }

    render () {
        let cols = []
        for (let i=0; i<this.state.columns.length; i++) {
            cols.push(<Column id={`col${i}`} handleNewCard={this.handleNewCard} label={this.state.columns[i].name} cards={this.state.columns[i].cards} key={`col${i}`}/>)
        }

        return (
                <div>
                    <h1>Trello Clone</h1>
                    <input className='input-newcol' type='text' placeholder='column name'></input>
                    <button onClick={this.handleNewCol}>Add New Column</button>
                    
                    <div className = 'col-grid'>
                        {cols}
                    </div>
                    
                </div>
        )
    }
    
}

export default App