var JC = JC || {};

// There is no use of the model from the view now.
JC.view = (function(){

  var $scoreSpan;

  var init = function(boardSize){
    cacheElements();
    fillClickZone(boardSize);
  }

  var cacheElements = function(){
    $scoreSpan = $scoreSpan || $("#score");
  }

  var drawScore = function(score){
    $scoreSpan.text(score);
  }

  // These three function put the board on the page.
  // Edited to work with a passed in board size.
  var fillClickZone = function(boardSize){
    $("#click-zone").empty();
    for (var i = 0; i < boardSize; i++) {
      addRowToClickZone(i, boardSize);
    }
  }

  var addRowToClickZone = function( y, boardSize){
    $row = $( "<div class='row'></div>" )
    $( '#click-zone' ).append( $row )
    for (var i = 0; i < boardSize; i++) {
      addClickerToRow( $row, i, y )
    }
  }

  var addClickerToRow = function( row, x, y ){
    row.append( "<div class='clicker' data-x='" + x + "' data-y='" + y + "'></div>" )
  }

  // This sets up the click listener on each square.

  // This turns a square red.

  var lightUpSquare = function( square ){
    var $square = $( ".clicker[data-x='" + square.x + "'][data-y='" + square.y + "']" );
    $square.addClass( "lit" );
  }

  return {
    init: init,
    drawScore: drawScore,
    lightUpSquare: lightUpSquare,
  };
})();
