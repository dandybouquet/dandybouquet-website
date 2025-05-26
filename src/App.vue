<template>
  <v-app class="bg">
    <v-alert type="warning" max-height="50">
      This website is under development!!
    </v-alert>

    <div class="d-flex flex-column align-center ma-2">
      <v-sheet
        class="the-page"
        border
        rounded
        color="#00000080"
        style="width: 100%"
      >
        <AppHeader></AppHeader>

        <v-main>
          <router-view />
        </v-main>
      </v-sheet>
      <AppFooter></AppFooter>
    </div>
  </v-app>
</template>

<script setup>
import AppHeader from "@/components/AppHeader";
import AppFooter from "./components/AppFooter.vue";
</script>

<style>
/* This makes the page have a fixed width, until screen is too small */
@media (min-width: 1000px) {
  .the-page {
    width: 1000px !important;
  }
}

.bg {
  background: url("/images/bg.png") no-repeat center center fixed !important;
  background-size: cover;
  height: 100%;
}
</style>
