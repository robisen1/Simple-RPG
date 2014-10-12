
function loadMap(file, callback) {
$.get(file,function(data) {
  var level = [];
  $.each(data.split("\n"),function(y,row) {
      var columns = row.split("\t");
  level.push(columns);
  $.each(columns,function(x,column) {
    if(column) {
      Crafty.e("2D, Canvas, floor, Floor").attr({x:x * 32, y: y * 32});
    } else {
      Crafty.e("2D, Canvas, wall1, Wall").attr({x:x * 32, y: y * 32});
    }
  });
});
callback(level);
});
}

function populateLevel(chance,level) {
$.each(level,function(y,row) {
  $.each(row,function(x,entry) {
    if(entry != "") {
      if((Math.random() < chance)) {
        Crafty.e("2D, Canvas, goblin1, AI, Solid,Enemy").attr({x:x*32, y:y*32, z:1}).moveChance(Math.random()*0.5);
      }
    }
  });
});
}
