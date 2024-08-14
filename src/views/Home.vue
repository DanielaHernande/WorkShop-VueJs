<script lang="ts" setup>
//imports
import SearchBar from '@/components/general/SearchBar.vue';
import LeftSideMenu from '@/components/general/LeftSideMenu.vue';
</script>

<template>
    <div class="main-conteiner">
        <LeftSideMenu />

        <div class="bar-top"> 
            <SearchBar />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.main-conteiner {
    display: flex;
    height: 100%;

    .SearchBar {
        flex: 0 0 60px;
    }

    .bar-top {

        display: flex;
        align-items: flex-start;
        padding: 10px 20px;
        width: 100%;
    }

}
</style>