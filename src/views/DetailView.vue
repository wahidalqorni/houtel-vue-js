<template>
<div id ="DetailView">
    <HeaderComp/>
    <HotelDetail/>
    <DescDetail/>
    <FooterComp/> 


</div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
import HotelDetail from '@/components/HotelDetail.vue'
import DescDetail from '@/components/DescDetail.vue';
import FooterComp from '@/components/FooterComp.vue';
export default {
    name: "DetailView",
    components: { HeaderComp, HotelDetail, DescDetail, FooterComp }
};
</script>

<style>

</style>