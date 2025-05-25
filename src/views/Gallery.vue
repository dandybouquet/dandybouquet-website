<template>
  <v-row dense class="ma-0 pa-0" align="center">
    <v-col v-for="art in artworks" cols="4" xs="6" sm="4" md="3" lg="2">
      <v-card @click="viewImage(art)">
        <v-img :src="art.thumb">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate> </v-progress-circular
            ></v-row>
          </template>
        </v-img>
      </v-card>
    </v-col>
  </v-row>

  <ImageViewer ref="photoViewer"></ImageViewer>
</template>

<script>
import ImageViewer from "@/components/ImageViewer.vue";
import { ARTWORKS } from "@/artworks";

export default {
  component: [],
  data: function () {
    return { artworks: ARTWORKS };
  },
  methods: {
    viewImage(art) {
      const index = this.artworks.indexOf(art);
      this.$refs.photoViewer.open(this.artworks, index);
    },
  },
  mounted() {},
};
</script>
