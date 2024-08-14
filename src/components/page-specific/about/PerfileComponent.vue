<script lang="ts" setup>
// Import components to be used in this template
import AboutComponent from "@/components/page-specific/about/AboutComponent.vue";
import ActivityTimeline from "@/components/page-specific/about/ActivityTimeline.vue";
import OverviewComponent from "@/components/page-specific/about/OverviewComponent.vue";
import ConecctionComponent from "./ConecctionComponent.vue";
import TeamsComponent from "./TeamsComponent.vue";
import TableComponent from "./TableComponent.vue";
</script>

<template>
  <!-- Main dashboard container -->
  <div class="dashboard">
    <!-- Top section of the dashboard -->
    <div class="top-section">
      <!-- Component displaying about information -->
      <AboutComponent />
      <!-- Component showing activity timeline -->
      <ActivityTimeline />
    </div>
    <!-- Bottom section of the dashboard -->
    <div class="bottom-section">
      <!-- Component providing an overview -->
      <OverviewComponent />
      <!-- Component for displaying teams -->
      <ConecctionComponent />
      <TeamsComponent />
    </div>
  </div>
  <!-- Project section -->
  <div class="project">
    <!-- Component for displaying a table -->
    <TableComponent />
  </div>
</template>

<style lang="scss" scoped>
.dashboard {
  display: grid;
  grid-template-columns: 1fr;
}

.top-section {
  display: grid;
  margin-bottom: 10px;
  grid-template-columns: 2fr 4fr;
}

.bottom-section {
  gap: 1rem;
  top: -49px;
  display: grid;
  position: relative;
  justify-items: end;
  margin-right: 110px;
  grid-template-columns: 3fr 8fr 7fr;
}

.project {
  top: -20px;
  display: grid;
  position: relative;
  margin-right: 90px;
  margin-bottom: 20px;
  justify-content: end;
}
</style>
