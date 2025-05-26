<template>
  <v-card density="compact" class="pa-0" height="100%">
    <div class="d-flex flex-row fill-width">
      <ImageCard
        v-for="image in tool.images"
        :image="image"
        width="100px"
        class="ma-1"
        :hideArtist="true"
        @click="viewImage(image, tool.images)"
      ></ImageCard>
      <!-- <v-img
        v-for="image in tool.images"
        :src="image.full"
        aspect-ratio="1"
        style="max-width: 120px; cursor: pointer"
        class="ma-1"
        @click="viewImage(image, tool.images)"
      /> -->
      <div class="d-flex flex-column">
        <v-card-title>{{ tool.title }}</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <p v-for="line in tool.description">
            {{ line }}
          </p>
        </v-card-text>
      </div>
    </div>
  </v-card>

  <ImageViewer ref="imageViewer"></ImageViewer>
</template>

<script>
import { ABOUT } from "@/about";
import ImageViewer from "./ImageViewer.vue";
import ImageCard from "./ImageCard.vue";

export default {
  props: { tool: null },
  data: function () {
    return {};
  },
  methods: {
    viewImage(image, imageList) {
      const index = imageList.indexOf(image);
      this.$refs.imageViewer.open(imageList, index);
    },
  },
};
</script>
