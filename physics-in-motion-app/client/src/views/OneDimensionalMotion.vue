<template>

  <h1>Position in One Dimension</h1>
  <hr/>

  <div class="row g-5">
    <div class="col-md-6">
      <p>In order to begin our study of motion, we must first consider the tools that we will be using to describe the objects that we are studying.</p>
      <h3>Describing Objects on an Axes</h3>
      <p>To more easily describe the motion of objects that we are studying, we simplfiy the object by imagining that the object - regardless of its size or shape - is a tiny particle that we treat as a single point.</p>
      <p>For describing the position of a particle in one dimension, we imagine that the particle is sitting in a coordinate system, where the position of the particle can be anywhere along a line that we call an axis, with respect to an arbitrary point that we call the origin.</p>
      <p>The origin is considered the zero point, and the number of units from the origin to the object on the axis is used to represent the position of that point on the coordinate system.</p>
    </div>
    <div class="col-md-6">
      <div class="d-flex justify-content-center" id="p5Canvas1"></div>
    </div>
  </div>

  <div class="row g-5">
    <div class="col-md-6">
      <h3>Coordinate Systems</h3>
      <p>In physics, the <a href="https://en.wikipedia.org/wiki/Cartesian_coordinate_system" class="text-dark">Cartesian coordinate system</a> is used to specify the position of objects in space at a given time. The x-axis typically represents time, while the y-axis represents position with respect to the origin. At any point in time along the x-axis, there is a corresponding point on the y-axis that represents the distance of that object from the origin.</p>
      <p>The following graph represents an object moving away from the origin as time increases. At time 5, we see that position from the origin is 5, and at time 10, the position from the origin is 10.</p>
    </div>
  </div>
  <div class="row g-5">
    <div class="col-md-6 mx-auto">
      <div class="d-flex justify-content-center"><canvas id="myChart1" width="400" height="400"></canvas></div>
    </div>
  </div>

  <div class="row g-5">
    <div class="col-md-6">
      <h3>Graphing the Position of an Object</h3>
      <p>The following chart on the left describes the motion of the object on the right. Between 0 - 4 time units, the object is moving away from the origin until it reaches a posiiton of 4 units to the right. Between 4 - 8 time units, the object moves towards the origin, and we see the graph slopes downwards until it reaches position 0.</p>
    </div>
  </div>

  <div class="row g-5">
    <div class="col-md-6">
      <div class="d-flex justify-content-center"><canvas id="myChart2" width="400" height="400"></canvas></div>
    </div>
    <div class="col-md-6">
      <div class="d-flex justify-content-center" id="p5Canvas2"></div>
    </div>
  </div>

  <div class="row g-5">
    <div class="col-md-6">
      <h3>The Position Function</h3>
      <p>Tying this all together, we can describe the position of a particle in one dimension at a given time using a single function - called the position function - that we represent with the symbol \( p(t) \), where \( t \) refers to the time, and \( p \) refers to the position of the particle relative to the origin at the given time.</p>
      <p>$$ p(t) = position $$</p>
      <p>Looking at the above chart, we can come up with an equation that can be used to describe the motion of the object.</p>
      <p>Between time 0 - 4, we can use the following equation:</p>
      <p>$$ p(t) = t $$</p>
      <p>Between time 4 - 8, we can use the following equation:</p>
      <p>$$ p(t) = 8 - t $$</p>
      <p>We can validate this ourselves by substituting \( t \) into any of the above equations, using the correct function for a given time, and see that we get the correct position on the graph.</p>
    </div>
  </div>


<!--

  <h3>Distance</h3>
  <p>As the value of time that is passed into the position function changes, the outputted position of the particle will change as well, to reflect where the particle is at that given time.</p>
  <p>Imagine that at a given initial time, \( t_1 \), the particle is in a position \( p_1 = p(t_1) \). At a later time, \( t_2 \), the particle is in position \( p_2 = p(t_2) \). If we subtract the two positions, we will get the distance travelled by that particle between the initial time and the later time:</p>
  <p>$$ d_1 = p_2 - p_1 $$</p>
  <p>Consider another position of the particle given by a third time, \( p_3 = p(t_3) \). If we subtract this position from the previous position of \( p_2 \), we get the distance travelled by the particle between \( t_2 \) and \( t_3 \):</p>
  <p>$$ d_2 = p_3 - p_2 $$</p>
  <p>If we add the two distances travelled by the particle together from \( t_1 \) to \( t_2 \) and \( t_2 \) to \( t_3 \), we will get the total distance travelled by the particle between \( t_1 \) and \( t_3 \).</p>
  <h3>Displacement</h3>
  <p>Displacement is defined by the distance from the initial position of the particle to the final position. In many cases, this is not the same as the total distance travelled by the particle.</p>
  <p>For example, consider the case where the particle were to travel from the origin to position \( p_2 \), and then travel back to the origin. Although the total distance travelled was double the distance from the origin to position \( p_2 \) - as the particle had to travel to \( p_2 \) and back from the origin - the total displacement was actually zero, since the particle ended up where it started at the end.</p>
  <h3>Position-Time Graph</h3>
  <p>When we plot the position function of a particle on a line chart, where the x-axis represents time, and the y-axis represents the position of the particle with respect to the origin, we can see how the position of the particle with respect to the origin changes with time.</p>
  <p>The following chart shows the position of a particle with respect to the origin at a given time. As time increases, we see that the position of the particle changes at each point in time.</p><canvas id="static-position-line-chart" width="800" height="500"></canvas>
  <p>Notice that at 10 seconds, the position of the particle is back at the origin. The total displacement of the particle is considered zero, even though the particle had travelled some distance before arriving there.</p>
  <p>If we know what \( p(t) \) is as a function, then we know everything we need to know about the motion of the particle, as we will see in later sections.</p>
  <div class="col-sm-2"></div>

-->

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
          data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
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

    const myChart2 = new Chart(document.getElementById('myChart2'), {
      type: 'line',
      data: {
        labels: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        datasets: [{
          label: 'Cartesian Coordinate System',
          data: [0, 1, 2, 3, 4, 3, 2, 1, 0],
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

          p5.textSize(32);
          p5.text( this.x / 100, 0, 275);

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

    const script2 = p5 => {
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
          p5.text( this.x / 100, 0, 275);

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
    const p5canvas2 = new P5(script2, 'p5Canvas2');

  }
}
</script>
