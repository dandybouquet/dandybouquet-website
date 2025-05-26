<template>
  <h2>My Characters</h2>

  <v-row dense class="ma-0 pa-0" align="stretch">
    <!-- Global Permissions -->
    <v-col cols="12">
      <v-alert type="info">
        Global Permissions: Any fan art is appreciated! Safe-for-work or
        suggestive themes are allowed. Please ask first if you want to draw
        something more explicit. You may draw my characters as non-anthro or
        anthro, or even as other species if you'd like!
      </v-alert>
    </v-col>

    <!-- Character cards -->
    <v-col v-for="oc in charData" cols="12" md="6">
      <CharacterInfo :oc="oc"></CharacterInfo>
    </v-col>
  </v-row>
</template>

<script>
import { CHARACTERS } from "@/characters";
import CharacterInfo from "@/components/CharacterInfo.vue";

export default {
  component: [],
  data: function () {
    return {
      charData: CHARACTERS,
    };
  },
  methods: {},
};
</script>
