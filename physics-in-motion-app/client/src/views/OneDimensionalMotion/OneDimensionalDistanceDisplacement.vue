<template>

  <h1>Distance and Displacement in One Dimension</h1>
  <hr/>

  <div class="row g-5">
    <div class="col-md-6">
      <h3>Distance</h3>
      <p>Distance is the difference in the position of an object between two points in time.</p>
      <p>Imagine that at a given initial time, \( t_1 \), the particle is in a position \( p_1 = p(t_1) \). At a later time, \( t_2 \), the particle is in position \( p_2 = p(t_2) \). If we subtract the two positions, we will get the distance travelled by that particle between the initial time and the later time:</p>
      <p>$$ d_1 = p_2 - p_1 $$</p>
      <p>Consider another position of the particle given by a third time, \( p_3 = p(t_3) \). If we subtract this position from the previous position of \( p_2 \), we get the distance travelled by the particle between \( t_2 \) and \( t_3 \):</p>
      <p>$$ d_2 = p_3 - p_2 $$</p>
      <p>If we add the two distances travelled by the particle together from \( t_1 \) to \( t_2 \) and \( t_2 \) to \( t_3 \), we will get the total distance travelled by the particle between \( t_1 \) and \( t_3 \).</p>
      <p>$$ d_3 = d_1 + d_2 $$</p>


      <h3>Displacement</h3>
      <p>Displacement is defined by the distance from the initial position of the particle to the final position. In many cases, this is not the same as the total distance travelled by the particle.</p>
      <p>For example, consider the case where the particle were to travel from the origin to position \( p_2 \), and then travel back to the origin. Although the total distance travelled was double the distance from the origin to position \( p_2 \) - as the particle had to travel to \( p_2 \) and back from the origin - the total displacement was actually zero, since the particle ended up where it started at the end.</p>



      <h3>Position-Time Graph</h3>
      <p>When we plot the position function of a particle on a line chart, where the x-axis represents time, and the y-axis represents the position of the particle with respect to the origin, we can see how the position of the particle with respect to the origin changes with time.</p>
      <p>The following chart shows the position of a particle with respect to the origin at a given time. As time increases, we see that the position of the particle changes at each point in time.</p>

      <p>Notice that at 10 seconds, the position of the particle is back at the origin. The total displacement of the particle is considered zero, even though the particle had travelled some distance before arriving there.</p>
      <p>If we know what \( p(t) \) is as a function, then we know everything we need to know about the motion of the particle, as we will see in later sections.</p>
      <div class="col-sm-2"></div>


    </div>
    <div class="col-md-6">
      <div class="d-flex justify-content-center" id="p5Canvas1"></div>
    </div>
  </div>

</template>

<script>
import P5 from 'p5' // Package from npm

export default {
  mounted() {

    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);

    const script1 = p5 => {
      // this class describes the properties of a single particle.
      class Particle {
      // setting the co-ordinates, radius and the
      // speed of a particle in both the co-ordinates axes.
        constructor(){
          this.x = 0;
          this.y = p5.height / 2;
          this.r = 20;
          this.xSpeed = 1;
          this.ySpeed = 0;
        }

      // creation of a particle.
        createParticle() {
          p5.noStroke();
          p5.fill('black');
          p5.circle(this.x,this.y,this.r);
        }

      // setting the particle in motion.
        moveParticle() {

          p5.textSize(32);
          p5.text( 'p1', 0, 275);
          p5.textSize(32);
          p5.text( 'p2', 185, 275);
          p5.textSize(32);
          p5.text( 'p3', 285, 275);

          p5.textSize(24);
          p5.text( 'd1', 215, 165);
          p5.textSize(24);
          p5.text( 'd2', 315, 125);
          p5.textSize(24);
          p5.text( 'd3', 315, 90);


          if(this.x > p5.width - 100) {
            this.x = 0;
          }

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
        p5.background('0');
        for(let i = 0;i<particles.length;i++) {
          particles[i].createParticle();
          particles[i].moveParticle();
        }


        p5.stroke(0, 0, 0);
        p5.line(0, p5.height * 0.4, 200, p5.height * 0.4);

        p5.stroke(0, 0, 0);
        p5.line(200, p5.height * 0.3, 300, p5.height * 0.3);

        p5.stroke(0, 0, 0);
        p5.line(0, p5.height * 0.2, 300, p5.height * 0.2);


        p5.stroke(0, 0, 0);
        p5.line(0, p5.height * 0.5, p5.width, p5.height * 0.5);

        p5.stroke(0, 0, 0);
        p5.line(1, 175, 1, 225);

        p5.stroke(0, 0, 0);
        p5.line(p5.height * 0.25, 175, p5.height * 0.25, 225);

        p5.stroke(0, 0, 0);
        p5.line(p5.height * 0.5, 175, p5.height * 0.5, 225);

        p5.stroke(0, 0, 0);
        p5.line(p5.height * 0.75, 175, p5.height * 0.75, 225);

        p5.stroke(0, 0, 0);
        p5.line(p5.height - 1, 175, p5.height - 1, 225);
      }
    }
    const p5canvas1 = new P5(script1, 'p5Canvas1');


  }
}
</script>
