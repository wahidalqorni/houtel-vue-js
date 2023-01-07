<template>
  <div id="SuksesView">
    <HeaderComp />
    <SuksesKonten />
    <FooterComp />
  </div>
</template>

<script>
import HeaderComp from "@/components/HeaderComp.vue";
import SuksesKonten from "../components/SuksesKonten.vue";
import FooterComp from "@/components/FooterComp.vue";
export default {
  name: "SuksesView",
  components: { HeaderComp, SuksesKonten, FooterComp },
};
</script>

<style>
</style>