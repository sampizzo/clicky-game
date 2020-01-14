import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./cards.json";

let score = 0;
let topScore = 0;
let gameText = "Click cards to earn points, but don't click the same card twice!";
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
      this.setState({ score });
      this.setState({ topScore });
      gameText = "Oh no! You already picked that card! Try again."
      this.setState({ gameText });

      // Reset all cards picked value to false
      cards.forEach(card => card.picked = false);

      console.log("Card already picked");
      console.log("score: " + score + " | topScore: " + topScore);
    }
    else if (score < 11){
      score++;
      this.setState({ score });

      // Only change topScore if greater than current topScore
      if (score > topScore){
        topScore = score;
      }
      
      this.setState({ topScore });
      gameText = "Great job! Keep it up!";
      this.setState({ gameText });

      // Set card picked value to true
      pickedCard[0].picked = true;
      console.log("picked value: " + pickedCard[0].picked);
    }
    else {
      // Reset score
      score = 0;
      this.setState({ score });
      // Set topScore to 12
      topScore = 12;
      this.setState({ topScore });
      gameText = "Amazing! That's a good memory you have there! Play again!";
      this.setState({ gameText });

      // Reset cards picked value to false
      cards.forEach(card => card.picked = false);

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
        <h1>Score: {this.state.score} | Top Score: {this.state.topScore}</h1>
        <h1>{this.state.gameText}</h1>
        <div className="game">
        {this.state.cards.map(card => (
          <CharacterCard
            pickCard={this.pickCard}
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
          />
        ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
