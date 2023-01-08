<template>
  <div id="PesananTab">
    <div class="container">
      <div class="row justify-content-between mt-4">
        <!--  -->
        <div class="row">
          <div class="col-lg-5">
            <img src="../assets/amaris.png" alt="" class="img-detail" />
          </div>
          <div class="col-lg-4 mt-4">
            <h1>
              <b>{{ hotel.nama_hotel }}</b>
            </h1>
            <p>{{ hotel.alamat }} - {{ hotel.nama_kota }}</p>
            <div class="row">
              <div class="col mt-2">
                <img class="ic_star" src="../assets/Star1.png" />
                <img class="ic_star" src="../assets/Star1.png" />
                <img class="ic_star" src="../assets/Star1.png" />
                <img class="ic_star" src="../assets/Star1.png" />
                <span><B>4.5 Rb rate</B></span>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col">
            <h3>Masukan Rincian Pemesanan</h3>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col">
            <h4>Nama</h4>
            <input
              type="name"
              v-model="nama_pemesan"
              class="form-control"
              id="inputName"
            />
          </div>
        </div>

        <div class="row mt-5">
          <div class="col">
            <h4>Email</h4>
            <input
              type="email"
              v-model="email_pemesan"
              class="form-control"
              id="inputEmail"
            />
          </div>
        </div>

        <div class="row mt-5">
          <div class="col">
            <h4>Telepon</h4>
            <input
              type="telepon"
              v-model="telepon_pemesan"
              class="form-control"
              id="inputNumber"
            />
          </div>
        </div>

        <div class="row">
          <div class="col-lg-5 mt-5">
            <h4>Pilih Metode Pembayaran</h4>
          </div>
        </div>
        <div class="row mt-5">
          <h5>Tipe Kamar</h5>
        </div>
        <div class="row">
          <div class="col-lg-3">
            <div class="input-group mb-3 shadow">
              <select
                class="form-select"
                v-model="tipe_kamar"
                id="inputGroupSelect01"
              >
                <option selected>Standar Double...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>

        <div class="row mt-3">
          <h5>Metode Pembayaran</h5>
          <div class="col-lg-3">
            <div class="input-group mb-3 shadow">
              <select
                class="form-select"
                v-model="metode_pembayaran"
                id="inputGroupSelect01"
              >
                <option value="Virtual Account" selected>
                  Virtual Account...
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>

          <div class="col-lg-2 mb-3">
            <img
              src="../assets/mandiri.png"
              width="100px"
              alt=""
              class="img-mandiri"
            />
          </div>
          <div class="col-lg-3 mb-3">
            <p><b>Mandiri Virtual Account</b></p>
            <p><b>90089181873817</b></p>
            <p><b>a.n Houtel Indah</b></p>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <button class="btn btn-primary" @click="postPemesanan()">
              Proses Pembayaran
            </button>
            <!-- <router-link to="/SuccesView" class="btn btn-primary"
                >Proses Pembayaran</router-link
              > -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PesananTab",

  data() {
    return {
      response: "",
      hotel: "",
      nama_pemesan: "",
      email_pemesan: "",
      telepon_pemesan: "",
      tipe_kamar: "",
      metode_pembayaran: "",
    };
  },

  methods: {
    setDataHotel(dataAPI) {
      this.hotel = dataAPI;
    },

    async detailHotel() {
      try {
        this.response = await axios.get(
          "http://127.0.0.1:8000/api/detail-hotel/" + this.$route.params.id
        ); // variabel data request ke API

        // console.log(this.response.data); //cetak hasil response

        this.setDataHotel(this.response.data.hotel);

        console.log(this.response);
      } catch (error) {
        console.log(error);
      }
    },

    async postPemesanan() {
      try {
        if (
          this.nama_pemesan == "" ||
          this.email_pemesan == "" ||
          this.telepon_pemesan == "" ||
          this.tipe_kamar == "" ||
          this.metode_pembayaran == ""
        ) {
          window.alert("Isi semua data!");
        } else {
          this.response = await axios.post(
            "http://127.0.0.1:8000/api/post-pemesanan",
            {
              id_hotel: this.$route.params.id, // ambil id dari parameter
              nama_pemesan: this.nama_pemesan,
              telepon_pemesan: this.telepon_pemesan,
              email_pemesan: this.email_pemesan,
              tipe_kamar: this.tipe_kamar,
              metode_pembayaran: this.metode_pembayaran,
            }
          );

          if (this.response.data.success == true) {
            // success dapat dari hasi response ke API
            this.$router.push({ path: "/SuksesView" });
          } else {
            window.alert(this.response.data.message); // message dapat dari hasi response ke API
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
  },

  mounted() {
    this.detailHotel();
  },
};
</script>

<style>
</style>