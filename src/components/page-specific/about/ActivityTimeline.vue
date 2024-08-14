<script lang="ts" setup></script>

<template>
  <!-- Timeline component showing different activities -->
  <div class="timeline">
    <!-- Header of the timeline with an icon and title -->
    <h2><i class="fa-solid fa-chart-simple">Activity Timeline</i></h2>
    <!-- List of timeline events -->
    <ul>
      <!-- First event in the timeline -->
      <li>
        <!-- Dot representing the event type and line connecting events -->
        <span class="dot purple"></span>
        <span class="linea"></span>

        <div class="content">
          <div class="details">
            <!-- Event description and action -->
            <p><strong>12 Invoices have has been paid</strong></p>
            <p>Invoices have been paid to the company</p>
            <button class="fw-bold">
              <!-- Button to download the invoice -->
              <i class="fa-regular fa-file-pdf fw-bold"></i> Invoice.pdf
            </button>
          </div>
          <!-- Time when the event occurred -->
          <span class="time">12 min ago</span>
        </div>
      </li>

      <!-- Second event in the timeline -->
      <li>
        <!-- Dot representing the event type and line connecting events -->
        <span class="dot green"></span>
        <span class="linea"></span>

        <div class="content">
          <div class="details">
            <!-- Event description and meeting details -->
            <p><strong>Client Meeting</strong></p>
            <p>Project meeting with John @10:15am</p>

            <!-- Avatar and details of the client -->
            <div class="avatar-contenedor">
              <img src="/public/img/b.jpg" alt="avatar" class="me-2" />

              <div>
                <p><strong>Lester McCarthy (Client)</strong></p>
                <p>CEO of Pixinvent</p>
              </div>
            </div>
          </div>
          <!-- Time when the event occurred -->
          <span class="time">45 min ago</span>
        </div>
      </li>

      <!-- Third event in the timeline -->
      <li>
        <!-- Dot representing the event type and line connecting events -->
        <span class="dot blue"></span>
        <span class="linea"></span>

        <div class="content">
          <div class="details">
            <!-- Event description and project details -->
            <p><strong>Create a new project for client</strong></p>
            <p>6 team members in a project</p>

            <!-- Avatars of team members involved in the project -->
            <div class="avatar-contenedor">
              <img src="/public/img/avatar1.jpg" alt="avatar1" />
              <img src="/public/img/avatar2.jpg" alt="avatar2" />
              <img src="/public/img/a.jpg" alt="avatar3" />
              <span class="additional-members fw-bold">+3</span>
            </div>
          </div>
          <!-- Time when the event occurred -->
          <span class="time">2 Day Ago</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/styles/_variables.scss";

.timeline {
  max-height: 400px;
  max-width: 934px;
  padding: 1rem;
  border-radius: 8px;
  background-color: $secondary-color;
  box-shadow: 0 2px 8px $shadow-color;

  p {
    font-weight: 400;
  }

  h2 {
    color: $secondary-title;
    font-size: 0.8rem;
    margin-bottom: 1rem;
    font-weight: 900px;

    .fa-chart-simple::before {
      margin-right: 20px;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      align-items: start;
      margin-bottom: 1rem;
      position: relative;

      .dot {
        left: 0;
        width: 12px;
        top: 0.5rem;
        height: 12px;
        border-radius: 50%;
        margin-right: 1rem;
        position: absolute;
      }

      .purple {
        background-color: rgb(150, 120, 206);
        box-shadow: 0 0 4px #adadad;
      }
      .green {
        background-color: rgb(141, 204, 141);
        box-shadow: 0 0 4px #adadad;
      }
      .blue {
        background-color: rgb(70, 148, 238);
        box-shadow: 0 0 4px #adadad;
      }

      .content {
        width: 100%;
        display: flex;
        padding-left: 2rem;
        align-items: center;
        justify-content: space-between;

        .details {
          flex: 1;
        }

        p {
          line-height: 1.4;
          margin: 0.25rem 0;
          font-size: 0.95rem;
          color: $secondary-title;
        }

        button {
          border: none;
          display: flex;
          font-size: 0.9rem;
          border-radius: 5px;
          align-items: center;
          padding: 0.5rem 1rem;
          color: $secondary-title;
          background-color: $button-title-color;

          i {
            color: red;
            margin-right: 0.5rem;
          }
        }

        .avatar-contenedor {
          display: flex;
          align-items: center;
          margin-top: 0.5rem;

          img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            margin-right: -10px;
            border: 2px solid $secondary-color;
          }

          div {
            display: flex;
            flex-direction: column;
          }

          .additional-members {
            width: 32px;
            height: 32px;
            display: flex;
            font-size: 0.9rem;
            border-radius: 50%;
            align-items: center;
            justify-content: center;
            color: $secondary-title;
            background-color: $button-title-color;
          }
        }
      }
      .time {
        margin-left: auto;
        font-size: 0.85rem;
        color: $secondary-title;
      }
    }
  }
}
</style>
