<template>
  <div class="d-flex flex-column align-center mx-10 my-5">
    <v-app style="max-width: 1000px">
      <AppHeader></AppHeader>
      <v-main>
        <router-view />
      </v-main>
    </v-app>
  </div>
</template>

<script setup>
import AppHeader from "@/components/AppHeader";
</script>
