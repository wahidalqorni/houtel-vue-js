<template>
  <div id="SearchList">
    <div class="containter">
      <!-- awal bagian tulisan -->
      <div class="tulisan">
        <div class="row justify-content-center">
          <div class="col-lg-4"></div>
          <div class="col-lg-4">
            <h1>Temukan Hotel yang anda impikan!</h1>
          </div>
          <div class="col-lg-4"></div>
        </div>
      </div>
      <!-- akhir bagian tulisan -->

      <!-- awal bagian search -->
      <div class="search">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="input-group mb-3 shadow">
              <input
                type="text"
                class="form-control"
                placeholder="Cari Hotel Impianmu"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <span class="input-group-text" id="basic-addon1"
                ><img src="../assets/search.png" alt="" class="ic_search"
              /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name : "SearchList"
};
</script>

<style>
</style>