<template>
  <h2>My Merchandise</h2>

  <v-row dense class="ma-0 pa-0">
    <v-col cols="12">
      <v-alert type="info">
        Please note that I do not do online sales. I only vend at a few
        conventions.
      </v-alert>
    </v-col>

    <v-col cols="12">
      <v-card density="compact" class="pa-2">
        <v-card-text>
          <p>
            I focus on selling my original paintings, drawings, and paper
            crafts. Art mediums range from acrylic, marker, watercolor, gouache,
            and papercraft. Designs also available as prints/posters, stickers,
            keychains, and more.
          </p>

          <v-divider class="my-4"></v-divider>
          <p>Conventions I've vended at (or will be vending at):</p>
          <p v-for="year in vendingSchedule">
            {{ year.year }}:
            <template v-for="con in year.cons">
              <a :href="con.url">{{ con.name }}</a
              >,
            </template>
          </p>
          <v-divider class="my-4"></v-divider>

          <p>TODO.</p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { CONVENTIONS, VENDING_SCHEDULE } from "@/merch";

export default {
  data: function () {
    return {
      vendingSchedule: [],
    };
  },
  computed: {},
  methods: {},
  mounted() {
    for (const [year, cons] of Object.entries(VENDING_SCHEDULE)) {
      let info = { year: year, cons: [] };
      this.vendingSchedule.push(info);
      cons.forEach((con) => {
        info.cons.push(CONVENTIONS[con]);
      });
    }
  },
};
</script>
