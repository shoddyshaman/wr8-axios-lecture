import React, {Component} from 'react';
import Card from './Card';
import axios from 'axios';

class Collection extends Component {
    constructor(){
        super();
        this.state = {
            cards: []
        }
    }

    componentDidMount(){
        this.getCards()
    }

    getCards = () => {
        axios
        .get('https://api.pokemontcg.io/v1/cards')
        .then(response => this.setState({ cards: response.data.cards}))
    }

    render(){
        const mappedCards = this.state.cards.map( card => {
            return <Card key={card.id} name={card.name} img={card.imageUrl}/>
        })
        return(
            <div className="collection">
                {mappedCards}
            </div>
        )
    }
}

export default Collection;