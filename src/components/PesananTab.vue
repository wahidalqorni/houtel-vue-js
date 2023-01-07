<template>
  <div id="PesananTab">
    <div class="container">
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
                    <input type="number" class="form-control" id="inputNumber">
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
export default {};
</script>

<style>
</style>