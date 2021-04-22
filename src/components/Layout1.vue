<template>
  <v-main class="grey lighten-3">
    <v-container>
      <v-row>
        <v-col cols="4">
          <slot name="slot1"></slot>
        </v-col>
        <v-col cols="4">
          <slot name="slot2"></slot>
        </v-col>
        <v-col cols="4">
          <slot name="slot3"></slot>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'Layout1',
};
</script>

<style scoped></style>
