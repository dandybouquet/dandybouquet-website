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
    @keydown.left.exact="prev"
    @keydown.right.exact="next"
    @keydown.esc="close"
  >
    <v-toolbar density="compact" :title="title">
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
      :show-arrows="!$vuetify.display.xs"
      v-bind="$attrs"
    >
      <v-window-item class="v-carousel-item" v-for="art in artworks">
        <v-img :src="art.src" :lazy-src="art.thumb" @click="close" />
      </v-window-item>
    </v-carousel>
  </v-dialog>
</template>

<script>
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
    title() {
      const date = new Date(Date.parse(this.art.date));
      const dateStr = date.toLocaleDateString();
      return `${dateStr} - ${this.art.name}`;
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
          text: "Open Source",
          showText: true,
          click: () => {
            this.openSource();
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
      if (this.art.source_urls.length > 0) {
        window.open(this.art.source_urls[0], "_blank");
      }
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
