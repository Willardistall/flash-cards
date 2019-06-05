import React, { Component } from 'react';
import './App.css';
import { Container, Header, } from "semantic-ui-react"; 
import Card from './Card';
import DrawCard from './DrawCard';

class App extends Component {
  constructor(props){
    super(props);

    this.updateCard = this.updateCard.bind(this)

    this.state = {
      cards: [
        {id: 1, term: "JS REACT", definition: "Def"},
        {id: 2, term: "Definition2", definition: "Def"},
        {id: 1, term: "JS REACT3", definition: "Def"},
        {id: 2, term: "Definition4", definition: "Def"},
        {id: 1, term: "JS REACT5", definition: "Def"},
        {id: 2, term: "Definition6", definition: "Def"},
        {id: 1, term: "JS REACT7", definition: "Def"},
        {id: 2, term: "Definition8", definition: "Def"},
      ],
    currentCard:{}
  }
}

componentWillMount(){
  const currentCards = this.state.cards;
  
  this.setState({
    cards: currentCards,
    currentCard: this.getRandomCard(currentCards)
  })
}

getRandomCard(currentCards){
  var card = currentCards[Math.floor(Math.random() * currentCards.length)]
return(card)
}

updateCard(){
  const currentCards = this.state.cards
  this.setState({
    currentCard: this.getRandomCard(currentCards) 
  })
}
  render() {
    return (
      <Container>
      <Header as="h1">Flash Cards</Header>
      <div className="App">
       <div className= "cardRow">
        <Card term={this.state.currentCard.term}
              definition={this.state.currentCard.definition}
            />
          </div>
          <div className="buttonRow">
            <DrawCard drawCard={this.updateCard}/>
          </div>
      </div>
    </Container>
    );
  }
}

export default App;