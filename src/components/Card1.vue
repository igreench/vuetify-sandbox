<template>
  <v-card color="blue lighten-3" width="200" height="200" class="my-2 mx-auto">
    <v-col class="pa-0 fill-height" justify="center" align="center">
      <v-row class="ma-0 fill-height" justify="center" align="center">
        <v-col class="pa-0">
          <div class="headline font-weight-thin white--text">
            {{ localMessage }}
          </div>
          <div v-if="localCaption" class="caption white--text">
            {{ localCaption }}
          </div>
          <v-btn color="primary" depressed @click="change">Change</v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-card>
</template>

<script>
export default {
  name: "Card1",
  props: {
    message: {
      type: String,
      required: false,
    },
    caption: {
      type: String,
      required: false,
    },
  },
  watch: {
    message: {
      immediate: true,
      handler(value) {
        this.localMessage = value;
      },
    },
    caption: {
      immediate: true,
      handler(value) {
        this.localCaption = value;
      },
    },
  },
  data: () => ({
    localMessage: "",
    localCaption: "",
  }),
  methods: {
    change() {
      this.localMessage += "!";
      this.$emit("change", this.localMessage);
    },
  },
};
</script>

<style scoped></style>
