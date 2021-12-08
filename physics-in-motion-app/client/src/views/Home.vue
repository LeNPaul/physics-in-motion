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
      <div class="message d-flex justify-content-center">
        {{message}}
      </div>
    </div>
  </div>
</template>

<script>
if (process.browser) {
  var radar = require('@/assets/js/Spring.js')
}
export default {
  data() {
    return {
      message: "Hooke Spring"
    }
  },
  mounted() {
    const P5 = require('p5')
    new P5(radar.main)
    // NOTE: p5.jsからのコールバックを受け取る
    radar.setDelegate(this.callbackOnP5);
  },
  methods: {
    callbackOnP5: function(timeStr) {
      this.message = timeStr;
    }
  }
}
</script>
