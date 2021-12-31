function preload()
{}

function setup() {
    // Create the canvas
    canvas = createCanvas(720, 400);
    canvas.center();
    background(200);
  }

  function draw()
  {
      
    // Set colors
    fill(204, 101, 192, 127);
    stroke(127, 63, 120);
  
    // A rectangle
    rect(40, 100, 120, 40);
    // An ellipse
    ellipse(98, 170, 40, 40);
    ellipse(98, 70, 40, 40);
  
    translate(580, 200);
    noStroke();
    for (let i = 0; i < 360; i ++) {
      ellipse(0, 6, 4, 80);
      rotate(PI/36);
    }
  }
  