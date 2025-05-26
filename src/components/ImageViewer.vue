<template>
  <v-dialog
    ref="dialog"
    :model-value="visible"
    width="100%"
    height="100%"
    fullscreen
    scrim="#222222"
    opacity="75%"
    persistent
    close-on-back
    @keydown.left.exact="prev"
    @keydown.right.exact="next"
    @keydown.esc="close"
  >
    <v-toolbar density="compact">
      <v-toolbar-title v-if="artist != null" :key="art.full">
        By
        <a :href="artist.url">{{ artist.name }}</a
        >{{ dateAppend }}
      </v-toolbar-title>
      <template v-slot:append>
        <v-divider vertical></v-divider>
        <template v-for="action in actions">
          <v-divider vertical v-if="action.divider === true"></v-divider>
          <v-btn
            v-else
            :key="action.name"
            :value="action.name"
            :title="action.text"
            :icon="action.showText ? null : action.icon"
            :prepend-icon="action.showText ? action.icon : null"
            :text="action.showText ? action.text : null"
            :target="action.target ? '_blank' : '_self'"
            link="true"
            nav="true"
            @click="action.click"
          >
          </v-btn>
        </template>
      </template>
    </v-toolbar>

    <v-carousel
      v-if="!empty"
      v-model="index"
      height="100%"
      hide-delimiters=""
      :show-arrows="artworks.length > 1"
      v-bind="$attrs"
    >
      <v-window-item class="v-carousel-item" v-for="art in artworks">
        <ArtImage :image="art" @click="close"></ArtImage>
      </v-window-item>
    </v-carousel>
  </v-dialog>
</template>

<script>
import { ARTISTS, DEFAULT_ARTIST } from "@/artworks";
import ArtImage from "./ArtImage.vue";

export default {
  props: {},
  data: function () {
    return {
      visible: false,
      photos: [],
      index: 0,
    };
  },

  computed: {
    empty() {
      return this.artworks.length == 0;
    },
    art() {
      return this.empty ? null : this.artworks[this.index];
    },
    dateAppend() {
      if (this.art.date) {
        const date = new Date(Date.parse(this.art.date));
        const dateStr = date.toLocaleDateString();
        return ` (${dateStr})`;
      }
      return "";
    },
    artist() {
      if (!this.empty && this.art.artist != null)
        return ARTISTS[this.art.artist];
      return DEFAULT_ARTIST;
    },
    actions() {
      return [
        {
          name: "prev",
          icon: "mdi-arrow-left",
          text: "Previous Image",
          click: () => {
            this.prev();
          },
        },
        {
          name: "next",
          icon: "mdi-arrow-right",
          text: "Next Image",
          click: () => {
            this.next();
          },
        },
        { divider: true },
        {
          name: "open-in-new",
          icon: "mdi-open-in-new",
          text: "Open Image in New Tab",
          click: () => {
            this.openInNewTab();
          },
        },
        { divider: true },
        {
          name: "close",
          icon: "mdi-close",
          text: "Close",
          click: () => {
            this.close();
          },
        },
      ];
    },
  },

  watch: {
    index: function () {
      this.$emit("index-changed");
    },
  },

  methods: {
    open(artworks, index) {
      this.artworks = artworks;
      this.index = index;
      this.visible = true;
      this.$emit("opened");
    },
    close() {
      this.visible = false;
      this.$emit("closed");
    },
    next() {
      this.index = (this.index + 1) % this.artworks.length;
    },
    prev() {
      this.index =
        (this.index + this.artworks.length - 1) % this.artworks.length;
    },
    openSource() {
      if (this.art.source != null) {
        window.open(this.art.source, "_blank");
      } else if (this.artist.url != null) {
        window.open(this.artist.url, "_blank");
      }
    },
    openInNewTab() {
      window.open(this.art.full, "_blank");
    },
    getSrcUrl(art) {
      return art.src;
    },
    getThumbUrl(art) {
      return art.src;
    },
  },

  mounted() {},
};
</script>
