<template>
  <div id="CityRec">
    <div class="container">
      <!-- bagian judul -->
      <div class="row justify-content-between">
        <div class="col-lg-4"></div>
        <div class="col-lg-4 text-center rekomendasi">
          <h5>Rekomendasi Hotel Berdasarkan Kota</h5>
        </div>
        <div class="col-lg-4 text-end">
          <router-link to="ListView" href="">Lihat Semua</router-link>
        </div>
      </div>
      <!-- akhir bagian judul -->

      <!-- Kota -->
      <div class="row kota mt-5">

        <div class="col-lg-3 mt-2" v-for="kota in listkota.kota" :key="kota.id">
          <div class="bg-KotaSatu shadow" :style="{ 'background-image' : 'url(http://localhost:8000/storage/' + kota.gambar + ')'  }" >
            <div class="row">
              <div class="col Kota">
                <h3>{{ kota.nama_kota }}</h3>
                <h5>110+ akomodasi</h5>
              </div>
            </div>
          </div>
        </div>

      </div>
      <!-- Akhir bagian Kota -->
    </div>
  </div>
</template>

<script>
// import axios => sebagai pengkoneksi dari vue ke API
import axios from "axios";

export default {
  name: "CityRec",

  // SIAPKAN VARIABEL UNTUK MENAMPUNG RESPONSE API DAN LIST DATA HOTEL
  data() {
    return {
      response: "", // untuk menampung output responsenya
      listkota: "", // untuk menampung data list kota hasil dari response API
    };
  },

  // siapkan method/fungsi
  methods: {
    // fungsi utk mengeset data yg didapatkan dari API
    setData(dataAPI) {
      // mengubah isi variabel listkota, yg tadinya kosong jd ada isinya (data response dari API)
      this.listkota = dataAPI;
    },

    // fungsi untuk request ke API
    async getKota() {
      try {
        // isikan variabel response yg ada di data tadi dengan request API
        this.response = await axios.get(
          "http://127.0.0.1:8000/api/list-kota"
        );

        // cetak hasil response
        console.log(this.response.data);

        // panggil function setData(dataAPI)
        this.setData(this.response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },

  // panggil mounted() => function yg berfungsi menjalankan fungsi apa saat halaman pertama kali dibuka
  mounted() {
    this.getKota();
  },
};
</script>

<style>
#CityRec .bg-KotaSatu {
  /* background-image: url("/src/assets/palembang.png"); */
  width: 100%;
  height: auto;
  background-size: cover;
  border-radius: 15px;
  margin-bottom: 20px;
}
#CityRec .bg-KotaDua {
  background-image: url("/src/assets/yogya.png");
  width: 100%;
  height: auto;
  background-size: cover;
  border-radius: 15px;
  margin-bottom: 20px;
}
#CityRec .bg-KotaTiga {
  background-image: url("/src/assets/denpasar.png");
  width: 100%;
  height: auto;
  background-size: cover;
  border-radius: 15px;
  margin-bottom: 20px;
}
#CityRec .bg-KotaEmpat {
  background-image: url("/src/assets/jakarta.png");
  width: 100%;
  height: auto;
  background-size: cover;
  border-radius: 15px;
  margin-bottom: 20px;
}
</style>