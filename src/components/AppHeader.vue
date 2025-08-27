<template>
  <v-row justify="center" align="center" class="ma-0">
    <!-- Avatar -->
    <v-col cols="12" sm="4">
      <v-row justify="center" class="ma-0">
        <v-img
          apsect-ratio="1"
          :height="$vuetify.display.xs ? 150 : 230"
          src="/images/avatar.png"
        >
        </v-img>
      </v-row>
    </v-col>

    <!-- Description -->
    <v-col cols="12" sm="8">
      <div class="d-flex flex-column align-center">
        <!-- Name -->
        <IconLogoFull height="90px"></IconLogoFull>
        <!-- <h1 class="d-flex flex-row align-center">
          <IconBouquet width="32" class="mx-3"></IconBouquet>
          Dandy Bouquet
          <IconBouquet width="32" class="mx-3"></IconBouquet>
        </h1> -->

        <!-- Description -->
        <p class="my-3">
          Hi I'm Dandy! I like to draw cute ponies and colorful creatures.
          Traditional and digital artist.
        </p>

        <!-- Links -->
        <div class="d-flex flex-row">
          <template v-for="button in links">
            <v-hover>
              <template v-slot:default="{ isHovering, props }">
                <div
                  v-bind="props"
                  :class="{
                    zoom: isHovering,
                    'link-button': true,
                    'ma-1': true,
                  }"
                >
                  <v-btn
                    v-if="button.image != null"
                    icon
                    :href="button.url"
                    :title="button.text"
                  >
                    <v-img :src="button.image" width="25" />
                  </v-btn>
                  <v-btn
                    v-else
                    :icon="button.icon"
                    :href="button.url"
                    :title="button.text"
                  >
                  </v-btn>
                </div>
              </template>
            </v-hover>
          </template>
        </div>
      </div>
      <!--     
        <v-card title="Dandy Bouquet" subtitle="Artist" height="100%">
          <v-card-text
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.</v-card-text
          >
        </v-card> -->
    </v-col>

    <!-- </v-sheet> -->
  </v-row>

  <v-divider class="my-2" />

  <!-- Navigation Buttons -->
  <div class="d-flex flex-wrap flex-row justify-center">
    <v-btn
      v-for="button in navButtons"
      :prepend-icon="button.icon"
      :to="button.to"
      class="ma-1"
      color="primary"
      >{{ button.text }}
    </v-btn>
  </div>

  <v-divider class="my-2" />
</template>

<script>
import { LINKS } from "@/about";
import IconBluesky from "./icons/IconBluesky.vue";
import IconLogoFull from "./icons/IconLogoFull.vue";

export default {
  component: [IconBluesky],

  data: function () {
    return {
      navButtons: [
        {
          text: "Home",
          icon: "mdi-home",
          to: "/",
        },
        {
          text: "Gallery",
          icon: "mdi-image-album",
          to: "/gallery",
        },
        {
          text: "Characters",
          icon: "mdi-horse",
          to: "/characters",
        },
        {
          text: "Commissions",
          icon: "mdi-currency-usd",
          to: "/commissions",
        },
        {
          text: "Merch",
          icon: "mdi-basket",
          to: "/merch",
        },
        {
          text: "Art Supplies",
          icon: "mdi-information",
          to: "/about",
        },
      ],
      links: LINKS,
    };
  },
};
</script>
<style>
.main {
  max-width: 1000px;
}

.link-button {
  transition: all 0.2s;
  &.zoom {
    transform: scale(1.2);
  }
}
</style>
