<template>

  <h1>Speed and Velocity in One Dimension</h1>
  <hr/>

  <div class="row g-5">
    <div class="col-md-6">

      <p>In the previous sections on <router-link to="/one-dimensional-position" class="text-dark">Position</router-link>, <router-link to="/one-dimensional-distance-displacement" class="text-dark">Distance, and Displacement</router-link>, we explored how coordinate systems are used to describe the position of an object in space at a given time, and were introduced to the position function. Now, we would like to go beyond that and begin describing the behaviour of that object as it moves through space and time.</p>

      <h3>Speed</h3>
      <p>Naturally, as an object moves through space, we would like to know the distance that the object moves over a period of time. In other words, we would like to know the rate at which its position changes over time. This is known as the <i>speed</i> of the object.</p>

      <p>In order to calculate the speed of an object, we take the total distance travelled by that object and divide it by the time that it took for the object to travel that distance:</p>
      <p>$$ speed = \frac{p_2 - p_1}{t_2 - t_1} = \frac{ \Delta p }{ \Delta t } $$</p>
      <p>The resulting value tells us exactly how far an object moves per unit of time.</p>

      <h3>Average and Constant Speed</h3>
      <p>Notice above that we did not capture any information regarding the speed of the object at any specific point in time. As the object moves through space, it is possible for the speed of the object to change. It is also possible for the speed of the object to be constant. What we had captured above was the <i>average speed</i> of the object.</p>
      <p>When we talk about average speed, we only know the total distance travelled, and the time that it took to travel that distance. An object may have <i>constant speed</i> throughout that time interval, or variable speed, and it is possible for two different objects to have the same average speed, but different speeds throughout the periods of time that they were travelling.</p>

    </div>
  </div>



  <div class="row g-5">
    <div class="col-md-6">

<!--

Show two lines, one with faster velocity and show that one reaches 20 units faster
Why we need to know speed - to know how fast an object is moving - let's us compare how fast two objects are moving

Mention that above example was constant speed - the speed remained the same, and that is why the line is straight.
For average vs. constant, have one take variable speed path, and the other take constant speed path, but arrive at the same time - the calculation returns the same speed

-->

<!--


In the graph below, the initial position at time 0 is 0. If we take the final position to be at time 10, we see that the position is 20. The speed of the object is calculated below:</p>

<p>$$ speed = \frac{p_2 - p_1}{t_2 - t_1} = \frac{20 - 0}{10 - 0} = 2 \ \frac{m}{s} $$</p>

</div>
</div>

<div class="row g-5">
<div class="col-md-6">
<div class="d-flex justify-content-center"><canvas id="myChart1" width="400" height="400"></canvas></div>




      <p>For example, an object that is moving at a speed of</p>
      <p>$$ 10 \ \frac{m}{s} $$</p>
      <p>will move 10 metres every second.</p>
<p>The value of speed will always be a positive number.</p>


      <h3>Instantaneous Speed</h3>
      <p>In order to capture the full picture of how an object moves from its starting position to its final position within a period of time, we consider what we call <i>instantaneous velocity</i>, which is a snapshot of what an object's speed is at any specific point in time.</p>
      <p>In the case of constant speed, the object's instantaneous speed will be the same at every point in time. In the case of variable speed, the object's instantaneous speed may be different at different points in time. If both of the above objects travel the same distance at the time same, their average speed will be the same, despite having different instantaneous speeds throughout the periods of time that they were travelling.</p>
      <p>Through instantaneous speeds, we are able to capture a more complete picture of an object's displacement in time.</p>
      <h3>Average and Constant Velocity</h3>
      <p>When we refer only to the speed of an object, we do not include any information on the direction in which the object is travelling. When we know both the speed and direction of an object, we call this value the <i>velocity</i> of the object.</p>
      <p>Unlike speed, values of velocity can be either positive or negative. In one dimension, this tells us the direction that the object is travelling in, as there are only two directions in which the object may move in. We consider positive velocities one direction, and negative velocities the opposite direction. The magnitude of velocity is equal to speed.</p>
      <p>Average velocity is the total dispacement of an object divided by the interval of time that it took for the object to be displaced:</p>
      <p>$$ v_{average} = \frac{p_2 - p_1}{t_2 - t_1} = \frac{\Delta p}{\Delta t} $$</p>
      <p>Similar to average speed, it is possible for the velocity of an object to be either constant, or variable through the time interval that is used to calculate its average velocity.</p>
      <p>When we graph the position function of an object moving with constant velocity, it will appear as a straight line, and the slope will be equal to the average velocity between two points:</p><canvas id="static-velocity-line-chart" width="800" height="500"></canvas>
      <p>When we graph the position function of an object moving with variable velocity, it will appear as a curve on the graph. However, if the starting and ending points are the same as another object moving with constant velocity, then their average velocities will be the same:</p><canvas id="variable-velocity-line-chart" width="800" height="500"></canvas>
      <h3>Instantaneous Velocity</h3>
      <p>Similar to instantaneous speed, instantaneous velocity is a snapshot of what an object's velocity is at a specific point in time.</p>
      <p>More formally, the velocity of an object is defined as the derivative of its position function:</p>
      <p>$$ v(t) = \lim_{\Delta t \to 0} \frac{\Delta p}{\Delta t} = \frac{d p(t)}{dt} $$</p>
      <p>This describes how fast something moves, and in which direction it is moving at any point in time. On a graph, the instantaneous velocity of an object is equal to the tangent of the position function at a point in time.</p>
-->

    </div>
  </div>

</template>

<script>
import P5 from 'p5' // Package from npm

export default {
  mounted() {

    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);

    const myChart1 = new Chart(document.getElementById('myChart1'), {
      type: 'line',
      data: {
        labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [{
            label: 'Cartesian Coordinate System',
            data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
          }]
      },
      options: {
        layout: {
          padding: 30
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Time'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Position'
            }
          }
        },
        plugins: {
          title: {
            display: true,
            text: 'Position as a Function of Time'
          },
          legend: {
            display: false
          }
        }
      }
    });

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

          if(this.x >= 100 ) {
            p5.textSize(32);
            p5.text( (this.x / 100).toPrecision(2), 0, 275);
          }
          if(this.x < 100 && this.x > 10) {
            p5.textSize(32);
            p5.text( (this.x / 100).toPrecision(1), 0, 275);
          }
          if(this.x <= 10) {
            p5.textSize(32);
            p5.text( '0.0', 0, 275);
          }

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
        p5.background('0');
        for(let i = 0;i<particles.length;i++) {
          particles[i].createParticle();
          particles[i].moveParticle();
        }

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
