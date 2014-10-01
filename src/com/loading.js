Crafty.scene("loading", function() {
  	//console.log("pants")
    Crafty.load(["assets/dungeon.png","assets/characters.png"], function() {
         Crafty.scene("main"); // Run the main scene
         console.log("Done loading");
     },
     function(e) { //progress
     },
     function(e) { //somethig is wrong, error loading
     	console.log("Error,failed to load", e)

    });
  });