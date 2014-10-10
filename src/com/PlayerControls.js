// create a simple object that describes player movement
Crafty.c("PlayerControls", {
	    init: function() {
			   //lets now make the hero move where ever we touch
		    Crafty.addEvent(this, Crafty.stage.elem, 'mousedown', function(e) {
		    // lets simulate a 8 way controller or old school joystick
		    //build out the direction of the mouse point. remember that y increases as it goes 'downward'

		    if (e.clientX < (player.x+Crafty.viewport.x) && (e.clientX - (player.x+Crafty.viewport.x))< 32)
		       {
		       	myx = -1;
		       }
		   	else if (e.clientX > (player.x+Crafty.viewport.x) && (e.clientX - (player.x+Crafty.viewport.x)) > 32){
		   			myx = 1;
		   	}
		   	else {
		   			myx = 0;
		   		}


		   	if (e.clientY < (player.y+Crafty.viewport.y) && (e.clientY - (player.y+Crafty.viewport.y))< 32)
		       {
		       	myy= -1;
		       }
		   	else if (e.clientY > (player.y+Crafty.viewport.y) && (e.clientY - (player.y+Crafty.viewport.y)) > 32){
		   			myy= 1;
		   	}
		   	else {
		   			myy = 0;}
		   	// let the game know we moved and where too
		   	var direction = [myx,myy];
		   	this.trigger('Slide',direction);
			Crafty.trigger('Turn');
		    lastclientY = e.clientY;
		    lastclientX = e.clientX;
		    console.log("my x direction is " + myx + " my y direction is " + myy)
			  console.log('mousedown at (' + e.clientX + ', ' + e.clientY + ')');
			});
			}
});
