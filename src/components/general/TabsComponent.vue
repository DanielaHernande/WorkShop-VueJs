<script lang="ts" setup>
import { computed, ref } from "vue";

import PerfileComponent from "../page-specific/About/PerfileComponent.vue";
import CardTeamComponent from "../page-specific/Team/CardTeamComponent.vue";
import CardProjectComponent from "../page-specific/Project/CardProjectComponent.vue";

import type { Tabs } from "@/interfaces/tabs/ApiTabs";
// @ts-ignore
import { getTabs } from "@/data/tabs/apiTabs.js";

const tabs = ref<Tabs[]>(getTabs);

const activeTab = ref<string>("Profile");

const seletedTabs = (tabName: string) => {
  activeTab.value = tabName;
};

const currentTab = computed(() => {
  switch (activeTab.value) {
    case "Profile":
      return PerfileComponent;

    case "Team":
      return CardTeamComponent;

    case "Projects":
      return CardProjectComponent;

    case "Connections":
      return "Connections";

    default:
      return null;
  }
});
</script>

<template>
  <div class="conteiner-tabs">
    <button
      v-for="tab in tabs"
      :key="tab.name"
      :class="['tab-boton fw-bold', { active: activeTab === tab.name }]"
      @click="seletedTabs(tab.name)"
    >
      <i :class="tab.icon"></i>
      {{ tab.label }}
    </button>
  </div>

  <div class="tab-content">
    <component :is="currentTab"></component>
  </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/styles/_variables.scss";

.conteiner-tabs {
  gap: 1rem;
  width: 90%;
  padding: 2rem;
  display: flex;

  .tab-boton {
    gap: 0.5rem;
    border: none;
    display: flex;
    font-size: 13px;
    border-radius: 8px;
    align-items: center;
    padding: 0.5rem 1rem;
    color: $button-title;
    background-color: transparent;

    &.active {
      color: $button-title-color;
      background-color: $main-button-color;
    }

    &:hover {
      transition: ease-out 1s;
      color: $button-title-color;
      background-color: $main-button-color-hover;
    }

    i {
      width: 20px;
    }
  }
}
</style>
