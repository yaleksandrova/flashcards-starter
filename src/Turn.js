class Turn {
  constructor (usersGuess, card){
    this.usersGuess = usersGuess;
    this.card = card;
  }
  returnGuess (){
    return this.usersGuess;
  }

  returnCard (){
    return this.card;
  }

  evaluateGuess (){
    return this.usersGuess === this.card.correctAnswer;
  }

  giveFeedback (){
    if (this.evaluateGuess() === true){
      return 'Correct!';
    } else {
      return 'Incorrect!';
    }
  }

/* check if we need to use this for the method reference */
}


module.exports = Turn;

