<template>
  <div id="BannerComp">
    <div class="container">
      <!-- bagian banner -->
      <div class="bg-banner mt-2">
        <div class="row">
          <div class="col-lg-4 mt-5 ms-5">
            <h1>Nikmati Liburan yang di impikan!</h1>
            <p class="mt-3">
              Booking hotel impian anda sekarang! Lebih mudah booking online
              dengan Houtel!
            </p>
            <div class="row">
              <div class="col mt-3">
                <router-link to="ListView" class="btn btn-primary me-3"
                  >Booking Sekarang</router-link
                >
                <router-link to="ListVIew " href="">Lihat Detail</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- akhir bagian banner -->

      <!-- bagian Pencarian -->
      <div class="pencarian">
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
      <!-- Akhir dari pencarian -->
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerComp",
};
</script>

<style>
#BannerComp .bg-banner {
  background-image: url("/src/assets/banner.png");
  width: 100%;
  background-size: cover;
  height: 350px;
  border-radius: 20px;
}
</style>