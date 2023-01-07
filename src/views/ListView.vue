<template>
<div id = "ListView">
    <HeaderComp/>
    <SearchList/>
    <RecList/>
    <FooterComp/>

</div>  
</template>

<script>
import SearchList from '@/components/SearchList.vue'
import RecList from '@/components/RecList.vue'
import FooterComp from '@/components/FooterComp.vue';
import HeaderComp from '@/components/HeaderComp.vue';
export default {
    name: "ListView",
    components: { SearchList, RecList, FooterComp, HeaderComp }
};
</script>

<style>
</style>