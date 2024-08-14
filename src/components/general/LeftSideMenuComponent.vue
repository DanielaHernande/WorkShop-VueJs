<script lang="ts" setup>
// Imports
// Importing `ref` for reactive data
import { ref } from "vue";
// Importing the `IconSide` interface for type safety
import type { IconSide } from "@/interfaces/sideMenu/IconSide";

// @ts-ignore
// Importing the `getIconsLeft` function which provides icons for the side menu
import { getIconsLeft } from "/src/data/leftSideMneu/iconsLeftSideMenu.js";

// State: A list of icons obtained from the `getIconsLeft` function
const icons = ref<IconSide[]>(getIconsLeft);
</script>

<template>
  <!-- Side menu container -->
  <div class="side-menu">
    <!-- Loop through each icon in the `icons` array -->
    <button v-for="icon in icons" :key="icon.id" class="btn-icon">
      <!-- If the icon has an image URL, render it as an image -->
      <template v-if="icon.urlImage">
        <img :src="icon.urlImage" :alt="icon.altText" class="imagen" />
      </template>
      <!-- Otherwise, render it as a font icon -->
      <template v-else>
        <i :class="icon.iconClass" :alt="icon.altText"></i>
      </template>
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/styles/_variables.scss";

.side-menu {
  /* Side menu container styling */

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
    /* Styling for each button containing an icon */
    margin: 10px;
    border: none;
    padding: 6px;
    background-color: $secondary-color;

    i {
      /* Styling for font icons */
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
