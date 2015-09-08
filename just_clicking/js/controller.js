var JC = JC || {};

// Moved listener attachment to the controller.
// When the user clicks, we score the click and then update the score.
JC.controller = (function(){
  var init = function(){
    attachListeners();
    gameLoop();
  }

  // Interval to add new squares to the board.
  var gameLoop = function(){
    setInterval( function(){
      checkResizeBoard();
      var newSquare = JC.model.pickSquare();
      JC.view.lightUpSquare(newSquare);
    }, 1000);
  }

  var attachListeners = function(){
    // Switch to delegation so we can manipulate the dom
    // and still have the click events work when the board size increases.
    $( "#click-zone" ).on("click", ".clicker", function(evt){
      var $square = $( evt.target )
      $square.removeClass( "lit" );
      JC.model.scoreClick($square.data().x, $square.data().y);
      JC.view.drawScore(JC.model.getScore());
    })
  }

  var checkResizeBoard = function(){
    if (JC.model.reachedGoal()){
      // Since the only thing the view initialization does
      // is add dom elements (if it's already cached)
      // We just call it again to draw a new board
      // caveat: any lit squares before resizing are gone.
      JC.view.init(JC.model.getBoardSize());
    }
  }

  return {
    init: init,
  };
})(JC.view, JC.model);
// Pass in dependancies here.
