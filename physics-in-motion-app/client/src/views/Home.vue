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

      <hr class="col-3 col-md-2 mb-5">

      <div class="row g-5">
        <div class="col-md-6">
          <h2>Starter projects</h2>
          <p>Ready to beyond the starter template? Check out these open source projects that you can quickly duplicate to a new GitHub repository.</p>
          <ul class="icon-list">
            <li><a href="https://github.com/twbs/bootstrap-npm-starter" rel="noopener" target="_blank">Bootstrap npm starter</a></li>
            <li class="text-muted">Bootstrap Parcel starter (coming soon!)</li>
          </ul>
        </div>

        <div class="col-md-6">
          <h2>Guides</h2>
          <p>Read more detailed instructions and documentation on using or contributing to Bootstrap.</p>
          <ul class="icon-list">
            <li><a href="/docs/5.1/getting-started/introduction/">Bootstrap quick start guide</a></li>
            <li><a href="/docs/5.1/getting-started/webpack/">Bootstrap Webpack guide</a></li>
            <li><a href="/docs/5.1/getting-started/parcel/">Bootstrap Parcel guide</a></li>
            <li><a href="/docs/5.1/getting-started/contribute/">Contributing to Bootstrap</a></li>
          </ul>
        </div>
      </div>
    </main>
    <footer class="pt-5 my-5 text-muted border-top">
      Physics in Motion &middot; &copy; 2021
    </footer>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>
