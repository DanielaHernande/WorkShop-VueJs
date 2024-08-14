<script lang="ts" setup>
// Importaciones de Vue
import { computed, ref } from "vue";
// Importing the `Icon` interface for type safety
import type { Icon } from "@/interfaces/searchMenu/Icon";
// @ts-ignore
// Importing the `getIconsSearch` function that returns a set of icons for the search bar
import { getIconsSearch } from "@/data/searchBar/iconsSearchBar.js";

// State: A list of icons obtained from the `getIconsSearch` function
const icons = ref<Icon[]>(getIconsSearch);

// Computed property: Finds the specific profile icon in the list of icons
const profileIcon = computed(() => {
  return icons.value.find((icon) => icon.iconClass === "profile");
});
</script>

<template>
  <div class="conteiner">
    <!-- Search bar container -->
    <div class="conteiner-search">
      <!-- Magnifying glass icon -->
      <i class="fa-solid fa-magnifying-glass icono"></i>
      <!-- Search text -->
      <span class="text-search">Search</span>
      <!-- Keyboard shortcut displayed -->
      <span class="logo-search">⌘K</span>
    </div>

    <!-- Icons container -->
    <div class="icons-conteiner">
      <!-- Iterates over the icons, excluding the profile icon -->
      <button
        v-for="icon in icons.filter((icon) => icon.iconClass !== 'profile')"
        :key="icon.id"
        class="btn-icons"
      >
        <!-- Renders each icon -->
        <i :class="icon.iconClass" :alt="icon.altText"></i>
      </button>

      <!-- Profile icon button, rendered only if `profileIcon` exists -->
      <button v-if="profileIcon" class="profile-icon">
        <img :src="profileIcon.urlImage" :alt="profileIcon.altText" />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/styles/_variables.scss";

.conteiner {
  /* Main container styling */
  width: 95%;
  height: 50px;
  display: flex;
  margin-top: 15px;
  margin-left: 15px;
  padding: 10px 10px;
  border-radius: 6px;
  align-items: center;
  justify-content: space-between;
  background-color: $secondary-color;
  box-shadow: 0 3px 6px $shadow-color;

  .conteiner-search {
    /* Search container styling */
    display: flex;
    padding: 10px 15px;
    border-radius: 8px;
    align-items: center;
    background-color: $secondary-color;

    .icono {
      /* Magnifying glass icon styling */
      margin-right: 10px;
      color: $button-title;
    }

    .text-search {
      /* Search text styling */

      font-size: 16px;
      color: $button-title;
    }

    .logo-search {
      /* Keyboard shortcut styling */
      width: 25px;
      height: 25px;
      display: flex;
      font-size: 12px;
      margin-left: 8px;
      border-radius: 8px;
      align-items: center;
      justify-content: center;
      border: 1px solid $button-title;
    }
  }
}

.icons-conteiner {
  /* Additional icons container styling */
  display: flex;
  align-items: center;

  .btn-icons {
    /* Styling for icon buttons */
    border: none;
    font-size: 18px;
    margin-left: 15px;
    color: $button-title;
    background-color: $secondary-color;

    &:hover {
      border-radius: 90%;
      background-color: $color-hover;
    }
  }

  .profile-icon {
    /* Profile icon button styling */
    border: none;
    margin-left: 15px;
    background-color: $secondary-color;

    img {
      /* Profile icon image styling */
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
  }
}
</style>
