const Turn = require('../src/Turn');

class Round {
  constructor (deck){
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    
  }
  returnCurrentCard (){
    return this.deck.cards[this.turns];
  }

  takeTurn (){
    const turn = new Turn(usersGuess, this.returnCurrentCard());
    this.turns++;
    if (turn.evaluateGuess() === false) {
    this.incorrectGuesses.push(turn.card.id);
    }
    return turn.giveFeedback();
  }

  calculatePercentCorrect (){
   const correctGuesses = (this.turns - this.incorrectGuesses.length) / this.turns * 100;
    return Math.round(correctGuesses);
  }

endRound (){
console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
}
}

module.exports = Round;
