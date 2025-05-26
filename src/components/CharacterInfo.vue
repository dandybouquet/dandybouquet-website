<template>
  <v-card density="compact" class="pa-1" height="100%">
    <div class="d-flex flex-row align-stretch">
      <!-- Images -->
      <v-sheet min-width="150px" height="100%">
        <v-carousel
          width="100%"
          height="100%"
          hide-delimiters
          :show-arrows="false"
          cycle
          interval="6000"
        >
          <v-carousel-item v-for="image in oc.images" cover>
            <ImageCard :image="image" @click="viewImage(image, oc.images)">
            </ImageCard>
          </v-carousel-item>
        </v-carousel>

        <v-btn
          v-if="oc.refs"
          density="compact"
          color="primary"
          @click="viewImage(oc.refs[0], oc.refs)"
          >View Refsheet{{ oc.refs.length > 1 ? "s" : "" }}
        </v-btn>
      </v-sheet>

      <!-- Details -->
      <div class="d-flex flex-column">
        <v-card-title
          >{{ oc.name }}
          <v-divider v-if="$vuetify.display.xs" />
          <v-chip
            v-for="tag in oc.tags"
            color="primary"
            variant="tonal"
            density="compact"
          >
            {{ tag }}
          </v-chip>
        </v-card-title>

        <v-card-subtitle
          >Design by
          <a :href="designerUrl">{{ designerName }}</a></v-card-subtitle
        >

        <v-divider class="mt-2"></v-divider>

        <v-card-text class="pa-2">
          <p v-for="line in oc.description">{{ line }}</p>
        </v-card-text>
      </div>
    </div>
  </v-card>

  <ImageViewer ref="imageViewer"></ImageViewer>
</template>

<script>
import { ARTISTS } from "@/artworks";
import ImageCard from "@/components/ImageCard.vue";
import ImageViewer from "@/components/ImageViewer.vue";

export default {
  props: { oc: null },
  data: function () {
    return {};
  },
  computed: {
    designer() {
      return ARTISTS[this.oc.designer];
    },
    designerUrl() {
      return ARTISTS[this.oc.designer].url;
    },
    designerName() {
      return ARTISTS[this.oc.designer].name;
    },
  },
  methods: {
    viewImage(image, imageList) {
      const index = imageList.indexOf(image);
      this.$refs.imageViewer.open(imageList, index);
    },
  },
};
</script>
