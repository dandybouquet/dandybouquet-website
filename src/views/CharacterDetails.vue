<template>
  <v-btn prepend-icon="mdi-arrow-left" to="/characters">All Characters</v-btn>

  <v-card v-if="oc !== null" class="ma-2">
    <div class="d-flex flex-row">
      <v-img
        :src="oc.images[0]"
        aspect-ratio="1"
        style="max-width: 150px; cursor: pointer"
        class="mx-2"
      />
      <div class="d-flex flex-column">
        <v-card-title>{{ oc.name }}</v-card-title>
        <v-divider></v-divider>
        <v-card-text>{{ oc.description }}</v-card-text>
      </div>
    </div>
  </v-card>
</template>

<script>
import { CHARACTERS } from "@/characters";
import router from "@/router";

export default {
  component: [],
  props: {},
  data: function () {
    return { oc: null };
  },
  mounted() {
    router.isReady().then(() => {
      const key = this.$route.params.key;
      const index = CHARACTERS.findIndex((oc) => oc.key == key);
      if (index >= 0) {
        this.oc = CHARACTERS[index];
      }
    });
  },
};
</script>
