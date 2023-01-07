<template>
  <div id="PesananTab">
    <div class="container">

      <div class="row justify-content-betwen">
        <div class="col gambar">
          <img :src="'http://127.0.0.1:8000/storage/' + hotel.gambar " alt="" />
        </div>
        <div class="col">
          <div class="row">
            <div class="col hotel">
              <h1>{{ hotel.nama_hotel }}</h1>
              <div class="row">
                <div class="col">
                  <h3>{{hotel.alamat}} - {{hotel.nama_kota}}</h3>
                  <div class="row">
                    <div class="col bintang">
                      <img src="../assets/Star1.png" alt="" />
                      <img class="geser" src="../assets/Star1.png" alt="" />
                      <img class="geser" src="../assets/Star1.png" alt="" />
                      <img class="geser" src="../assets/Star1.png" alt="" />
                      <img class="geser" src="../assets/Star1.png" alt="" />
                      <span>4,5 Rb rate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col"></div>
      </div>

      <div class="row">
        <div class="col">
          <h1>Masukan Rincian Pesanan</h1>
          <div class="row">
            <div class="col">
              <form>
                <!-- form nama -->
                <div class="mb-3">
                  <label class="form-label">Nama</label>
                  <input type="name" class="form-control" id="inputName" />
                </div>
                <!-- akhir form nama -->

                <!-- form email -->
                <div class="mb-3">
                  <label class="form-label">Email</label>
                  <input type="email" class="form-control" id="inputEmail" />
                </div>
                <!-- Akhir form email -->

                <!-- form telefon -->
                <div class="mb-3">
                  <label class="form-label">Telepon</label>
                  <input type="number" class="form-control" id="inputNumber" />
                </div>
                <!-- Akhir form telefon -->
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// import axios => sebagai pengkoneksi dari vue ke API
import axios from "axios";

export default {

// siapkan data yg dibuthkan untuk memanggil data dari API
  data() {
    return {
      response: '',
      hotel: '',
    }
  },

  methods:{
     // fungsi utk menset data hotel
    setDataHotel(dataAPI) {
      // isinya iyalah mengubah data hotel yg tadinya "" menjadi data yg didapatkan dari API
      this.hotel = dataAPI
    },

    // panggil/hubungkan ke API yg fungsinya utk menampilkan data detail product
    async detailHotel() {
      try {
        this.response = await axios.get(
          'http://127.0.0.1:8000/api/detail-hotel/' + this.$route.params.id,
        )

        // masukkan data yg di dapat dari response yg dihubungkan ke url API ke dalam setDataProduct & setDataMerk
        // setDataProduct(dataAPI)
        this.setDataHotel(this.response.data.hotel)

        // mengecek hasil dari this.response
        console.log(this.response)
      } catch (error) {
        console.log(error)
      }
    },
  },

  mounted() {
    this.detailHotel()
  },

};
</script>

<style>
</style>