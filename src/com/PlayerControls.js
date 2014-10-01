// create a simple object that describes player movement
Crafty.c("PlayerControls", {
	    init: function() {
			   //lets now make the hero move where ever we touch      
		    Crafty.addEvent(this, Crafty.stage.elem, 'mousedown', function(e) {
		    // lets simulate a 8 way controller or old school joystick

		    console.log("the values are; x= " + e.clientX );
		    if (e.clientX < player.x && (e.clientX - player.x)< 32) 
		       {player.x =  player.x - 32;}
		   	else if (e.clientX > player.x && (e.clientX - player.x) > 32){
		   		player.x = player.x + 32;
		   	}
		   	else {player.x = player.x}

		   	if (e.clientY < player.y && (e.clientY - player.y)< 32) 
		       {player.y =  player.y - 32;}
		   	else if (e.clientY > player.y && (e.clientY - player.y) > 32){
		   		player.y = player.y + 32;
		   	}
		   	else {player.y = player.y}
		   	// let the game know we moved and where too	
			Crafty.trigger('Moved', {x: player.x, y: player.y});
			Crafty.trigger('Turn');
			  	console.log('mousedown at (' + e.clientX + ', ' + e.clientY + ')');
			});
			}
		
});
