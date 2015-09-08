var JC = JC || {};

JC.model = (function(){

  // Holds squares that are currently lit up on the board.

  var activeSquares = [],
      score = 0;

  // Randomly generates a pair of coordinates.

  var pickSquare = function(){
    var square = {
        x: Math.floor(Math.random() * 4),
        y: Math.floor(Math.random() * 4)
      };
    activeSquares.push( square );
    JC.view.lightUpSquare( square );
  }

  // Checks to see if a click was on an active square.
  var scoreClick = function(x, y){
    for( var i = 0; i < activeSquares.length; i++ ){
      var testSquare = activeSquares[i];
      if( testSquare.x === x && testSquare.y === y ) {
        incrementUpScore();
        activeSquares.splice(i, 1);
        break;
      };
      break;
    };
  }

  // Adds a random number between 5 and 15 to the score.
  var incrementUpScore = function(){
    score += ( Math.floor(Math.random() * 15) + 5);
  }

  var getScore = function(){
    return score;
  }

  return {
    pickSquare: pickSquare,
    scoreClick: scoreClick,
    getScore: getScore,
  }
})();
