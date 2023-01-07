<template>
  <div id="LatihanComp">
    <p>latihan dasar HTML</p>
    <h1>Berikut adalah contoh hotel</h1>
    
    <button type="button" class="btn btn-primary">Primary</button>

    <div class="Arista"> -->
      <!-- Memanggil gambar -->
      <img src="../assets/arista.png" />

      <h2><b>Hotel Arista</b></h2>
      <p>Hotel Arista merupakan hotel bintang 4</p> -->

      <!-- Menautkan Link -->
      <p>
        <a href="https://www.aristapalembang.com/"> Klik disini </a>
      </p>
    </div> -->

    <div class="Alts">
      <!-- Tautan Link di Dalam Gambar -->
      <a href="https://www.thealts.com/"> <img src="../assets/alts.png" /></a>

      <h2>Hotel ALTS</h2>
      <p>Hotel ALTS merupakan hotel bintang 4</p>

      <!-- Membuat Button -->
      <p>
        <a href="https://www.thealts.com/room/">
          <button>detail hotel</button></a
        >
      </p>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "LatihanComp",
};
</script>

<style>
/* CSS Internal */

</style>