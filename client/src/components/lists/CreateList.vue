<template>
  <v-layout>
    <v-form
      ref="form"
      v-model="valid"
      @submit.prevent="onCreate"
      @keyup.enter="onCreate">

      <v-text-field
        v-model="name"
        ref="name"
        :counter="20"
        :rules="[() => !!name || 'This field is required']"
        label="Create a List"
        required>
      </v-text-field>
    </v-form>
  </v-layout>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      valid: false,
      name: null,
    };
  },
  props: ['boardId'],
  methods: {
    ...mapActions('lists', { createList: 'create' }),

    onCreate() {
      if (this.$refs.form.validate()) {
        // TODO: Setup validation
        const list = {
          name: this.name.toString().trim(),
          boardId: this.boardId,
        };
        this.createList(list);
        // TODO: Raise notification
        this.name = null;
        this.$refs.form.reset();
      }
    },

  }
}
</script>

<style>

</style>
