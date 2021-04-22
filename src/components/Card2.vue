<template>
  <v-card :color="color" dark>
    <div class="d-flex flex-no-wrap">
      <v-avatar class="ma-0" size="125" tile>
        <v-img v-if="image" :src="image"></v-img>
      </v-avatar>
      <div>
        <v-card-title class="text-h5" v-text="title"></v-card-title>
        <v-card-subtitle v-text="title"></v-card-subtitle>
        <v-card-actions>
          <v-btn text> Open </v-btn>
        </v-card-actions>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'Card2',
  props: {
    title: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
