<template>
  <v-col v-if="items" class="mx-auto" style="max-width: 600px">
    <Card2
      class="my-1"
      v-for="(item, i) of items"
      :key="i"
      :title="item.title"
      :image="item.image"
      :color="item.color"
    />
  </v-col>
</template>

<script>
import axios from "axios";
import Card2 from "./Card2";
export default {
  name: "View2",
  components: { Card2 },
  data() {
    return {
      items: null,
    };
  },
  async mounted() {
    this.items = [];
    const usedUrls = {};
    const colors = [
      "red",
      "pink",
      "purple",
      "deep-purple",
      "indigo",
      "blue",
      "light-blue",
      "cyan",
      "teal",
      "green",
      "light-green",
      "lime",
      "yellow",
      "amber",
      "orange",
      "deep-orange",
      "brown",
      "blue-grey",
      "grey",
    ];
    const textDataResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/albums"
    );
    await Promise.all(
      Array.from(Array(10).keys()).map(async (i) => {
        let colorDataResponse = null;
        while (true) {
          colorDataResponse = await fetch(
            "https://source.unsplash.com/random/200x200/?nature"
          );
          if (!usedUrls[colorDataResponse.url]) {
            usedUrls[colorDataResponse.url] = true;
            break;
          }
          await new Promise((r) => setTimeout(r, 100));
        }

        let color = null;
        while (true) {
          color =
            colors[Math.floor(Math.random() * colors.length)] + " darken-4";
          if (this.items.length <= 1) {
            break;
          }
          if (this.items[this.items.length - 1].color !== color) {
            break;
          }
        }
        this.items.push({
          title: textDataResponse.data[i].title,
          image: colorDataResponse.url,
          color,
        });
      })
    );
  },
};
</script>