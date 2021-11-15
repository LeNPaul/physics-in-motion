<template>
  <div class="col-lg-8 mx-auto p-3 py-md-5">

    <div class="container">
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
          <span class="fs-4">Physics in Motion</span>
        </a>
        <ul class="nav nav-pills">
          <router-link to="/about" class="text-decoration-none"><li class="nav-item"><a href="#" class="nav-link text-dark">About</a></li></router-link>
        </ul>
      </header>
    </div>

    <main>
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
        </div>
      </div>
    </main>
    <footer class="pt-5 my-5 text-muted border-top">
      Physics in Motion &middot; &copy; 2021
    </footer>
  </div>
</template>

<script>
import P5 from 'p5' // Package from npm

export default {
  name: 'Home',
  mounted() {
    const script = function (p5) {
      var speed = 2;
      var posX = 0;
      // NOTE: Set up is here
      p5.setup = _ => {
        p5.createCanvas(500, 500).parent("p5Canvas");
        p5.ellipse(p5.width / 2, p5.height / 2, 500, 500);
      }
      // NOTE: Draw is here
      p5.draw = _ => {
        p5.background(0);
        const degree = p5.frameCount * 3;
        const y = p5.sin(p5.radians(degree)) * 50;
        p5.push();
        p5.translate(0, p5.height / 2);
        p5.ellipse(posX, y, 50, 50);
        p5.pop();
        posX += speed;

        if (posX > p5.width || posX < 0) {
          speed *= -1;
        }
      }
    }
    // NOTE: Use p5 as an instance mode
    const P5 = require('p5');
    new P5(script)
  }
}
</script>
