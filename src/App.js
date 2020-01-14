import React, { Component } from "react";
import Header from "./components/Header";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./cards.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    cards,
    score: 0,
    topScore: 0,
    gameText: "See if you can click each card once!"
  };

  pickCard = id => {
    const cards = this.state.cards;

    // Filter this.state.cards for cards with an id equal to the id being picked
    const pickedCard = this.state.cards.filter(card => card.id === id);

    // Randomize the card order
    cards.sort(function(a, b){return 0.5 - Math.random()});

    // Set this.state.cards equal to the new cards array
    this.setState({ cards });
    console.log(cards);
    console.log(pickedCard);
  };

  // Map over this.state.cards and render a CharacterCard component for each card object
  render() {
    return (
      <Wrapper>
        <Title>Teen Titans GO! Clicky Game</Title>
        <Header />
        {this.state.cards.map(card => (
          <CharacterCard
            pickCard={this.pickCard}
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
