var monteCarlo = function() {
    while (true) {
        var r1 = random(1);
        var probability = r1;
        var r2 = random(1);
        if (r2 > probability) {
            return r1;
        }
    }
};

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
	var stepSize = random(monteCarlo(), monteCarlo()*10);
 
    var xStepSize = random(-stepSize, stepSize);
    var yStepSize = random(-stepSize, stepSize);
 
    this.x += xStepSize;
    this.y += yStepSize;

  }
}
