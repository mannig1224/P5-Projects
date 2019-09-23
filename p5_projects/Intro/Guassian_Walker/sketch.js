let walker;


function setup() {
  createCanvas(640,400);

  // Create a walker object
  walker = new Walker();

}

function draw() {

  // Run the walker object
  walker.render();
  walker.step();
}

class Walker {
  constructor() {
	this.x = width/2;
	this.y = height/2;
  }
  render() {
	noStroke();
	fill(168, 176, 247);
	ellipse(this.x, this.y, 10)
  };
  // Randomly move up, down, left, right, or stay in one place
  step() {
	let xGenerator = randomGaussian(0, 2);
	let yGenerator = randomGaussian(0, 2);

  
    this.x += xGenerator;
    this.y += yGenerator;

  }
}
