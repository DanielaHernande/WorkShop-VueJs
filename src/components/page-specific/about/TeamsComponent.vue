<script lang="ts" setup>
import { ref } from "vue";

import type { Team } from "@/interfaces/About/Team";

// @ts-ignore
import { getTeams } from "@/data/about/apiTeams";

const teams = ref<Team[]>(getTeams());
</script>

<template>
  <div class="teams">
    <h3>Teams</h3>
    <!-- Iterate through the teams and display each one -->
    <div class="team-item" v-for="(team, index) in teams" :key="index">
      <!-- Display the team's icon -->
      <i :class="team.icon"></i>
      <div>
        <!-- Display the team's name and number of members -->
        <p class="team-name">{{ team.name }}</p>
        <p class="team-members">{{ team.members }}</p>
      </div>
      <!-- Display the team's label with dynamic styling -->
      <span :class="team.labelClass">{{ team.label }}</span>
    </div>
    <!-- Link to view all teams -->
    <a href="#" class="view">View all Teams</a>
  </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/styles/_variables.scss";

.teams {
  width: 450px;
  height: 440px;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px #adadad;
  background-color: $secondary-color;

  h3 {
    font-size: 16px;
    margin-bottom: 0.5rem;
    color: $secondary-title;
  }

  .team-item {
    display: flex;
    align-items: center;

    i {
      font-size: 2rem;
      font-weight: bold;
      margin-right: 1rem;
    }

    .fa-react {
      color: #74c0fc;
      border-radius: 50%;
      background-color: #dae4ec;
      box-shadow: 0 0 10px #74c0fc;
    }

    .fa-circle-stop {
      color: #ffb325;
      border-radius: 50%;
      background-color: #fcebcc;
      box-shadow: 0 0 10px #ffb325;
    }

    .fa-figma {
      color: #255fff;
      border-radius: 50%;
      background-color: #f8dddd;
      box-shadow: 0 0 10px #ffa3a3;
    }

    .fa-vuejs {
      color: #468d0b;
      border-radius: 50%;
      background-color: #d6e2cc;
      box-shadow: 0 0 10px #acc09c;
    }

    .fa-twitter {
      color: #74c0fc;
      border-radius: 50%;
      background-color: #dae4ec;
      box-shadow: 0 0 10px #74c0fc;
    }

    .team-name {
      font-size: 14px;
      margin-top: 20px;
      font-weight: bold;
      color: $secondary-title;
    }

    .team-members {
      font-size: 12px;
      margin-top: -20px;
      color: $secondary-title;
    }

    .label {
      margin-left: auto;
      font-weight: bold;
      border-radius: 6px;
      font-size: 0.75rem;
      padding: 0.3rem 0.6rem;
    }

    .developer {
      color: rgb(252, 32, 32);
      background-color: #ffd5d5;
    }

    .support {
      color: #6450fd;
      background-color: #e0dcff;
    }

    .designer {
      color: #23f5f5;
      background-color: #dfffff;
    }

    .marketing {
      color: gray;
      background-color: rgb(206, 206, 206);
    }
  }
}

.view {
  display: block;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: $main-button-color;
}
</style>
