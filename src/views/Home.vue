<script lang="ts" setup>
//imports
import SearchBar from "@/components/general/SearchBarComponent.vue";
import LeftSideMenu from "@/components/general/LeftSideMenuComponent.vue";
import CardComponent from "@/components/general/CardComponent.vue";
</script>

<template>
  <div class="main-conteiner">
    <LeftSideMenu />

    <div class="conteiner-content">
      <SearchBar />
      <CardComponent />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/styles/_variables.scss";

.main-conteiner {
  height: 100%;
  display: flex;
  background-color: $primary-color;
}

.conteiner-content {
  flex: 1;
  display: flex;
  padding-left: 20px;
  flex-direction: column;
}
</style>
