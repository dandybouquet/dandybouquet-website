<template>
  <!-- <h2>My Links:</h2>
  <v-list>
    <template v-for="button in links">
      <v-list-item :prepend-icon="button.icon" :href="button.url">
        {{ button.text }}
      </v-list-item>
    </template>
  </v-list> -->
  <div class="d-flex flex-row ma-1">
    <v-row dense align="stretch">
      <!-- Information -->
      <v-col cols="12" sm="6">
        <v-card title="What I Draw" height="100%">
          <v-card-text
            >My passion is drawing ponies and creating artworks that I'm proud
            of. I've been in the pony fandom since 2014, and have been posting
            art since 2019. I also draw other animals, furries, or humans on
            occasion. I like to make character-focused artworks, with cute poses
            and bold colors. I do a mix of digital art and traditional art in
            various mediums, such as marker, acrylic, and watercolor.
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Art Post Links -->
      <v-col cols="7" sm="3">
        <v-card title="Where I Post Art" height="100%">
          <v-list density="compact" class="pa-0 mx-0 px-2">
            <v-list-item
              v-for="link in links.filter((l) => l.postArt)"
              class="px-0"
            >
              <v-chip
                density="compact"
                color="secondary"
                variant="flat"
                :href="link.url"
                >{{ !link.nsfwUrl ? link.text : `${link.text} (SFW)` }}</v-chip
              >
              <v-chip
                v-if="link.nsfwUrl"
                density="compact"
                variant="tonal"
                color="secondary"
                class="ml-2"
                @click="openNsfwLink(link.nsfwUrl)"
                >(NSFW)</v-chip
              >
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>

      <!-- Contact Info -->
      <v-col cols="5" sm="3">
        <v-card title="Contact Me" height="100%">
          <v-card-text>
            <ul>
              <li>Discord (@DandyBouquet)</li>
              <li>
                Twitter/X (<a href="https://x.com/DandyBouquet">@DandyBouquet</a
                >)
              </li>
              <li>
                Bluesky (<a
                  href="https://bsky.app/profile/dandybouquet.bsky.social"
                  >@dandybouquet.bsky.social</a
                >)
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
  <v-card class="ma-1 pa-2" title="Art Portfolio">
    <div class="d-flex flex-column justify-center align-center">
      <!-- Gallery Sample -->
      <v-row dense class="ma-0 pa-0" align="center" style="width: 100%">
        <v-col v-for="art in artworks" cols="4" xs="6" sm="4" md="3" lg="2">
          <ImageCard
            :image="art"
            :hideArtist="true"
            height="200"
            @click="viewImage(art)"
          ></ImageCard>
        </v-col>
      </v-row>

      <!-- See More -->
      <div class="d-flex flex-crow justify-center mt-2">
        <v-btn to="/gallery" class="ma-1" variant="outlined">See More </v-btn>
      </div>
    </div>
  </v-card>

  <ImageViewer ref="imageViewer"></ImageViewer>

  <v-dialog max-width="500" v-model="showDialog" :key="nsfwLinkUrl">
    <v-card title="Mature Content Warning">
      <v-card-text>
        Navigating to: {{ nsfwLinkUrl }}
        <v-divider class="my-2"></v-divider>
        This link contains content of an adult nature, including nudity and
        sexual themes. You must be 18 years or older to continue.
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          text="Continue"
          color="primary"
          variant="flat"
          :href="nsfwLinkUrl"
        ></v-btn>
        <v-btn text="Back" variant="flat" @click="showDialog = false"></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import ImageViewer from "@/components/ImageViewer.vue";
import { LINKS } from "@/about";
import { FEATURED_ARTWORKS } from "@/artworks";

export default {
  component: [],
  data: function () {
    return {
      artworks: FEATURED_ARTWORKS.slice(0, 6),
      links: LINKS,
      nsfwLinkUrl: "",
      showDialog: false,
    };
  },
  methods: {
    viewImage(art) {
      const index = this.artworks.indexOf(art);
      this.$refs.imageViewer.open(this.artworks, index);
    },
    openNsfwLink(url) {
      this.showDialog = true;
      this.nsfwLinkUrl = url;
    },
  },
};
</script>
