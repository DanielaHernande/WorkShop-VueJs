<script lang="ts" setup>
// IMports
import { ref } from "vue";
// @ts-ignore
import { getPerfiles } from "@/data/apiConnection/apiPerfile.js";
// @ts-ignore
import { getColorsConnection } from "@/data/apiConnection/tagColorConneciosn.js";

import type { Perfil } from "@/interfaces/Connection/Perfil";
import type { TagStyle, TagStyles } from "@/interfaces/Connection/TagStyles";

const perfiles = ref<Perfil[]>(getPerfiles());
const tagStyles: TagStyles = getColorsConnection();

// Function to get the style for a specific tag
const getTagStyle = (
  tag: string
): { color: string; backgroundColor: string } => {
  return tagStyles[tag] || { color: "#333", backgroundColor: "#f0f0f0" };
};

const toggleIcon = (index: number): void => {
  perfiles.value[index].icon =
    perfiles.value[index].icon === "fa-solid fa-user-plus"
      ? "fa-solid fa-user-check"
      : "fa-solid fa-user-plus";
};
</script>

<template>
  <div class="profiles-grid">
    <!-- Iterate through the profiles and display each profile card -->
    <div
      v-for="(perfil, index) in perfiles"
      :key="perfil.name"
      class="profile-card"
    >
      <!-- Profile header with avatar, name, and charge -->
      <div class="profile-header">
        <img :src="perfil.avatar" :alt="perfil.name" class="profile-avatar" />
        <h2 class="perfile-name">{{ perfil.name }}</h2>
        <p class="profile-charge">{{ perfil.charge }}</p>
      </div>
      <!-- Profile skills with dynamic tag styles -->
      <div class="profile-skill">
        <span
          v-for="skill in perfil.skills"
          :key="skill"
          :style="getTagStyle(skill)"
          class="skill fw-bold"
          >{{ skill }}</span
        >
      </div>
      <!-- Profile statistics including projects, tasks, and connections -->
      <div class="profile-statistics">
        <div class="statistic">
          <span class="statistic-value">{{ perfil.statistics.projects }}</span>
          <span class="statistic-label">Projects</span>
        </div>
        <div class="statistic">
          <span class="statistic-value">{{ perfil.statistics.tasks }}</span>
          <span class="statistic-label">Tasks</span>
        </div>
        <div class="statistic">
          <span class="statistic-value">{{
            perfil.statistics.connections
          }}</span>
          <span class="statistic-label">Connections</span>
        </div>
      </div>

      <!-- Profile actions with toggle and message buttons -->
      <div class="profile-actions">
        <button
          @click="toggleIcon(index)"
          :class="[
            'btn-conexion ms-4 fw-bold',
            { active: perfil.icon === 'fa-solid fa-user-check' },
          ]"
        >
          <i :class="['me-2', perfil.icon]"></i>Connected
        </button>
        <button class="btn-message">
          <i class="fa-regular fa-envelope"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/styles/_variables.scss";

.profiles-grid {
  gap: 20px;
  width: 97%;
  padding: 20px;
  display: grid;
  margin-left: 5px;
  background-color: $primary-color;
  grid-template-columns: repeat(auto-fill, minmax(410px, 1fr));
}

.profile-card {
  padding: 20px;
  text-align: center;
  border-radius: 12px;
  background-color: $secondary-color;
  box-shadow: 0 2px 8px $shadow-color;
}

.profile-header {
  position: relative;
}

.profile-avatar {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin-bottom: 15px;
  border: 5px solid #f0f0f0;
}

.perfile-name {
  font-size: 20px;
  color: $button-title;
  font-weight: bold;
  margin-bottom: 5px;
}

.profile-charge {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 15px;
  color: $secondary-title;
}

.profile-skill {
  gap: 10px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  justify-content: center;

  .skill {
    font-size: 12px;
    padding: 5px 10px;
    border-radius: 6px;
    color: $button-title;
    //background-color: #f0f0f0;
  }
}

.profile-statistics {
  display: flex;
  margin-bottom: 20px;
  justify-content: space-around;

  .statistic {
    display: flex;
    align-items: center;
    flex-direction: column;

    .statistic-value {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 5px;
        color: $secondary-title;
    }

    .statistic-label {
        font-size: 12px;
        font-weight: 500;
        color: $secondary-title;
    }
  }
}

.profile-actions {
  display: flex;
  justify-content: space-evenly;

  .btn-conexion {
    gap: 5px;
    border: none;
    display: flex;
    padding: 8px 15px;
    border-radius: 8px;
    align-items: center;
    color: $main-button-color-hover;
    background-color: $secondary-button-color;

    i {
        font-size: 14px;
        color: $main-button-color-hover;
    }

    &.active {
      color: $button-title-color;
      background-color: $main-button-color;

      i {
        color: $button-title-color;
      }
    }

    &:hover {
        transition: ease 0.4s;
      color: $button-title-color;
      background-color: $main-button-color;

      i {
        color: $button-title-color;
      }
    }
  }

  .btn-message {
    width: 50px;
    border: none;
    padding: 8px;
    margin-right: 60px;
    border-radius: 8px;
    background-color: #f0f0f0;

    i {
        font-size: 20px;
        color: $secondary-title;
    }

    &:hover {
      background-color: #e0e0e0;
    }
  }
}
</style>
