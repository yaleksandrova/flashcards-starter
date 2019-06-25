const data = require('./Data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = {};
  }

  start() {
    let cards = prototypeQuestions.map(q => {
      let card = new Card(q.id, q.question, q.answers, q.correctAnswer);
      return card
    });

    let deck = new Deck(cards);
    let round = new Round(deck);
  
    this.printMessage(deck, round);
    this.printQuestion(round);

  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

}

module.exports = Game;