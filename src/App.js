import React, { Component } from "react";
import Header from "./components/Header";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./cards.json";

let score = 0;
let topScore = 0;
let gameText = "Pick cards to earn points, but don't click the same card twice!";
class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    cards,
    score,
    topScore,
    gameText
  };

  pickCard = id => {
    const cards = this.state.cards;

    // Filter this.state.cards for cards with an id equal to the id being picked
    const pickedCard = this.state.cards.filter(card => card.id === id);

    if (pickedCard[0].picked === true){
      // Reset score to 0
      score = 0;

      gameText = "Oh no! You already picked that card! Try again."

      // Reset all cards picked value to false
      cards.forEach(card => card.picked = false);

      console.log("Card already picked");
      console.log("score: " + score + " | topScore: " + topScore);
    }
    else if (score < 12){
      score++;
      gameText = "Great! Keep going!";

      // Set card picked value to true
      pickedCard[0].picked = true;
      console.log("picked value: " + pickedCard[0].picked);
    }

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
