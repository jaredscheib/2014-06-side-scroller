// var Cop = function(){
//   this.left = 0;
//   this.node = $('<div class="cop"></div>')
// };

var makeTaxis = function(){
  var taxi = Object.create(null);
  taxi.left = 0;
  taxi.node = $('<div class="taxi"></div>')
  $('#world').prepend(taxi.node)
             .css("margin-left", this.left);
  taxi.move = function(){
    taxi.animate({'margin-left': Math.random() * 30});
    setTimeout(taxi.move);
  };
  return taxi;
};

var player = {
  left: 0,
  node: $('<div id="player"></div>'),
  create: function() {
    $('#world').append(player.node)
               .css('margin-left', this.left);
  },
  move: function(dir){
    switch( dir.which ){
    case 37: //left key - move player left
      this.left -= this.left <= 0 ? 0 : 30;
      break;
    case 39: //right key - move player right
      this.left += this.left >= 1200 ? 0 : 30;
      break;
    default:
      return;
    }
    $('#player').animate({"margin-left": this.left}, 50);
  }
};

var ground = {
  node: $('<div id="ground"></div>'),
  create: function(){
    $('#world').append(ground.node)
               .css('margin-left', 0);
  }
};

var init = function(){
  player.create();
  ground.create();
  setInterval(makeTaxis, 3000);
};

$(document).ready(function(){

  $(document).keydown(function(event){
    player.move(event);
    // event.preventDefault();
  });

  init();

});