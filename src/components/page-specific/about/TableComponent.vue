<script lang="ts" setup>
import { ref, computed, onMounted } from "vue";
// @ts-ignore
import { getProjects } from "@/data/about/apiProjects.js";

import type { Project } from "@/interfaces/About/Project";

const projects = ref<Project[]>([]);
const searhQuery = ref<string>("");
const currentPage = ref<number>(1);
const itemsPerPage = ref<number>(5);

onMounted(async () => {
  const response = await getProjects();
  projects.value = response;
});

const filteredProjects = computed(() => {
  const filtered = projects.value.filter((project) =>
    project.name.toLowerCase().includes(searhQuery.value.toLowerCase())
  );
  const startIndex = (currentPage.value - 1) * itemsPerPage.value;
  return filtered.slice(startIndex, startIndex + itemsPerPage.value);
});

const totalPages = computed(() => {
  return Math.ceil(projects.value.length / itemsPerPage.value);
});

const changePage = (page: number) => {
  currentPage.value = page;
};

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};
</script>

<template>
  <div class="project-table">
    <div class="table-header">
      <h3>Project List</h3>
      <!-- Search input to filter projects -->
      <input type="text" v-model="searhQuery" placeholder="Search Project" />
    </div>

    <table>
      <thead>
        <tr class="border-top">
          <th><input type="checkbox" /></th>
          <th>Project</th>
          <th>Leader</th>
          <th>Team</th>
          <th>Progress</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <!-- Loop through filtered projects and display each one in a table row -->
        <tr v-for="project in filteredProjects" :key="project.id">
          <td><input type="checkbox" /></td>
          <td>
            <div class="project-info">
              <!-- Display project icon and name -->
              <img
                :src="project.icon"
                :alt="project.name"
                class="project-icon"
              />
              <div>
                <div class="project-name">{{ project.name }}</div>
                <div class="project-type">{{ project.type }}</div>
              </div>
            </div>
          </td>
          <td>{{ project.leader }}</td>
          <td>
            <div class="team">
              <!-- Loop through team members and display their avatars -->
              <img
                v-for="(member, index) in project.team"
                :key="index"
                :src="member.avatar"
                :alt="member.name"
                class="team-avatar"
              />
              <!-- Display additional team members if there are any -->
              <span v-if="project.extraTeamMembers"
                >+{{ project.extraTeamMembers }}</span
              >
            </div>
          </td>
          <td>
            <div class="progress-bar">
              <!-- Display progress as a percentage width of the progress bar -->
              <div
                class="progress"
                :style="{ width: project.progress + '%' }"
              ></div>
            </div>
            <!-- Display progress percentage -->
            <div class="progress-percentage">{{ project.progress }}%</div>
          </td>
          <td>
            <!-- Button for actions related to the project -->
            <button class="action-button">...</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="pagination">
      <!-- Buttons to navigate between pages -->
      <button @click="previousPage">«</button>
      <button
        v-for="page in totalPages"
        :key="page"
        @click="changePage(page)"
        :class="{ active: currentPage === page }"
      >
        {{ page }}
      </button>
      <button @click="nextPage">»</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/styles/_variables.scss";

.project-table {
  width: 933px;
  height: 490px;
  padding: 1rem;
  border-radius: 8px;
  background-color: $secondary-color;
  box-shadow: 0 2px 8px $shadow-color;

  .table-header {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    justify-content: space-between;

    h3 {
      margin: 0;
      font-weight: 600;
      font-size: 16px;
      color: $secondary-title;
    }

    input {
      height: 34px;
      width: 250px;
      padding: 0.5rem;
      border-radius: 4px;
      border: 1px solid $button-title-color;

      &:placeholder-shown {
        font-size: 12px;
        font-weight: 300;
      }
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;

    th,
    td {
      text-align: left;
      padding: 0.75rem;
      border-bottom: 1px solid #eee;
    }

    th {
      font-weight: 600;
      font-size: 0.875rem;
      color: $secondary-title;
    }

    .project-info {
      display: flex;
      align-items: center;

      .project-icon {
        width: 30px;
        height: 30px;
        margin-right: 10px;
        border-radius: 50%;
      }

      .project-name {
        font-size: 13px;
        font-weight: 600;
      }

      .project-type {
        color: $secondary-title;
        font-size: 12px;
      }
    }

    .team {
      display: flex;
      align-items: center;

      .team-avatar {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        margin-right: -10px;
        border: 2px solid $secondary-color;
      }

      span {
        width: 28px;
        height: 28px;
        color: #555;
        font-weight: 700;
        border-radius: 50%;
        text-align: center;
        border: 2px solid $secondary-color;
        background-color: $button-title-color;
      }
    }

    .progress-bar {
      width: 100%;
      height: 6px;
      overflow: hidden;
      border-radius: 10px;
      background-color: $button-title-color;

      .progress {
        height: 100%;
        background-color: $main-button-color;
      }
    }

    .progress-percentage {
      margin-top: 5px;
      font-weight: 500;
      font-size: 0.875rem;
    }

    .action-button {
      border: none;
      background: none;
      font-size: 1.5rem;
      color: $secondary-title;
    }
  }

  .pagination {
    gap: 4px;
    display: flex;
    justify-content: end;
    margin-top: 1rem;

    button {
      width: 40px;
      height: 40px;
      font-size: 1rem;
      font-weight: 700;
      border-radius: 8px;
      padding: 0.5rem 1rem;
      background-color: $color-hover;
      border: 1px solid $color-hover;
      color: $main-button-color;

      &.active {
        color: $button-title-color;
        background-color: $main-button-color;
      }

      &:hover {
        color: $button-title-color;
        background-color: $main-button-color-hover;
      }
    }
  }
}
</style>
