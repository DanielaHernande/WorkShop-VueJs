<script lang="ts" setup>
import { computed, ref } from "vue";
import type { Icon } from "@/interfaces/searchMenu/Icon";
// @ts-ignore
import { getIconsSearch } from "@/data/searchBar/iconsSearchBar.js";

const icons = ref<Icon[]>(getIconsSearch);

const profileIcon = computed(() => {
  return icons.value.find((icon) => icon.iconClass === "profile");
});
</script>

<template>
  <div class="conteiner">
    <div class="conteiner-search">
      <i class="fa-solid fa-magnifying-glass icono"></i>
      <span class="text-search">Search</span>
      <span class="logo-search">⌘K</span>
    </div>

    <div class="icons-conteiner">
      <button
        v-for="icon in icons.filter((icon) => icon.iconClass !== 'profile')"
        :key="icon.id"
        class="btn-icons"
      >
        <i :class="icon.iconClass" :alt="icon.altText"></i>
      </button>

      <button v-if="profileIcon" class="profile-icon">
        <img :src="profileIcon.urlImage" :alt="profileIcon.altText" />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/styles/_variables.scss";

.conteiner {
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
    display: flex;
    padding: 10px 15px;
    border-radius: 8px;
    align-items: center;
    background-color: $secondary-color;

    .icono {
      margin-right: 10px;
      color: $button-title;
    }

    .text-search {
      font-size: 16px;
      color: $button-title;
    }

    .logo-search {
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
  display: flex;
  align-items: center;

  .btn-icons {
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
    border: none;
    margin-left: 15px;
    background-color: $secondary-color;

    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
  }
}
</style>