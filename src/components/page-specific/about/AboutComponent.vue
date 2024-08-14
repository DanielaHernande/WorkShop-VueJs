<script lang="ts" setup></script>

<template>
    <!-- Tarjeta de información sobre el usuario -->
    <div class="about-card ">
        <!-- Sección de información personal -->
        <div class="section">
            <!-- Título de la sección -->
            <h3>ABOUT</h3>
            <!-- Lista con detalles personales -->
            <ul>
                <!-- Nombre completo del usuario -->
                <li><i class="fa-regular fa-user"></i> <strong>Full Name:</strong> Jhon Doe</li>
                <!-- Estado del usuario (activo o inactivo) -->
                <li><i class="fa-solid fa-check"></i> <strong>Status: </strong> active</li>
                <!-- Rol del usuario (ejemplo: Developer) -->
                <li><i class="fa-solid fa-crown"></i> <strong>Role: </strong> Developer</li>
                <!-- País del usuario -->
                <li><i class="fa-regular fa-flag"></i> <strong>Country: </strong> COL</li>
                <!-- Idioma del usuario -->
                <li><i class="fa-solid fa-language"></i> <strong>Language: </strong> English</li>
            </ul>
        </div>

        <!-- Sección de información de contacto -->
        <div class="section">
            <!-- Título de la sección -->
            <h3>CONTACT</h3>
            <!-- Lista con detalles de contacto -->
            <ul>
                <!-- Número de teléfono del usuario -->
                <li><i class="fa-solid fa-phone-volume"></i> <strong>Contact:</strong> (123) 456-7890</li>
                <!-- Usuario de Skype del usuario -->
                <li><i class="fa-regular fa-comments"></i> <strong>Skype:</strong> john.doe</li>
                <!-- Correo electrónico del usuario -->
                <li><i class="fa-regular fa-envelope"></i> <strong>Email:</strong> john.doe@example.com</li>
            </ul>
        </div>

        <!-- Sección de equipos en los que participa el usuario -->
        <div class="section">
            <!-- Título de la sección -->
            <h3>TEAMS</h3>
            <!-- Lista con los equipos en los que está el usuario -->
            <ul>
                <!-- Primer equipo con el número de miembros -->
                <li><strong>Backend Developer (123 Members)</strong></li>
                <!-- Segundo equipo con el número de miembros -->
                <li><strong>VueJS Developer (98 Members)</strong></li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/styles/_variables.scss";

.about-card {

    width: 400px;
    height: 450px;
    margin-left: 75px;
    padding: 1rem;
    background-color: $secondary-color;
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px #adadad;
    margin-bottom: 1rem;

    h3 {
        font-size: 12PX;
        color: $secondary-title;
        margin-bottom: 1rem;
    }

    .section {
        margin-bottom: 1rem;

        ul {
            padding: 0;
            list-style: none;

            li {
                margin-bottom: 0.5rem;
                font-weight: 500;
                font-size: 0.9rem;
                color: $secondary-title;

                i {
                    margin-right: 0.5rem;
                    color: $secondary-title;
                }

                strong {
                    color: $secondary-title;
                }
            }
        }
    }
}
</style>