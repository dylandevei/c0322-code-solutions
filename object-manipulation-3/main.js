console.log('Lodash is loaded:', typeof _ !== 'undefined');
const players = [
  {
    name: 'Mario',
    hand: []
  },
  {
    name: 'Luigi',
    hand: []
  },
  {
    name: 'Yoshi',
    hand: []
  },
  {
    name: 'Bowser',
    hand: []
  }
];

const deck = [];
const suit = ['spades', 'clubs', 'diamonds', 'hearts'];
const rank = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

const createDeck = () => {
  for (let i = 0; i < suit.length; i++) {
    for (let k = 0; k < rank.length; k++) {
      const card = {
        suit: suit[i],
        rank: rank[k]
      };
      deck.push(card);
    }
  }
  return deck;
};

const deal = () => {
  let shuffleDeck = _.shuffle(createDeck());
  for (let i = 0; i < players.length; i++) {
    players[i].hand = _.sampleSize(shuffleDeck, 2);
    shuffleDeck = _.pullAll(shuffleDeck, players[i].hand);
  }
  return players;
};

const play = () => {
  console.log('current players hands', deal());
  for (let i = 0; i < players.length; i++) {
    for (let k = 0; k < players[i].hand.length; k++) {
      if (players[i].hand[k].rank === 'A') {
        players[i].hand[k].rank = 11;
      } else if (players[i].hand[k].rank === 'J' || players[i].hand[k].rank === 'Q' || players[i].hand[k].rank === 'K') {
        players[i].hand[k].rank = 10;
      } else {
        players[i].hand[k].rank = Number(players[i].hand[k].rank);
      }
      players[i].score = players[i].hand[0].rank + players[i].hand[1].rank;
    }
  }
  const winnerOfGame = _.sortBy(players, 'score');
  return winnerOfGame[3].name;
};

const winner = play();

console.log(`The winner is ${winner}!!`);
