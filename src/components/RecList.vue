<template>
  <div id="RecList">
    <div class="bg-banner">

      <!-- Awal Judul -->
      <div class="row text-center">
        <div class="col-lg-12">
          <h5>Rekomendasi Hotel Top Palembang</h5>
        </div>
      </div>
    </div>
    <!-- Akhir Judul -->

    <!-- Awal Card -->
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="row justify-content-between mt-4">
            <div class="col-lg-4">
              <div class="card shadow" style="width: 100%">
                <img src="../assets/amaris.png" class="img" alt="..." />
                <div class="card-body">
                  <h5 class="Hotel Amaris">Amaris Hotel Palembang</h5>
                  <p class="Harga Amaris">Rp.300k,-/malam</p>
                  <div class="row">
                    <div class="col text-start">
                      <router-link to="PemesananView" href="#" class="btn btn-primary">Pesan Sekarang</router-link>
                    </div>
                    <div class="col text-end mt-2">
                      <img src="../assets/Star1.png" alt="" />
                      <span>4.6 Rb</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card shadow" style="width: 100%">
                <img src="../assets/arista.png" class="img" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Arista Hotel Palembang</h5>
                  <p class="card-text">Rp.300k,-/malam</p>
                  <div class="row">
                    <div class="col text-start">
                      <router-link to="PemesananView" href="#" class="btn btn-primary">Pesan Sekarang</router-link>
                    </div>
                    <div class="col text-end mt-2">
                      <img src="../assets/Star1.png" alt="" />
                      <span>4.6 Rb</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card shadow" style="width: 100%">
                <img src="../assets/alts.png" class="img" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">The Alts Hotel Palembang</h5>
                  <p class="card-text">Rp.300k,-/malam</p>
                  <div class="row">
                    <div class="col text-start">
                      <router-link to="PemesananView" href="#" class="btn btn-primary">Pesan Sekarang</router-link>
                    </div>
                    <div class="col text-end mt-2">
                      <img src="../assets/Star1.png" alt="" />
                      <span>4.6 Rb</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="row justify-content-between mt-4">
                <div class="col-lg-4">
                  <div class="card shadow" style="width: 100%">
                    <img src="../assets/amaris.png" class="img" alt="..." />
                    <div class="card-body">
                      <h5 class="Hotel Amaris">Amaris Hotel Palembang</h5>
                      <p class="Harga Amaris">Rp.300k,-/malam</p>
                      <div class="row">
                        <div class="col text-start">
                          <router-link to="PemesananView" href="#" class="btn btn-primary">Pesan Sekarang</router-link>
                        </div>
                        <div class="col text-end mt-2">
                          <img src="../assets/Star1.png" alt="" />
                          <span>4.6 Rb</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="card shadow" style="width: 100%">
                    <img src="../assets/arista.png" class="img" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Arista Hotel Palembang</h5>
                      <p class="card-text">Rp.300k,-/malam</p>
                      <div class="row">
                        <div class="col text-start">
                          <router-link to="PemesananView" href="#" class="btn btn-primary">Pesan Sekarang</router-link>
                        </div>
                        <div class="col text-end mt-2">
                          <img src="../assets/Star1.png" alt="" />
                          <span>4.6 Rb</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="card shadow" style="width: 100%">
                    <img src="../assets/alts.png" class="img" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">The Alts Hotel Palembang</h5>
                      <p class="card-text">Rp.300k,-/malam</p>
                      <div class="row">
                        <div class="col text-start">
                          <router-link to="PemesananView" href="#" class="btn btn-primary">Pesan Sekarang</router-link>
                        </div>
                        <div class="col text-end mt-2">
                          <img src="../assets/Star1.png" alt="" />
                          <span>4.6 Rb</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Akhir bagian card -->
    </div>
  </div>
</template>

<script>
export default {
  name: "RecList",
};
</script>

<style>
#RecList .bg-banner {
  padding-top: 20px;
  width: 100%;
  height: 68px;
  background-color: #bcdefe;
  color: #39a0ff;
}
</style>