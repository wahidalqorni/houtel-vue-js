<template>
  <div id="HotelRec">
    <div class="container">
      <!-- bagian judul -->
      <div class="row justify-content-between mt-5">
        <div class="col-lg-4"></div>
        <div class="col-lg-4 text-center rekomendasi mb-3">
          <h5>Rekomendasi Hotel</h5>
        </div>
        <div class="col-lg-4 text-end">
          <router-link to="ListView" href="">Lihat Semua</router-link>
        </div>
      </div>
      <!-- akhir bagian judul -->

      <!-- card -->
      <div class="row justify-content-between mt-4">

        <div class="col-lg-4" v-for="hotel in listhotel.hotel" :key="hotel.id">
          <div class="card shadow" style="width: 100%">
            <img :src="'http://127.0.0.1:8000/storage/' + hotel.gambar " class="img" alt="..." />
            <div class="card-body">
              <h5 class="Hotel Amaris">{{ hotel.nama_hotel }}</h5>
              <p class="Harga Amaris">Rp.{{ Number(hotel.harga).toLocaleString() }},-/malam</p>
              <div class="row">
                <div class="col text-start">
                  <router-link to="PemesananView" href="#" class="btn btn-primary">Pesan Sekarang</router-link>
                </div>
                <div class="col text-end mt-2">
                  <img src="../assets/Star1.png" alt="" />
                  <span>{{ hotel.rating }} Rb</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <!-- akhir bagian card -->
    </div>
  </div>
</template>

<script>
// import axios => sebagai pengkoneksi dari vue ke API
import axios from 'axios'

export default {
  name: "HotelRec",

  // SIAPKAN VARIABEL UNTUK MENAMPUNG RESPONSE API DAN LIST DATA HOTEL
  data() {
    return {
      response : "", // untuk menampung output responsenya
      listhotel : "", // untuk menampung data list hotel hasil dari response API
    }
  },

  // siapkan method/fungsi
  methods: {

    // fungsi utk mengeset data yg didapatkan dari API
    setData(dataAPI){
      // mengubah isi variabel listhotel, yg tadinya kosong jd ada isinya (data response dari API)
      this.listhotel = dataAPI
    },

    // fungsi untuk request ke API
    async getRekomendasiHotel(){
      try {
        // isikan variabel response yg ada di data tadi dengan request API
        this.response = await axios.get("http://127.0.0.1:8000/api/rekomendasi-hotel")

        // cetak hasil response
        // console.log(this.response.data);

        // panggil function setData(dataAPI)
        this.setData(this.response.data)

      } catch (error) {
        console.log(error)
      }
    }

  },

  // panggil mounted() => function yg berfungsi menjalankan fungsi apa saat halaman pertama kali dibuka
  mounted() {
    this.getRekomendasiHotel()
  }

};
</script>

<style>
</style>