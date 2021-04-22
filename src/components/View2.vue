<template>
  <v-col v-if="items1 && items2" class="mx-auto" style="max-width: 600px">
    <Card2
      class="my-1"
      v-for="(item, i) of items1"
      :key="`col1-${i}`"
      :title="item.title"
      :image="item.image"
      :color="item.color"
    />
    <div class="ma-10"></div>
    <Card2
      class="my-1"
      v-for="(item, i) of items2"
      :key="`col2-${i}`"
      :title="item.title"
      :image="item.image"
      :color="item.color"
    />
  </v-col>
</template>

<script>
import Card2 from './Card2';

export default {
  name: 'View2',
  components: { Card2 },
  computed: {
    items1() {
      return this.$apis.SampleApi1.getCardItems1();
    },
    items2() {
      return this.$apis.SampleApi1.getCardItems2();
    },
  },
  async mounted() {
    this.$apis.SampleApi1.loadSampleCardItems1().then(() => {});
    this.$apis.SampleApi1.loadSampleCardItems2().then(() => {});
  },
};
</script>
