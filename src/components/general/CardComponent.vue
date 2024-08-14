<script lang="ts" setup>
// Importa la función `ref` de Vue para crear referencias reactivas
import { ref } from "vue";

// Image of backgroun se guarda la ruta en una referencia reactiva
const fondoImg = ref<string>("public/img/fondo.jpg");
// Avatra se guarda la ruta en una referencia reactiva
const avatar = ref<string>("public/img/avatar.jpg");

// Name se guarda la ruta en una referencia reactiva
const name = ref<string>("Jhon Doe");
// Role se guarda la ruta en una referencia reactiva
const role = ref<string>("Coder");
// Location se guarda la ruta en una referencia reactiva
const location = ref<string>("Medellin");
// joinedDate se guarda la ruta en una referencia reactiva
const joinedDate = ref<string>("Joined April 2021");
</script>

<template>
  <!-- Tarjeta de perfil con margen superior -->
  <div class="profile-card mt-4">
    <!-- Sección del encabezado del perfil que incluye la imagen de fondo -->
    <div class="profile-header">
      <img class="fondo-img" :src="fondoImg" alt="fondo" />
    </div>

    <!-- Sección con detalles del perfil -->
    <div class="profile-detall">
      <!-- Imagen del avatar del usuario -->
      <img class="avatar" :src="avatar" alt="avatra" />
      <!-- Información del usuario, incluyendo nombre, rol, ubicación y fecha de unión -->
      <div class="info">
        <!-- Muestra el nombre del usuario -->
        <h2>{{ name }}</h2>
        <!-- Detalles adicionales como rol, ubicación y fecha de unión -->
        <div class="detalles">
          <span class="role">
            <!-- Icono y rol del usuario -->
            <i class="fa-solid fa-palette"></i> {{ role }}</span
          >
          <span class="location">
            <!-- Icono y ubicación del usuario -->
            <i class="fa-solid fa-location-dot"></i> {{ location }}</span
          >
          <span class="joinedDate">
            <!-- Icono y fecha de unión del usuario -->
            <i class="fa-solid fa-calendar-days"></i> {{ joinedDate }}</span
          >
        </div>
      </div>

      <!-- Btn de connected -->
      <button class="btn-connect fw-bold">
        <i class="fa-solid fa-user-check"></i> Connected
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/styles/_variables.scss";

.profile-card {
  width: 96%;
  //height: 295px;
  //margin: auto;
  overflow: hidden;
  margin-left: 18px;
  border-radius: 0.5rem;
  background-color: $secondary-color;
  box-shadow: 0 4px 8px $shadow-color;
}

.profile-header {
  position: relative;
}

.fondo-img {
  width: 100%;
  height: 180px;
  //object-fit: cover;
}

.profile-detall {
  padding: 1rem;
  display: flex;
  align-items: center;
}

.avatar {
  top: -40px;
  width: 100px;
  height: 100px;
  border-radius: 8px;
  position: relative;
  margin-right: 1rem;
  border: 3px solid $secondary-color;
}

.info {
  flex-grow: 1;

  h2 {
    color: $button-title;
  }
}

.detalles {
  gap: 1rem;
  display: flex;
  color: $secondary-title;

  .role,
  .location,
  .joinedDate {
    font-weight: 500;
    display: flex;
    align-items: center;
  }

  .fa-solid {
    margin-right: 0.5rem;
    color: $secondary-title;
  }
}

.btn-connect {
  width: 150px;
  height: 40px;
  border: none;
  display: flex;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  align-items: center;
  color: $secondary-color;
  background-color: $main-button-color;

  .fa-solid {
    margin-right: 0.5rem;
  }

  &:hover {
    transition: ease-out 1s;
    background-color: $main-button-color-hover;
  }
}
</style>