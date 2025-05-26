<template>
  <div class="d-flex flex-row">
    <h2>My Artwork Gallery</h2>
    <div class="w-50"></div>

    <v-switch
      v-model="nsfwEnabled"
      density="compact"
      color="primary"
      label="Show Mature Content"
      @click="confirmNsfwToggle"
      readonly
    >
    </v-switch>
  </div>

  <v-dialog max-width="500" v-model="showDialog">
    <v-card title="Show Mature Content">
      <v-card-text>
        Artwork may contain content of an adult nature, including nudity and
        sexual themes. You must be 18 years or older to continue.
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          text="Accept"
          variant="flat"
          color="primary"
          @click="nsfwDialogAccept"
        ></v-btn>
        <v-btn text="Cancel" variant="flat" @click="nsfwDialogCancel"></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-card density="compact">
    <v-infinite-scroll
      direction="vertical"
      class="ma-0 pa-0"
      :items="artworks"
      :key="nsfwEnabled ? 'nsfw' : 'sfw'"
      @load="loadMoreImages"
    >
      <template v-slot:empty>.</template>

      <v-row dense class="ma-0 pa-0" align="center" style="width: 100%">
        <v-col
          v-for="art in filteredArtworks"
          cols="4"
          xs="6"
          sm="4"
          md="3"
          lg="2"
        >
          <ImageCard
            :image="art"
            :hideArtist="true"
            @click="viewImage(art)"
          ></ImageCard>
        </v-col>
      </v-row>
    </v-infinite-scroll>
  </v-card>

  <ImageViewer ref="imageViewer"></ImageViewer>
</template>

<script>
import ImageViewer from "@/components/ImageViewer.vue";
import { ALL_ARTWORKS } from "@/artworks";
import ImageCard from "@/components/ImageCard.vue";

export default {
  component: [],
  data: function () {
    return {
      showDialog: false,
      artworks: [],
      nsfwEnabled: false,
      loadPageSize: 24,
    };
  },
  computed: {
    filteredArtworks() {
      return this.artworks.filter((image) => this.nsfwEnabled || !image.nsfw);
    },
  },
  methods: {
    viewImage(art) {
      // Opens image viewer
      const listOfImages = this.filteredArtworks;
      const index = listOfImages.indexOf(art);
      this.$refs.imageViewer.open(listOfImages, index);
    },
    confirmNsfwToggle() {
      // On click NSFW toggle, either opens dialog to confirm or turns off NSFW
      if (!this.nsfwEnabled) {
        this.showDialog = true;
      } else {
        this.nsfwEnabled = false;
        this.clear();
      }
    },
    nsfwDialogCancel() {
      // Cancels enabling NSFW
      this.showDialog = false;
    },
    nsfwDialogAccept() {
      // Accepts enabling NSFW
      this.clear();
      this.nsfwEnabled = true;
      this.showDialog = false;
    },
    clear() {
      this.artworks = [];
    },
    loadMoreImages({ done }) {
      // Add more images to the list of images
      let count = 0;
      let index = this.artworks.length;
      while (count < this.loadPageSize && index < ALL_ARTWORKS.length) {
        const image = ALL_ARTWORKS[index];
        this.artworks.push(image);
        index++;
        if (this.nsfwEnabled || !image.nsfw) {
          count++;
        }
      }

      // Check if all images are loaded
      if (index == ALL_ARTWORKS.length) {
        done("empty");
      } else {
        done("ok");
      }
    },
  },
  mounted() {},
};
</script>

<style></style>
