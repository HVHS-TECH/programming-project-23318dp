function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth, windowHeight);
	circle = new Sprite(width/2, 100, 35, 'd');
	world.gravity.y = 5;
	pin_1 = new Sprite(width/2, 400, 25, 'k');
    pin_2 = new Sprite(width/3, 400, 25, 'k');


}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('black');
}

/*******************************************************/
//  END OF APP
/**/