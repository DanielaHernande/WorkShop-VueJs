<script lang="ts" setup>
// Importing necessary functions and components from Vue
import { computed, ref } from "vue";

// Importing components for each tab
import PerfileComponent from "../page-specific/About/PerfileComponent.vue";
import CardTeamComponent from "../page-specific/Team/CardTeamComponent.vue";
import CardProjectComponent from "../page-specific/Project/CardProjectComponent.vue";
import PerfileCardComponent from "../page-specific/Connection/PerfileCardComponent.vue";

// Importing the `Tabs` type and `getTabs` function for fetching tab data
import type { Tabs } from "@/interfaces/tabs/ApiTabs";
// @ts-ignore
import { getTabs } from "@/data/tabs/apiTabs.js";

// State: An array of tabs retrieved from the `getTabs` function
const tabs = ref<Tabs[]>(getTabs);

// State: The currently active tab, initialized to "Profile"
const activeTab = ref<string>("Profile");

// Function to update the active tab when a tab is selected
const seletedTabs = (tabName: string) => {
  activeTab.value = tabName;
};

// Computed property to determine which component to display based on the active tab
const currentTab = computed(() => {
  switch (activeTab.value) {
    case "Profile":
      return PerfileComponent;

    case "Team":
      return CardTeamComponent;

    case "Projects":
      return CardProjectComponent;

    case "Connections":
      return PerfileCardComponent;

    default:
      return null;
  }
});
</script>

<template>
  <!-- Container for the tab buttons -->
  <div class="conteiner-tabs">
    <!-- Loop through the tabs and create a button for each one -->
    <button
      v-for="tab in tabs"
      :key="tab.name"
      :class="['tab-boton fw-bold', { active: activeTab === tab.name }]"
      @click="seletedTabs(tab.name)"
    >
      <!-- Icon for the tab -->
      <i :class="tab.icon"></i>
      <!-- Label for the tab -->
      {{ tab.label }}
    </button>
  </div>

  <!-- Container for the content of the selected tab -->
  <div class="tab-content">
    <!-- Render the component corresponding to the current tab -->
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
