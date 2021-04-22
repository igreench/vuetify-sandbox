<template>
  <Layout1>
    <Card1 slot="slot1" :message="message" @change="change" />
    <Card1 slot="slot2" :message="message" @change="change" />
    <Card1 slot="slot3" :message="message" @change="change" />
  </Layout1>
</template>

<script>
import Card1 from './Card1';
import Layout1 from './Layout1';

export default {
  name: 'View1',
  components: { Card1, Layout1 },
  // data() {
  //   return {
  //     message: this.$apis.SampleApi1.getMessage(),
  //   };
  // },
  computed: {
    message() {
      return this.$apis.SampleApi1.getMessage();
    },
  },
  methods: {
    change(v) {
      this.$apis.SampleApi1.changeMessage(v);
    },
  },
};
</script>
