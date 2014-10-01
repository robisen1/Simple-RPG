Crafty.c("Camera",{
  init: function() {  

   // console.log("x is " + Crafty.viewport.width) ;
  },
  camera: function(obj) {
    this.set(obj);
    var that = this;
    obj.bind("Moved",function(location) { that.set(location); });
  },
  set: function(obj) {
    console.log("before we move the position is X " + player.x + "and Y is " + player.y) ;
    console.log("")
    Crafty.viewport.x = -obj.x + Crafty.viewport.width / 2;
    Crafty.viewport.y = -obj.y + Crafty.viewport.height / 2;
    console.log("viewport width is " + Crafty.viewport.width + " the object x is obj.x " + obj.x + " the y is obj.y"
+ obj.y
      ) ;
    console.log("the players position value is now " + player.x + "and Y is " + player.y) ;

  }
});



 