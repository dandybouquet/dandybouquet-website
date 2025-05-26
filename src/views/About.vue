<template>
  <h2>My Art Supplies</h2>

  <v-img
    src="/images/banner.png"
    lazy-src="/thumbs/banner.jpg"
    height="100%"
    class="ma-1"
  />

  <v-row dense class="ma-0 pa-0" align="stretch">
    <v-col v-for="tool in tools" cols="12" md="6">
      <AboutCard :tool="tool" />
    </v-col>
  </v-row>
</template>

<script>
import { ABOUT } from "@/about";
import AboutCard from "@/components/AboutCard.vue";

export default {
  component: [],
  data: function () {
    return {
      tools: ABOUT.tools,
    };
  },
};
</script>
