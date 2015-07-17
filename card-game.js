cardGame = {
   deck:  [{ code: "&#x1F0A1", weight: 1, name: "Ace of Spades", suit: "Spades"},
            { code: "&#x1F0A2", weight: 2, name: "Two of Spades", suit: "Spades"},
            { code: "&#x1F0A3", weight: 3, name: "Three of Spades", suit: "Spades"},
            { code: "&#x1F0A4", weight: 4, name: "Four of Spades", suit: "Spades"},
            { code: "&#x1F0A5", weight: 5, name: "Five of Spades", suit: "Spades"},
            { code: "&#x1F0A6", weight: 6, name: "Six of Spades", suit: "Spades"},
            { code: "&#x1F0A7", weight: 7, name: "Seven of Spades", suit: "Spades"},
            { code: "&#x1F0A8", weight: 8, name: "Eight of Spades", suit: "Spades"},
            { code: "&#x1F0A9", weight: 9, name: "Nine of Spades", suit: "Spades"},
            { code: "&#x1F0AA", weight: 10, name: "Ten of Spades", suit: "Spades"},
            { code: "&#x1F0AB", weight: 11, name: "Jack of Spades", suit: "Spades"},
            { code: "&#x1F0AD", weight: 12, name: "Queen of Spades", suit: "Spades"},
            { code: "&#x1F0AE", weight: 13, name: "King of Spades", suit: "Spades"},
            { code: "&#x1F0B1", weight: 1, name: "Ace of Hearts", suit: "Hearts"},
            { code: "&#x1F0B2", weight: 2, name: "Two of Hearts", suit: "Hearts"},
            { code: "&#x1F0B3", weight: 3, name:"Three of Hearts", suit: "Hearts"},
            { code: "&#x1F0B4", weight: 4, name: "Four of Hearts", suit: "Hearts"},
            { code: "&#x1F0B5", weight: 5, name: "Five of Hearts", suit: "Hearts"},
            { code: "&#x1F0B6", weight: 6, name: "Six of Hearts", suit: "Hearts"},
            { code: "&#x1F0B7", weight: 7, name: "Seven of Hearts", suit: "Hearts"},
            { code: "&#x1F0B8", weight: 8, name: "Eight of Hearts", suit: "Hearts"},
            { code: "&#x1F0B9", weight: 9, name: "Nine of Hearts", suit: "Hearts"},
            { code: "&#x1F0BA", weight: 10, name: "Ten of Hearts", suit: "Hearts"},
            { code: "&#x1F0BB", weight: 11, name: "Jack of Hearts", suit: "Hearts"},
            { code: "&#x1F0BD", weight: 12, name: "Queen of Hearts", suit: "Hearts"},
            { code: "&#x1F0BE", weight: 13, name: "King of Hearts", suit: "Hearts"},
            { code: '&#x1F0C1', weight: 1, name: "Ace of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0C2', weight: 2, name: "Two of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0C3', weight: 3, name: "Three of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0C4', weight: 4, name: "Four of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0C5', weight: 5, name: "Five of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0C6', weight: 6, name: "Six of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0C7', weight: 7, name: "Seven of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0C8', weight: 8, name: "Eight of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0C9', weight: 9, name: "Nine of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0CA', weight: 10, name: "Ten of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0CB', weight: 11, name: "Jack of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0CD', weight: 12, name: "Queen of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0CE', weight: 13, name: "King of Diamonds", suit: 'Diamonds'},
            { code:'&#x1F0D1', weight: 1, name:'Ace of Clubs', suit: 'Clubs'},
            { code:'&#x1F0D2', weight: 2, name:'Two of Clubs', suit:'Clubs'},
            { code:'&#x1F0D3', weight: 3, name:'Three of Clubs', suit:'Clubs'},
            { code:'&#x1F0D4', weight: 4, name:'Four of Clubs', suit:'Clubs'},
            { code:'&#x1F0D5', weight: 5, name:'Five of Clubs', suit:'Clubs'},
            { code:'&#x1F0D6', weight: 6, name:'Six of Clubs', suit:'Clubs'},
            { code:'&#x1F0D7', weight: 7, name:'Seven of Clubs', suit:'Clubs'},
            { code:'&#x1F0D8', weight: 8, name:'Eight of Clubs', suit:'Clubs'},
            { code:'&#x1F0D9', weight: 9, name:'Nine of Clubs', suit:'Clubs'},
            { code:'&#x1F0DA', weight: 10, name:'Ten of Clubs', suit:'Clubs'},
            { code:'&#x1F0DB', weight: 11, name:'Jack of Clubs', suit:'Clubs'},
            { code:'&#x1F0DD', weight: 12, name:'Queen of Clubs', suit:'Clubs'},
            { code:'&#x1F0DE', weight: 13, name:'King of Clubs', suit:'Clubs'}
          ],
   score: 0,
   containsTwo: function(array, number){
    //  console.log(array);
     var arrayCopy = array.slice();
     if (arrayCopy.indexOf(number) === -1) {
       return false;
     } else {
       arrayCopy.splice(arrayCopy.indexOf(number), 1);
       if (arrayCopy.indexOf(number) === -1) {
         return false;
       } else {
         return true;
       }

     }
   },
   containsThree: function(array, number){
    //  console.log(array)
     var arrayCopy = array.slice();
     if (arrayCopy.indexOf(number) === -1) {
       return false;
     } else {
       arrayCopy.splice(arrayCopy.indexOf(number), 1);
       if (arrayCopy.indexOf(number) === -1) {
         return false;
       } else {
         arrayCopy.splice(arrayCopy.indexOf(number), 1);
         if (arrayCopy.indexOf(number) === -1) {
           return false;
         } else {
           return true;
         }
       }
     }
   },
   containsFour: function(array, number){
    //  console.log(array);
     var arrayCopy = array.slice();
     if (arrayCopy.indexOf(number) === -1) {
       return false;
     } else {
       arrayCopy.splice(arrayCopy.indexOf(number), 1);
       if (arrayCopy.indexOf(number) === -1) {
         return false;
       } else {
         arrayCopy.splice(arrayCopy.indexOf(number), 1);
         if (arrayCopy.indexOf(number) === -1) {
           return false;
         } else {
           arrayCopy.splice(arrayCopy.indexOf(number), 1);
           if (arrayCopy.indexOf(number) === -1) {
             return false;
          } else {
             return true;
          }
       }
     }
    }
   },

   dealHand: function(handSize){
     handSize = handSize || 2;
     var arrayCopy = this.deck.slice();
     var newHand = [];
     for (i=1;i<=handSize;i++){
       var j = Math.floor(Math.random()*arrayCopy.length-0);
       newHand.push(arrayCopy.splice(j,1)[0]);
     }
     return newHand;
   },
   scoreHand: function(hand) {
     var handWeights = []
     var handSuits = []
     for (i in hand) {
       handWeights.push(hand[i].weight);
       handSuits.push(hand[i].suit);
     }
     handWeights = handWeights.sort(function(a,b){ return a-b;});
     console.log(handWeights);
     if (hand.length >= 5){
       if (this.findStraight(handWeights.slice()) && this.findFlush(handSuits.slice()) && handWeights[0] === 1 && handWeights[handWeights.length-1] === 13) {
         console.log("YOU GOT A FUCKING ROYAL FLUSH!");
       } else if (this.findStraight(handWeights.slice()) && this.findFlush(handSuits)) {
         console.log("YOU GOT A STRAIGHT FLUSH");
       } else if (this.findStraight(handWeights.slice())) {
         console.log("YOU GOT A STRAIGHT!");
       } else if (this.findFlush(handSuits.slice())) {
         console.log("YOU GOT A FLUSH!");
       }
     }
    //  console.log(handWeights);
     if (this.findQuads(handWeights.slice())) {
       console.log("You got four of a kind!");
     } else if (this.findTrips(handWeights.slice()) && this.findPairs(handWeights.slice())) {
       console.log("You got a full house!");
     } else if (this.findTrips(handWeights.slice())) {
       console.log("You got 3 of a kind!")
     } else if (this.findPairs(handWeights.slice()) > 1) {
       console.log("You got two pair!")
     } else if (this.findPairs(handWeights.slice())) {
       console.log("You got a pair!")
     } else {
       console.log("You got jack shit!")
     }
     console.log(handWeights);
     console.log(handSuits);
     return hand;
   },
   findStraight: function(weights) {
    // console.log(weights);
    if (weights[1]) {
      if ((weights[0] === 1 && weights[1] === 11) || weights[0]+1 === weights[1]){
         weights.shift();
         return this.findStraight(weights);
      } else {
         return false;
      }
    } else {
      return true;
    }
  },
  findFlush: function(suits){
    // console.log(suits);
    if (suits[1]) {
      if (suits[0] === suits[1]) {
        suits.shift();
        return this.findFlush(suits);
      } else {
        return false;
      }
    } else {
      return true;
    }
  },
  findPairs: function(weights) {
    // console.log(handWeights);
    var found = 0;
    for (i in weights) {
      if (cardGame.containsTwo(weights, weights[i])) {
        found++;
        weights.splice(i,1);
      }
    }
    console.log(found);
    return found;
  },
  findTrips: function(weights) {
    // console.log(handWeights);
    var found = 0;
    for (i in weights) {
      if (cardGame.containsThree(weights, weights[i])) {
        found++;
        weights.splice(i,1);
      }
    }
    return found;
  },
  findQuads: function(weights) {
    // console.log(weights);
    var found = 0;
    for (i in weights) {
      if (cardGame.containsFour(weights, weights[i])) {
        found++
        weights.splice(i,1);
      }
    }
    // console.log(weights);
    return found;
  },
} // end of cardGame Obj

// console.log(cardGame.findStraight([11,12,5,14,15]));
// console.log(cardGame.findFlush(['club','diamond','club','club','club']));
// console.log(cardGame.scoreHand(cardGame.dealHand(5)));

// console.log(cardGame.findQuads([1,1,1,1,5]));
// console.log(cardGame.findPairs([1,2,3,3,4]));

console.log(cardGame.scoreHand([ { code: '&#x1F0A5',
    weight: 5,
    name: 'Five of Spades',
    suit: 'Spades' },
  { code: '&#x1F0C5',
    weight: 5,
    name: 'Five of Diamonds',
    suit: 'Diamonds' },
  { code: '&#x1F0B5',
    weight: 5,
    name: 'Five of Hearts',
    suit: 'Hearts' },
  { code: '&#x1F0C2',
    weight: 2,
    name: 'Two of Diamonds',
    suit: 'Diamonds' },
  { code: '&#x1F0A9',
    weight: 9,
    name: 'Nine of Spades',
    suit: 'Spades' } ]));
