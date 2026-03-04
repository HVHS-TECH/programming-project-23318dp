function setup() {
	console.log("setup: ");
	cnv = new Canvas(2000, 1000);
	circle = new Sprite(width/2, 100, 35, 'd');
	world.gravity.y = 5;
	for (var i = 0; i < 10; i++) {
		var block = new Sprite(i*width/15 + 350, 800, 20, 'k');
		block.color = color(1000, 0, 0); // Red color
		
	  }
	  for (var i = 0; i < 9; i++) {
		var block = new Sprite(i*width/15 + 415, 650, 20, 'k');
		block.color = color(500, 0, 0); // Red color
		
	  }
	  for (var i = 0; i < 8; i++) {
		var block = new Sprite(i*width/15 + 475, 500, 20, 'k');
		block.color = color(0, 0, 0); // Red color
		
	  }
	  for (var i = 0; i < 2; i++) {
		var block = new Sprite(i*width/15 + 935, 350, 20, 'k');
		block.color = color(400, 0, 0); // Red color
		
	  }
	  for (var i = 0; i < 1; i++) {
		var block = new Sprite(i*width/15 + 1000, 200, 20, 'k');
		block.color = color(400, 0, 0); // Red color
		
	  }
	  
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('lightBlue');
}

/*******************************************************/
//  END OF APP
/**/