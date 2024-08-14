<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { User } from "@/interfaces/About/About";

// @ts-ignore
import { getUsers } from "@/data/about/apiUsers.js";

const users = reactive<User[]>( getUsers());

const toggleIcon = (index: number) => {
  users[index].icon =
    users[index].icon === "fa-solid fa-user-check"
      ? "fa-solid fa-user-plus"
      : "fa-solid fa-user-check";
};
</script>

<template>
  <div class="conteiner-conections">
    <h3>Connections</h3>

    <div v-for="(user, index) in users" key="index" class="connections-items">
      <img :src="user.avatar" :alt="user.name" class="avatra" />

      <div>
        <p class="name">{{ user.name }}</p>
        <p class="connections">{{ user.connections }}</p>
      </div>

      <button
        @click="toggleIcon(index)"
        :class="[
          'btn-icon',
          { active: user.icon === 'fa-solid fa-user-check' },
        ]"
      >
        <i :class="user.icon"></i>
      </button>
    </div>
    <a href="#" class="view">View all connectiosn</a>
  </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/styles/_variables.scss";

.conteiner-conections {
  width: 450px;
  height: 440px;
  padding: 1rem;
  border-radius: 8px;
  background-color: $secondary-color;
  box-shadow: 0 2px 8px $shadow-color;

  h3 {
    font-size: 16px;
    color: $secondary-title;
    margin-bottom: 1.5rem;
  }

  .connections-items {
    display: flex;
    align-items: center;

    .avatra {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 1rem;
    }

    .name {
      font-weight: bold;
      align-items: center;
      margin-bottom: -4px;
      color: $button-title;
    }

    .connections {
      color: $secondary-title;
    }

    .btn-icon {
      width: 35px;
      height: 35px;
      border: none;
      margin-left: auto;
      border-radius: 4px;
      color: $button-title-color;
      background-color: $secondary-button-color;

      i {
        font-size: 14px;
        color: $main-button-color-hover;
      }

      &.active {
        background-color: $main-button-color;

        i {
          color: $button-title-color;
        }
      }

      &:hover {
        transition: ease 0.5s;
        background-color: $main-button-color-hover;

        i {
          color: $button-title-color;
        }
      }
    }
  }
}

.view {
  display: block;
  margin-top: 2rem;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: $main-button-color;
}
</style>
