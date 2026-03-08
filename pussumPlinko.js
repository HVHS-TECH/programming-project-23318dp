function setup() {
	console.log("setup: ");
	cnv = new Canvas(1920,940);
	circle = new Sprite(width/2, 100, 30, 'd');
	circle.color = color(255, 0,0); 
	
	world.gravity.y = 5;
	pointFour = new Sprite(915, 590, 60, 30, 'k');
	pointFour.color = color(255, 235,0); //yellow
	pointSevenL = new Sprite(850, 590, 60, 30, 'k');
	pointSevenL.color = color(255, 165,0); //light orange
	 pointSevenR= new Sprite(980, 590, 60, 30, 'k');
	pointSevenR.color = color(255, 165,0); //light orange
	oneThreeL= new Sprite(785, 590, 60, 30, 'k');
	oneThreeL.color = color(255, 110,0); //dark orange
	oneThreeR= new Sprite(1046, 590, 60, 30, 'k');
	oneThreeR.color = color(255, 110,0); //dark orange
	
	for (var i = 0; i < 10; i++) {
		var block = new Sprite(i*66.67 + 615, 560, 15, 'k');
		block.color = color(255,255,255); 
		
	  }
	for (var i = 0; i < 9; i++) {
		var block = new Sprite(i*66.67 + 653, 500, 15, 'k');
		block.color = color(255,255,255); 
		
	  }
	for (var i = 0; i < 8; i++) {
		var block = new Sprite(i*66.67 + 685, 450, 15, 'k');
		block.color = color(255,255,255);
		
	  }
	for (var i = 0; i < 7; i++) {
		var block = new Sprite(i*66.67 + 720, 400, 15, 'k');
		block.color = color(255, 255, 255); 
		
	  }
	  for (var i = 0; i < 6; i++) {
		var block = new Sprite(i*66.67 + 752, 350, 15, 'k');
		block.color = color(255,255,255);
		
	  }
	  for (var i = 0; i < 5; i++) {
		var block = new Sprite(i*66.67 + 785, 300, 15, 'k');
		block.color = color(255,255,255);
		
	  }
	  for (var i = 0; i < 4; i++) {
		var block = new Sprite(i*66.67 + 815, 250, 15, 'k');
		block.color = color(255,255,255); 
		
	  }
	  for (var i = 0; i < 3; i++) {
		var block = new Sprite(i*66.67 + 850, 200, 15, 'k');
		block.color = color(255,255,255); 
		
	  }
	  
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background(30, 35, 50);
	text("Hello World", 915, 590) 
}

/*******************************************************/
//  END OF APP
/**/