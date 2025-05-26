<template>
  <v-card class="d-flex flex-column">
    <v-hover>
      <template v-slot:default="{ isHovering, props }">
        <v-img
          v-bind="props"
          :src="thumb"
          cover
          aspect-ratio="1"
          :class="{ zoom: isHovering, 'gallery-image': true }"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate> </v-progress-circular
            ></v-row>
          </template>

          <v-expand-transition v-if="!hideArtist">
            <div
              v-if="isHovering"
              class="d-flex bg-black v-card--reveal"
              style="height: 40"
            >
              Art by {{ artist.name }}
            </div>
          </v-expand-transition>
        </v-img>
      </template>
    </v-hover>
  </v-card>
</template>

<script>
import { ARTISTS, DEFAULT_ARTIST } from "@/artworks";

export default {
  component: [],
  props: { image: null, hideArtist: false, cover: null, "aspect-ratio": null },
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

<style>
.gallery-image {
  .v-img__img {
    transition: all 0.2s;
  }
  &.zoom {
    .v-img__img {
      transform: scale(1.1);
    }
  }
}
</style>
