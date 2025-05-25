<template>
  <v-alert type="info" class="mb-2">
    <div class="d-flex justify-space-between align-center">
      <p>
        Please note that I very rarely open for commissions. To check if I am
        currently open, please check my Twitter
        <a href="https://x.com/DandyBouquet">@DandyBouquet</a> or Bluesky
        <a href="https://bsky.app/profile/dandybouquet.bsky.social"
          >@dandybouquet.bsky.social</a
        >
      </p>
    </div>
  </v-alert>

  <v-row dense class="ma-0 pa-0">
    <v-col v-for="comm in offerings" :cols="comm.cols">
      <v-card density="compact" class="px-2 pb-2">
        <div class="d-flex flex-row">
          <img
            v-if="comm.type == 'row'"
            v-for="image in comm.images"
            :src="image"
            style="max-height: 150px; cursor: pointer"
            @click="viewImage(image)"
          />
          <div class="d-flex flex-column">
            <!-- Title -->
            <v-card-title>{{ comm.name }}</v-card-title>

            <v-divider></v-divider>

            <v-card-text>
              <!-- Prices -->
              <ul density="compact">
                <li v-for="line in comm.prices">
                  {{ line }}
                </li>
              </ul>
              <v-divider class="my-2"></v-divider>

              <!-- Details -->
              <ul>
                <li v-for="line in comm.details">
                  {{ line }}
                </li>
              </ul>
            </v-card-text>

            <div v-if="comm.type == 'col'" class="d-flex flex-row">
              <img
                v-for="image in comm.images"
                :src="image"
                style="max-height: 150px; cursor: pointer"
                @click="viewImage(image)"
              />
            </div>
          </div>
        </div>
      </v-card>
    </v-col>

    <v-col cols="12">
      <v-card density="compact" class="px-2 pb-2">
        <v-card-title>Terms of Service</v-card-title>
        <v-divider></v-divider>

        <v-card-text>
          <ul density="compact">
            <li v-for="line in termsOfService">
              {{ line }}
            </li>
          </ul>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { COMMISSIONS } from "@/commissions";

export default {
  component: [],
  data: function () {
    return {
      termsOfService: COMMISSIONS.termsOfService,
      offerings: COMMISSIONS.offerings,
    };
  },
  methods: {
    viewImage(url) {},
  },
};
</script>
