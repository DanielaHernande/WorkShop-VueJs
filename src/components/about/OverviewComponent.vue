<script lang="ts" setup></script>

<template>
    <!-- Overview section displaying summary statistics -->
    <div class="section">
        <!-- Title for the overview section -->
        <h3>OVERVIEW</h3>
        <!-- List of overview statistics -->
        <ul>
            <!-- Item showing the number of tasks compiled -->
            <li><i class="fa-solid fa-check"></i><strong>Task Compiled: </strong> 13.5k</li>
            <!-- Item showing the number of connections -->
            <li><i class="fa-solid fa-user-group"></i><strong>Connections: </strong>897</li>
            <!-- Item showing the number of projects compiled -->
            <li><i class="fa-solid fa-grip"></i><strong>Projects Compiled: </strong>146</li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/styles/_variables.scss";

.section {
    width: 400px;
    height: 140px;
    padding: 1rem;
    margin-top: 50px;
    margin-left: 75px;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px #adadad;
    background-color: $secondary-color;

    h3 {
        font-size: 12PX;
        margin-bottom: 1rem;
        color: $secondary-title;
    }

    ul {
        padding: 0;
        list-style: none;

        li {
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
            color: $secondary-title;

            i {
                font-size: 13px;
                margin-right: 0.8rem;
                color: $secondary-title;
            }

            strong {
                    color: $secondary-title;
            }
        }
    }
}
</style>