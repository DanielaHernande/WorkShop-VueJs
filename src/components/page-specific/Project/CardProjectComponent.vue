<script lang="ts" setup>
import { ref } from "vue";
// @ts-ignore
import { getProjects } from "@/data/apiProjects/apiProjects";
// @ts-ignore
import { getTagColor } from "@/data/apiProjects/apiTagColors";

import type { Project } from "@/interfaces/Project/Project";
import type { TagStyles } from "@/interfaces/Project/TagStyles";


// Initialize the projects data from the API
const infoProjects = ref<Project[]>(getProjects());
// Initialize the tag color styles from the API
const tagStyles: TagStyles = getTagColor();

// Function to get the style for a tag, defaulting to a fallback style if the tag is not found
const getTagStyle = (
  tag: string
): { color: string; backgroundColor: string } => {
  return tagStyles[tag] || { color: "#333", backgroundColor: "#f0f0f0" };
};
</script>

<template>
  <div class="project-grid">
    <!-- Iterate through the projects and display each project card -->
    <div v-for="project in infoProjects" :key="project.id" class="project-card">
      <!-- Project header with icon, title, client name, and options -->
      <div class="project-header">
        <img :src="project.icon" :alt="project.title" />
        <div class="project-info">
          <h3>{{ project.title }}</h3>
          <p class="client-name">Client: {{ project.client }}</p>
        </div>
        <div class="more-options">⋮</div>
      </div>

      <!-- Project details including budget, start date, and deadline -->
      <div class="details-date">
        <div class="budget">
          <p class="fw-bold">{{ project.budget }}</p>
          <p class="total-budget">Total Budget</p>
        </div>

        <div class="dates">
          <p><strong>Start Date:</strong> {{ project.startDate }}</p>
          <p><strong>Deadline: </strong>{{ project.deadline }}</p>
        </div>
      </div>

      <!-- Project description -->
      <p class="description">{{ project.description }}</p>

      <!-- Project hours logged, total hours, and days left -->
      <div class="info-hours">
        <p class="par">
          <strong>All Hours:</strong> {{ project.hoursLogged }} /
          {{ project.hoursTotal }}
        </p>
        <div :style="getTagStyle(project.daysLeft)" class="days-left">
          {{ project.daysLeft }} Days left
        </div>
      </div>

      <!-- Progress bar displaying the progress of the project -->
      <div class="progress-bar">
        <span class="progress-text">{{ project.progress }}% Completed</span>
        <div class="progress" :style="{ width: project.progress + '%' }"></div>
      </div>

      <div class="footer">
        <div class="avatars">
          <img
            v-for="(avatar, index) in project.avatars"
            :key="index"
            :src="avatar"
            alt="Avatar 1"
            class="avatar"
          />
        </div>
        <p class="member">{{ project.members }} Members</p>
        <div class="comments">
          <i class="fa-regular fa-message me-1"></i>{{ project.comments }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/styles/_variables.scss";

.project-grid {
  gap: 1rem;
  width: 97%;
  margin-left: 5px;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

  //grid-template-columns: repeat(2, 1fr);

  .project-card {
    padding: 1.6rem;
    display: flex;
    border-radius: 12px;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 2px 8px $shadow-color;
  }

  .project-header {
    display: flex;
    align-items: center;
    margin-bottom: 12px;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 20px;
    }

    .project-info {
      flex: 1;
      margin-left: 10px;

      h3 {
        margin: 0;
        font-size: 1.2em;
      }

      .client-name {
        margin: 0;
        font-size: 0.9em;
        color: $secondary-title;
      }
    }

    .more-options {
      font-size: 1em;
      cursor: pointer;
    }
  }

  .details-date {
    display: flex;
    margin-bottom: 10px;
    justify-content: space-between;
  }

  .budget {
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 10px;
    background: #e2e2e4;

    p {
      margin: 0;
      font-size: 0.9em;
      color: $button-title;
    }

    .total-budget {
      color: $secondary-title;
      font-size: 0.8em;
    }
  }

  .dates {
    padding: 10px;
    margin-bottom: 10px;

    p {
      margin: 4px 0;
      font-size: 0.9em;
      color: $secondary-title;
    }
  }

  .total-budget {
    color: $button-title;
    font-size: 0.8rem;
  }

  .description {
    font-size: 0.9em;
    margin-bottom: 20px;
    color: $button-title;
  }

  .info-hours {
    display: flex;
    margin-bottom: 10px;
    align-items: center;
    justify-content: space-between;

    .par {
      margin: 4px 0;
      color: $secondary-title;
      font-size: 0.9em;
    }

    .days-left {
      font-weight: 600;
      padding: 5px 10px;
      border-radius: 8px;
      font-size: 0.8em;
    }
  }

  .progress-bar {
    height: 8px;
    margin-top: 6px;
    border-radius: 5px;
    position: relative;
    margin-bottom: 10px;
    background: $shadow-color;
  }

  .progress {
    height: 100%;
    border-radius: 5px;
    background: $main-button-color;
  }

  .progress-text {
    top: -4px;
    right: 10px;
    font-size: 0.6em;
    position: absolute;
    color: $main-titles;
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .avatars {
      display: flex;

      .avatar {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: -10px;
        border: 2px solid $secondary-color;
      }
    }
  }

  .member {
    margin-top: 11px;
    font-size: 0.8em;
    color: $secondary-title;
  }

  .comments {
    font-size: 1em;
    color: $secondary-title;
  }
}
</style>
