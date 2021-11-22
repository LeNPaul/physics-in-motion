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
      <router-view/>
    </main>
    <footer class="pt-5 my-5 text-muted border-top">
      Physics in Motion &middot; &copy; 2021
    </footer>
  </div>
</template>

<style>
</style>
