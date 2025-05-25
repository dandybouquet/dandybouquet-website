<template>
  <div class="pa-100">
    <v-row justify="center" class="ma-0">
      <!-- Avatar -->
      <v-col cols="6">
        <v-card>
          <v-row justify="center" class="ma-0">
            <v-avatar
              apsect-ratio="1"
              maxHeight="200"
              image="https://derpicdn.net/avatars/2023/3/31/6b0ee100-d01c-11ed-9252-02420a050004.jpg"
            >
            </v-avatar>
          </v-row>
        </v-card>
      </v-col>

      <!-- Description -->
      <v-col cols="6">
        <div class="d-flex flex-column align-center">
          <h1 class="ma-2 pa-2">Dandy Bouquet</h1>
          <v-icon>mdi-flower</v-icon>
          <p class="ma-2 pa-2">
            Hi I'm Dandy! I like to draw cute ponies and colorful creatures.
            Traditional and digital artist.
          </p>
          <div class="d-flex flex-row">
            <v-btn
              v-for="button in buttons"
              :icon="button.icon"
              :href="button.url"
            ></v-btn>
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
    <v-col cols="12" class="pa-0">
      <v-btn
        v-for="button in navButtons"
        :prepend-icon="button.icon"
        :to="button.to"
        class="mx-1"
        >{{ button.text }}
      </v-btn>
    </v-col>

    <v-divider class="my-2" />
  </div>
</template>

<script>
export default {
  component: [],
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
          text: "About Me",
          icon: "mdi-information",
          to: "/about",
        },
      ],
      buttons: [
        {
          text: "Twitter",
          url: "https://x.com/DandyBouquet",
          icon: "mdi-twitter",
        },
        {
          text: "Bluesky",
          url: "https://bsky.app/profile/dandybouquet.bsky.social",
          icon: "mdi-butterfly",
        },
        {
          text: "DeviantArt",
          url: "https://www.deviantart.com/dandybouquet",
          icon: "mdi-deviantart",
        },
        {
          text: "Picarto (Art Streams)",
          url: "https://picarto.tv/DandyBouquet",
          icon: "mdi-video",
        },
        {
          text: "Derpibooru (Pony art)",
          url: "https://derpibooru.org/search?q=artist%3Adandy%2C+safe",
          icon: "mdi-magic-staff",
        },
        {
          text: "Toyhouse (My Characters)",
          url: "https://toyhou.se/DandyBouquet",
          icon: "mdi-home",
        },
      ],
    };
  },
};
</script>
<style>
.main {
  max-width: 1000px;
}
</style>
