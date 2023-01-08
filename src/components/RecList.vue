<template>
  <div id="RecList">
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
              v-model="keyword"
              @keyup="getListHotel"
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

    <div class="bg-banner">
      <!-- Awal Judul -->
      <div class="row text-center">
        <div class="col-lg-12">
          <h5>List Hotel Top Palembang</h5>
        </div>
      </div>
    </div>
    <!-- Akhir Judul -->

    <!-- Awal Card -->
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="row justify-content-between mt-4">

            <div class="col-lg-4" v-for="hotel in listhotel.hotel" :key="hotel.id">
              <div class="card shadow mb-4" style="width: 100%">
                <img :src="'http://127.0.0.1:8000/storage/' + hotel.gambar " class="img" style="height: 350px; width: 100%" />
                <div class="card-body">
                  <h5 class="Hotel Amaris">{{ hotel.nama_hotel }}</h5>
                  <p class="Harga Amaris">Rp.{{ Number(hotel.harga).toLocaleString() }},-/malam</p>
                  <div class="row">
                    <div class="col text-start">
                      
                      <a :href="'#PemesananView/'+hotel.id" class="btn btn-primary">Pesan Sekarang</a>
                      <!-- <router-link
                        :to="'/PemesananView/' + hotel.id "
                        class="btn btn-primary"
                        >Pesan Sekarang</router-link
                      > -->
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
      <!-- Akhir bagian card -->
    </div>
  </div>
</template>

<script>
// import axios => sebagai pengkoneksi dari vue ke API
import axios from "axios";

export default {
  name: "RecList",

  // SIAPKAN VARIABEL UNTUK MENAMPUNG RESPONSE API DAN LIST DATA HOTEL
  data() {
    return {
      keyword: "",
      response: "", // untuk menampung output responsenya
      listhotel: "", // untuk menampung data list hotel hasil dari response API
    };
  },

  // siapkan method/fungsi
  methods: {
    // fungsi utk mengeset data yg didapatkan dari API
    setData(dataAPI) {
      // mengubah isi variabel listhotel, yg tadinya kosong jd ada isinya (data response dari API)
      this.listhotel = dataAPI;
    },

    // fungsi untuk request ke API
    async getListHotel() {
      try {
        // isikan variabel response yg ada di data tadi dengan request API

        // jika ada inputan di kolom keyword
        if (this.keyword == "") {
          this.response = await axios.get(
            "http://127.0.0.1:8000/api/list-hotel"
          );
        } else {
          this.response = await axios.get(
            "http://127.0.0.1:8000/api/search-hotel?keyword=" + this.keyword
          );
        }

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
    this.getListHotel();
  },
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