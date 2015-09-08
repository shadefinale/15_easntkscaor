// To make it easy to prevent users from calling certain functions in the console,
// I've converted model, view, and controller to use the revealing module pattern.
$( document ).ready(function(){
  JC.view.init(JC.model.getBoardSize());
  JC.controller.init();
});
