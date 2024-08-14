<script lang="ts" setup>
import { ref } from "vue";
// @ts-ignore
import { getApiTeams } from "@/data/apisTeam/apiTeams";
// @ts-ignore
import { tagsColor } from "@/data/apisTeam/tagsColor";

import type { TagStyles } from "@/interfaces/Team/TagStyles";
import type { Team } from "@/interfaces/Team/Team";

const teams = ref<Team[]>(getApiTeams());
const tagStyles: TagStyles = tagsColor();

const getTagStyle = (
  tag: string
): { color: string; backgroundColor: string } => {
  return tagStyles[tag] || { color: "#333", backgroundColor: "#f0f0f0" };
};

const toggleIcon = (index: number): void => {
  teams.value[index].star =
    teams.value[index].star === "fa-regular fa-star"
      ? "fa-solid fa-star"
      : "fa-regular fa-star";
};
</script>

<template>
  <div class="contenedor">
    <!-- Container for the team cards -->
    <div class="teams-gri">
      <!-- Iterate through the teams and display each team card -->
      <div v-for="(team, index) in teams" :key="team.id" class="team-card">
        <div class="card-header">
          <!-- Team icon and name -->
          <img :src="team.icon" :alt="team.name" class="team-icon" />
          <h3 class="team-name">{{ team.name }}</h3>

          <!-- Button to toggle the star icon -->
          <button
            @click="toggleIcon(index)"
            :class="['btn-start', { active: team.star === 'fa-solid fa-star' }]"
          >
            <i :class="team.star"></i>
          </button>
        </div>

        <!-- Team description -->
        <p class="team-description">{{ team.description }}</p>

        <!-- Tags associated with the team -->
        <div class="team-tags">
          <span
            v-for="tag in team.tags"
            :key="tag"
            :style="getTagStyle(tag)"
            class="tag fw-bold"
            >{{ tag }}</span
          >
        </div>

        <!-- Team members -->
        <div class="team-members">
          <img
            v-for="member in team.members"
            :key="member.name"
            :src="member.avatar"
            :alt="member.name"
            class="member-avatar"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/styles/_variables.scss";

.contenedor {
  width: 96%;
  padding: 10px;
  margin-left: 16px;

  .teams-gri {
    gap: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }

  .team-card {
    height: 210px;
    padding: 20px;
    border-radius: 8px;
    background-color: $secondary-color;
    box-shadow: 0 2px 8px $shadow-color;
  }

  .card-header {
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    .team-icon {
      width: 40px;
      height: 40px;
      margin-right: 10px;
      border-radius: 50%;
    }

    .team-name {
      font-size: 18px;
      font-weight: 550;
      color: $button-title;
    }

    .btn-start {
      width: 10px;
      border: none;
      background: transparent;
      margin-left: 100px;

      i {
        top: -4px;
        font-size: 20px;
        margin-left: 50px;
        position: relative;
        color: $secondary-title;
      }

      &:hover {
        i {
          color: rgb(255, 223, 82);
        }
      }

      &.active {
        i {
          color: rgb(255, 223, 82);
        }
      }
    }
  }

  .team-description {
    font-size: 14px;
    margin-bottom: 15px;
    color: $secondary-title;
  }

  .team-tags {
    display: flex;
    margin-bottom: 15px;
    justify-content: end;

    .tag {
      top: 10px;
      font-size: 12px;
      margin-right: 5px;
      padding: 5px 10px;
      border-radius: 4px;
      position: relative;
      margin-bottom: 5px;
      color: $button-title;
      background-color: $button-title-color;
    }
  }

  .team-members {
    display: flex;
    align-items: center;

    .member-avatar {
      top: -40px;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      margin-right: -10px;
      position: relative;
      border: 2px solid $secondary-color;
    }
  }
}
</style>
