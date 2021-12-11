<template>
  <div class="row g-5">
    <div class="col-md-6">
      <h2>Hooke's Law</h2>
      <p>This law describes how a spring behaves. Simply put, the amount of force required to move a spring is proportional to how far the spring is displaced from its equilibrium position.</p>
      <p>What this means is the farther you compress or depress a spring from its resting position, the faster it will rebound back. Try clicking on the grey square to see how the spring behaves. What happens when you displace the spring to its maximum position and release? What happens when you do a smaller displacement?</p>
    </div>

    <div class="col-md-6">
      <div class="d-flex justify-content-center" id="p5Canvas"></div>
    </div>
  </div>
</template>

<script>
import P5 from 'p5' // Package from npm

export default {
  mounted() {
    const script = p5 => {
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
      let M = 3,  // Mass
          K = 0.2,  // Spring constant
          D = 0.92, // Damping
          R = 150;  // Rest position
      // Spring simulation variables
      let ps = R,   // Position
          vs = 0.0, // Velocity
          as = 0,   // Acceleration
          f = 0;    // Force
      // Set up is here
      p5.setup = () => {
        p5.createCanvas(400, 400)
        p5.rectMode(p5.CORNERS);
        p5.noStroke();
        left = p5.width / 2 - 100;
        right = p5.width / 2 + 100;
      }
      // NOTE: Draw is here
      p5.draw = () => {
        p5.clear();
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
    const p5canvas = new P5(script, 'p5Canvas');
  }
}
</script>
