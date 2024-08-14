<script lang="ts" setup>
// Imports
import { ref } from "vue";
import type { IconSide } from "@/interfaces/sideMenu/IconSide";

// @ts-ignore
import { getIconsLeft } from "/src/data/leftSideMneu/iconsLeftSideMenu.js";

const icons = ref<IconSide[]>(getIconsLeft);
</script>

<template>
  <div class="side-menu">
    <button v-for="icon in icons" :key="icon.id" class="btn-icon">
      <template v-if="icon.urlImage">
        <img :src="icon.urlImage" :alt="icon.altText" class="imagen" />
      </template>
      <template v-else>
        <i :class="icon.iconClass" :alt="icon.altText"></i>
      </template>
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/styles/_variables.scss";

.side-menu {
  width: 60px;
  display: flex;
  height: 95%;
  padding: 10px 0;
  margin-top: 10px;
  margin-left: 10px;
  align-items: center;
  flex-direction: column;
  background-color: $secondary-color;
  box-shadow: 0 3px 6px $shadow-color;

  .btn-icon {
    margin: 10px;
    border: none;
    padding: 6px;
    background-color: $secondary-color;

    i {
      font-size: 18px;
      color: $secondary-title;
    }

    img {
      width: 28px;
      height: 26px;
    }
  }
}
</style>
