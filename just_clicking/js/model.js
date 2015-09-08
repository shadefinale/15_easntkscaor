var JC = JC || {};

JC.model = (function(){

  // Holds squares that are currently lit up on the board.
  // Now also keeps track of the game score.
  // Has a getter for the game score so the view knows to display
  // the actual score held by the model when asked for it.
  // The view itself is not referenced in the model.
  var activeSquares = [],
      nextGoal = 100;
      boardSize = 4;
      score = 0;

  // Randomly generates a pair of coordinates.

  var pickSquare = function(){
    var square = {
        x: Math.floor(Math.random() * boardSize),
        y: Math.floor(Math.random() * boardSize)
      };
    activeSquares.push( square );
    return square;
  }

  // Checks to see if a click was on an active square.
  // Typing this into the console seems to break the game,
  // (they cannot score anymore)
  // But the player cannot use incrementUpScore to cheat.
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

  var getBoardSize = function(){
    return boardSize;
  }

  var reachedGoal = function(){
    if (score > nextGoal){
      nextGoal += 100;
      activeSquares = [];
      increaseBoardSize();
      return true;
    } else {
      return false;
    }
  }

  var increaseBoardSize = function(){
    boardSize++;
  }

  return {
    pickSquare: pickSquare,
    scoreClick: scoreClick,
    getScore: getScore,
    getBoardSize: getBoardSize,
    reachedGoal: reachedGoal,
  }
})();
