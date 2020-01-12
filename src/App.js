import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./cards.json";

let score = 0;
let topScore = 0;
let gameText = "Click each card one time only!"
class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    cards,
    score,
    topScore,
    gameText
  };

  pickCard = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const cards = this.state.cards.filter(card => card.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ cards });
  };

  // Map over this.state.friends and render a CharacterCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Teen Titans GO! Clicky Game</Title>
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
