<template>
  <v-layout>
    <v-card @click="sendBoardId(board._id)" min-width="300px" hover elevation-5 class="pa-3 mb-3 blue">
      <v-card-title >
        <h1>{{ board.name }}</h1>
      </v-card-title>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  props: ['board'],
  methods: {
    sendBoardId(id) {
      return this.$emit('boardId', id);
    },
  },
};
</script>

<style>

</style>
