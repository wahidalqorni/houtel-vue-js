<template>
<div id ="LandingView">
    <!-- Call Components -->
    <header-comp/>
    <banner-comp/>
    <hotel-rec/>
    <city-rec/>
    <iklan-comp/>
    <tag-line/>
    <footer-comp/>
</div>
</template>

<script>
// Import Components
import HeaderComp from '@/components/HeaderComp.vue';
import BannerComp from '../components/BannerComp.vue';
import HotelRec from '../components/HotelRec.vue';
import CityRec from '../components/CityRec.vue';
import IklanComp from '../components/IklanComp.vue';
import TagLine from '../components/TagLine.vue';
import FooterComp from '../components/FooterComp.vue';
export default {
    name: "LandingView",
    // Regist Components
    components: { HeaderComp,BannerComp, HotelRec, CityRec, IklanComp,TagLine, FooterComp, }
};
</script>
        

<style>

</style>