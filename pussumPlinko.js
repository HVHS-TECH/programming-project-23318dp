	let score = 1;
	let ball;
function setup() {
	console.log("setup: ");
	cnv = new Canvas(1920,940);
	ball = new Sprite(random(850,1000), 100, 30, 'd');
	ball.color = color(255, 0,0); 
	world.gravity.y = 5;
	
	//Multipliers
	pointFour = new Sprite(915, 590, 60, 30, 's');
	pointFour.color = color(255, 235,0); //yellow
	pointSevenL = new Sprite(850, 590, 60, 30, 's');
	pointSevenL.color = color(255, 165,0); //light orange
	 pointSevenR= new Sprite(980, 590, 60, 30, 's');
	pointSevenR.color = color(255, 165,0); //light orange
	oneThreeL= new Sprite(785, 590, 60, 30, 's');
	oneThreeL.color = color(255, 110,0); //dark orange
	oneThreeR= new Sprite(1046, 590, 60, 30, 's');
	oneThreeR.color = color(255, 110,0); //dark orange
	threeL= new Sprite(720, 590, 60, 30, 's');
	threeL.color = color(255, 50,0); //redish orange
	threeR= new Sprite(1113, 590, 60, 30, 's');
	threeR.color = color(255, 50,0); //reddish orange
	thirteenL= new Sprite(655, 590, 60, 30, 's');
	thirteenL.color = color(255, 0,0); //red
	thirteenR= new Sprite(1180, 590, 60, 30, 's');
	thirteenR.color = color(255, 0,0); //red
	//plinks
	for (var i = 0; i < 10; i++) {
		var block = new Sprite(i*66.67 + 620, 550, 10, 'k');
		block.color = color(255,255,255); 
		
	  }
	for (var i = 0; i < 9; i++) {
		var block = new Sprite(i*66.67 + 653, 500, 10, 'k');
		block.color = color(255,255,255); 
		
	  }
	for (var i = 0; i < 8; i++) {
		var block = new Sprite(i*66.67 + 685, 450, 10, 'k');
		block.color = color(255,255,255);
		
	  }
	for (var i = 0; i < 7; i++) {
		var block = new Sprite(i*66.67 + 720, 400, 10, 'k');
		block.color = color(255, 255, 255); 
		
	  }
	  for (var i = 0; i < 6; i++) {
		var block = new Sprite(i*66.67 + 752, 350, 10, 'k');
		block.color = color(255,255,255);
		
	  }
	  for (var i = 0; i < 5; i++) {
		var block = new Sprite(i*66.67 + 785, 300, 10, 'k');
		block.color = color(255,255,255);
		
	  }
	  for (var i = 0; i < 4; i++) {
		var block = new Sprite(i*66.67 + 815, 250, 10, 'k');
		block.color = color(255,255,255); 
		
	  }
	  for (var i = 0; i < 3; i++) {
		var block = new Sprite(i*66.67 + 850, 200, 10, 'k');
		block.color = color(255,255,255); 
		
	  }
	  
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background(30, 35, 50);
	fill('red')
	text(score, 915, 800);


balls.forEach  
	if (ball.overlaps(pointFour)) hitMultiplier(ball, 0.4);
	if (ball.overlaps(pointSevenL)) hitMultiplier(ball, 0.7);
	if (ball.overlaps(pointSevenR)) hitMultiplier(ball, 0.7);
	
	if (ball.overlaps(oneThreeL)) hitMultiplier(ball, 1.3);
	if (ball.overlaps(oneThreeR)) hitMultiplier(ball, 1.3);
	
	if (ball.overlaps(threeL)) hitMultiplier(ball, 3);
	if (ball.overlaps(threeR)) hitMultiplier(ball, 3);
	
	if (ball.overlaps(thirteenL)) hitMultiplier(ball, 13);
	if (ball.overlaps(thirteenR)) hitMultiplier(ball, 13);
}

function hitMultiplier(ball, value) {
	score *= value;
	ball.remove();
  }
  function spawnBall() {
	ball = new Sprite(random(850,1000), 100, 30, 'd');
	ball.color = color(255, 0,0); 
  }
  function mousePressed () {
	spawnBall();
  }
/*******************************************************/
//  END OF APP
/**/