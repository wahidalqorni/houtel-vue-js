<template>
  <div id="HeaderList">
    <nav class="navbar navbar-expand-lg navbar-light bg-header">
      <div class="container">
        <a class="navbar-brand" href="#"><img src="../assets/logo.png" /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active me-2" aria-current="page" href="#">Beranda</a>
            <a class="nav-link me-2" href="#">Tentang kami</a>
            <a class="nav-link me-2" href="#">Tipe Kamar</a>
            <div class="btn btn-primary">Hubungi Kami</div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderList",
};
</script>

<style>
</style>