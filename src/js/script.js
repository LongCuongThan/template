
$(document).ready(function(){
  /**
   * let's play
   */
   var btn_play = $(".btn-paly");
   btn_play.click(function(){

   });
  
  App.variables.btn_play.click(function(){
    App.variables.letsplay.disable();
    App.variables.playing.active(0);
    App.Log.w( App.variables.btn_play, "description");
  });

  /**
   * test
   */
});