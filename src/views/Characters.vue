<template>
  <v-row dense class="ma-0 pa-0" align="center">
    <v-col cols="12">
      <v-card v-for="oc in charData" class="ma-2">
        <div class="d-flex flex-row">
          <v-sheet width="200px" height="200px">
            <v-carousel
              width="100%"
              height="100%"
              :show-arrows="false"
              cycle
              interval="6000"
            >
              <v-carousel-item
                v-for="image in oc.images"
                :src="image"
                cover
              ></v-carousel-item>
            </v-carousel>
          </v-sheet>
          <!-- <v-img
            :src="oc.images[0]"
            aspect-ratio="1"
            style="max-width: 150px; cursor: pointer"
            class="mx-2"
            @click="openCharacterPage(oc)"
          /> -->
          <div class="d-flex flex-column">
            <v-card-title>{{ oc.name }}</v-card-title>
            <v-divider></v-divider>
            <v-card-text>{{ oc.description }}</v-card-text>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { CHARACTERS } from "@/characters";

export default {
  component: [],
  data: function () {
    return {
      charData: CHARACTERS,
    };
  },
  methods: {
    openCharacterPage(oc) {
      window.location.href = `/characters/${oc.key}`;
    },
  },
};
</script>
