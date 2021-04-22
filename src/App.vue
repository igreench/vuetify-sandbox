<template>
  <v-app v-if="items">
    <v-app-bar app flat>
      <v-tabs show-arrows>
        <v-tab
          v-for="(item, i) in items"
          :key="`tab-${i}`"
          :to="item.toLowerCase()"
        >
          {{ item.replace(".vue", "") }}
        </v-tab>
      </v-tabs>
    </v-app-bar>
    <v-main class="grey lighten-3">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import util from "./util";
export default {
  data: () => ({
    items: null,
  }),
  async mounted() {
    this.items = (await util.getViewComponentsNames()).map((el) =>
      el.toLowerCase().replace(".vue", "")
    );
  },
};
</script>