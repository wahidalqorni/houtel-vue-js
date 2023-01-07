<template>
  <div id="MetodePembayaran">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>Pilih Metode Pembayaran</h1>
          <div class="row">
            <div class="col">
              <p>Tipe Kamar</p>
              <form>
                <fieldset enabled>
                  <div class="mb-3">
                    <select id="enalbledSelect" class="form-select">
                      <option>Standard Single</option>
                      <option>Standard Double</option>
                      <option>Deluxe</option>
                      <option>Luxury</option>
                    </select>
                  </div>
                </fieldset>
              </form>
              <div class="row">
                <div class="col-lg-3 metode">
                  <p>Metode Pembayaran</p>
                  <form>
                    <fieldset enabled>
                      <div class="mb-3">
                        <select id="enalbledSelect" class="form-select">
                          <option>Virtual Account</option>
                          <option>Bank Transfer</option>
                          <option>OVO</option>
                          <option>Dana</option>
                        </select>
                      </div>
                    </fieldset>
                  </form>
                </div>
                <div class="col-lg-1">
                  <img src="../assets/mandiri.png" alt="" />
                </div>
                <div class="col">
                  <h5>
                    Mandiri Virtual Account 90089181873817 a.n Houtel Indah
                  </h5>
                </div>
                <div class="row">
                  <div class="col">
                    <router-link to="SuksesView" button class="btn btn-primary">
                      Metode Pembayaran
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>