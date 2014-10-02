// create a simple object that describes player movement
Crafty.c("PlayerControls", {
	    init: function() {
			   //lets now make the hero move where ever we touch      
		    Crafty.addEvent(this, Crafty.stage.elem, 'mousedown', function(e) {
		    // lets simulate a 8 way controller or old school joystick
		    console.log("Before we move here are the values");
		    console.log("Old client X =  " + lastclientX );
		    console.log("Old client Y =  " + lastclientY );
		    console.log("e.clientX is = " + e.clientX );
		    console.log("e.clientY is = " + e.clientY );
		    console.log("playerX is = " + player.x);
		    console.log("playerY is = " + player.y);
		    
		    if (e.clientX < (player.x+Crafty.viewport.x) && (e.clientX - (player.x+Crafty.viewport.x))< 32) 
		       {
		       	//player.x =  player.x - 32;
		       	console.log(" the x value is -1 ")
		       	myx = -1;
		       }
		   	else if (e.clientX > (player.x+Crafty.viewport.x) && (e.clientX - (player.x+Crafty.viewport.x)) > 32){
		   		//player.x = player.x + 32;
		   		console.log(" the x value is 1 ")
		   		myx = 1;
		   	}
		   	else {player.x = (player.x+Crafty.viewport.x); 
		   		console.log(" the x value is 0 ")
		   		  myx = 0
		   		}


		   	if (e.clientY < (player.y+Crafty.viewport.y) && (e.clientY - (player.y+Crafty.viewport.y))< 32) 
		       {
		       	//player.y =  player.y - 32;
		       	console.log(" the y value is -1 ")
		       	myy= -1
		       }
		   	else if (e.clientY > (player.y+Crafty.viewport.y) && (e.clientY - (player.y+Crafty.viewport.y)) > 32){
		   		//player.y = player.y + 32;
		   		console.log(" the y value is 1 ")
		   		myy= 1
		   	}
		   	else {player.y = (player.y+Crafty.viewport.y);
		   		console.log(" the y value is 0 ")
		   		myy = 0;}
		   	// let the game know we moved and where too	
		   	var direction = [myx,myy];

		   	this.trigger('Slide',direction);
			//Crafty.trigger('Moved', {x: player.x, y: player.y});
			Crafty.trigger('Turn');
			console.log("the direction is = " + direction)
			console.log("After our move");
		    console.log("e.clientX is = " + e.clientX );
		    console.log("e.clientY is = " + e.clientY );
		    console.log("playerX is = " + player.x);
		    console.log("playerY is = " + player.y);

		    lastclientY = e.clientY;
		    lastclientX = e.clientX;

		    console.log("my x direction is " + myx + " my y direction is " + myy)
			console.log('mousedown at (' + e.clientX + ', ' + e.clientY + ')');
			});
			}
		
});
