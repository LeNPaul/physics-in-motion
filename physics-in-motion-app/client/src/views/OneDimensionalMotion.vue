<template>
  <div class="row g-5">
    <div class="col-md-6">
      <h2>Motion in One Dimension</h2>
      <p></p>
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
      // this class describes the properties of a single particle.
      class Particle {
      // setting the co-ordinates, radius and the
      // speed of a particle in both the co-ordinates axes.
        constructor(){
          this.x = 0;
          this.y = p5.height / 2;
          this.r = 20;
          this.xSpeed = 2;
          this.ySpeed = 0;
        }

      // creation of a particle.
        createParticle() {
          p5.noStroke();
          p5.fill('rgba(200,169,169,0.5)');
          p5.circle(this.x,this.y,this.r);
        }

      // setting the particle in motion.
        moveParticle() {
          if(this.x < 0 || this.x > p5.width)
            this.xSpeed*=-1;
          if(this.y < 0 || this.y > p5.height)
            this.ySpeed*=-1;
          this.x+=this.xSpeed;
          this.y+=this.ySpeed;
        }

      }

      // an array to add multiple particles
      let particles = [];

      p5.setup = () => {
        p5.createCanvas(400, 400);
        particles.push(new Particle());
      }

      p5.draw = () => {
        p5.background('#0f0f0f');
        for(let i = 0;i<particles.length;i++) {
          particles[i].createParticle();
          particles[i].moveParticle();
        }
      }
    }
    const p5canvas = new P5(script, 'p5Canvas');
  }
}
</script>
