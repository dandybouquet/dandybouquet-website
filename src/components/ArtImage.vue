<template>
  <v-img :src="full" :lazy-src="thumb" aspect-ratio="1" v-bind="$attrs">
    <template v-slot:placeholder>
      <v-row class="fill-height ma-0" align="center" justify="center">
        <v-progress-circular indeterminate> </v-progress-circular
      ></v-row>
    </template>
  </v-img>
</template>

<script>
import { ARTISTS, DEFAULT_ARTIST } from "@/artworks";

export default {
  component: [],
  props: { image: null },
  data: function () {
    return {};
  },
  computed: {
    full() {
      return this.image.full ? this.image.full : this.image;
    },
    thumb() {
      return this.image.thumb ? this.image.thumb : this.full;
    },
    artist() {
      if (this.image.artist) return ARTISTS[this.image.artist];
      return DEFAULT_ARTIST;
    },
  },
  methods: {},
  mounted() {},
};
</script>
