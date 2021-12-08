let p5;
let delegate;

export function main(_p5) {
  p5 = _p5

  // Define variables here
  // Spring drawing constants for top bar
  let springHeight = 32,
      left,
      right,
      maxHeight = 200,
      minHeight = 100,
      over = false,
      move = false;
  // Spring simulation constants
  let M = 0.8,  // Mass
      K = 0.2,  // Spring constant
      D = 0.92, // Damping
      R = 150;  // Rest position
  // Spring simulation variables
  let ps = R,   // Position
      vs = 0.0, // Velocity
      as = 0,   // Acceleration
      f = 0;    // Force
  // Set up is here
  p5.setup = _ => {
    p5.createCanvas(400, 400).parent("p5Canvas");
    p5.rectMode(p5.CORNERS);
    p5.noStroke();
    left = p5.width / 2 - 100;
    right = p5.width / 2 + 100;
  }
  // NOTE: Draw is here
  p5.draw = _ => {
    // Black background for now
    p5.background(102);
    updateSpring();
    drawSpring();
  }
  function drawSpring() {
    // Draw base
    p5.fill(0.2);
    let baseWidth = 0.5 * ps + -8;
    p5.rect(p5.width / 2 - baseWidth, ps + springHeight, p5.width / 2 + baseWidth, p5.height);
    // Set color and draw top bar
    if (over || move) {
      p5.fill(255);
    } else {
      p5.fill(204);
    }
    p5.rect(left, ps, right, ps + springHeight);
  }
  function updateSpring() {
    // Update the spring position
    if ( !move ) {
      f = -K * ( ps - R ); // f=-ky
      as = f / M;          // Set the acceleration, f=ma == a=f/m
      vs = D * (vs + as);  // Set the velocity
      ps = ps + vs;        // Updated position
    }
    if (p5.abs(vs) < 0.1) {
      vs = 0.0;
    }
    // Test if mouse if over the top bar
    if (p5.mouseX > left && p5.mouseX < right && p5.mouseY > ps && p5.mouseY < ps + springHeight) {
      over = true;
    } else {
      over = false;
    }
    // Set and constrain the position of top bar
    if (move) {
      ps = p5.mouseY - springHeight / 2;
      ps = p5.constrain(ps, minHeight, maxHeight);
    }
  }
   p5.mousePressed = _ => {
    if (over) {
      move = true;
    }
  }
  p5.mouseReleased = _ => {
    move = false;
  }

}

function notifyCurrentTime() {
  if (delegate !== undefined) {
    const message = p5.hour() + ":" + p5.minute() + ":" + p5.second();

    delegate(message);
  }
}

export function setDelegate(_delegate) {
  delegate = _delegate;
}
