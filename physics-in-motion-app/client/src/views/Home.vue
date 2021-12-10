<template>
  <h1>How physics should be taught.</h1>
  <p class="fs-5 col-md-8">Not through static diagrams and long blocks of meaningless text, but through dynamic physical simulations that allow you to build an intuition for how physical systems actually work.</p>

  <div class="mb-5">
    <a href="/" class="btn btn-dark btn-lg px-4">Get Started</a>
  </div>

  <div class="row g-5">
    <div class="col-md-6">
      <h2>Solar System</h2>
      <p>Ready to beyond the starter template? Check out these open source projects that you can quickly duplicate to a new GitHub repository.</p>
    </div>

    <div class="col-md-6">
      <div class="d-flex justify-content-center" id="p5Canvas"></div>
      <button @click="mass++">+</button>
    </div>
  </div>
</template>

<script>
import P5 from 'p5' // Package from npm

export default {
  data() {
    return {
      mass: 1
    }
  },
  mounted() {
    this.refreshSpring()
  },
  watch: {
    mass(oldVal, newVal) {
      console.log(oldVal, newVal)
      this.refreshSpring()
    }
  },
  methods: {
    refreshSpring() {
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
        let M = this.mass,  // Mass
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
      const p5canvas = new P5(script);
    }
  }
}
</script>
