<script lang="ts" setup>
// Import components to be used in this template
import AboutComponent from "@/components/page-specific/About/AboutComponent.vue";
import ActivityTimeline from "@/components/page-specific/About/ActivityTimeline.vue";
import OverviewComponent from "@/components/page-specific/About/OverviewComponent.vue";
import ConecctionComponent from "@/components/page-specific/About/ConnectionComponent.vue"
import TeamsComponent from "@/components/page-specific/About/TeamsComponent.vue";
import TableComponent from "@/components/page-specific/About/TableComponent.vue";
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
  gap: 2rem;
  top: -49px;
  display: grid;
  position: relative;
  justify-items: end;
  margin-right: 60px;
  grid-template-columns: 3fr 8fr 7fr;
}

.project {
  top: -20px;
  display: grid;
  position: relative;
  margin-right: 56px;
  margin-bottom: 20px;
  justify-content: end;
}
</style>
