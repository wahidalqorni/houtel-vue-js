<template>
  <div id="PemesananView">
    <HeaderComp />
    <!-- <PemesananHotel /> -->
    
    <PesananTab />
    <!-- <MetodePembayaran /> -->
    <FooterComp />
  </div>
</template>

<script>
import HeaderComp from "@/components/HeaderComp.vue";
// import PemesananHotel from "../components/PemesananHotel.vue";
import PesananTab from "../components/PesananTab.vue";
// import MetodePembayaran from "../components/MetodePembayaran.vue";
import FooterComp from "@/components/FooterComp.vue";
export default {
  name: "PemesananView",
  components: {
    HeaderComp,
    // PemesananHotel,
    PesananTab,
    // MetodePembayaran,
    FooterComp,
  },
};
</script>

<style>
</style>