<template>
  <v-layout column>
    <h1>Board: {{ board.name }}</h1>
    <p>Created on: {{ board.createdAt }} | updated on: {{ board.updatedAt }}</p>
  </v-layout>
</template>

<script>
export default {
  props: ['board'],
}
</script>

<style>

</style>
