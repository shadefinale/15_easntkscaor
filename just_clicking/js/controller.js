var JC = JC || {};

JC.controller = (function(){
  var init = function(){
    attachListeners();
    gameLoop();
  }

  // Interval to add new squares to the board.
  var gameLoop = function(){
    setInterval( function(){
      JC.model.pickSquare();
    }, 1000);
  }

  var attachListeners = function(){
    $( ".clicker" ).click( function(){
      var $square = $( this )
      $square.removeClass( "lit" );
      JC.model.scoreClick($square.data().x, $square.data().y);
      JC.view.drawScore(JC.model.getScore());
    })
  }

  return {
    init: init,
  };
})();
