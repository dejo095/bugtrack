<template>
  <v-form ref="form"
    v-model="valid"
    @submit.prevent="onCreate"
    @keyup.enter="onCreate">

    <v-text-field
      v-model="name"
      :counter="20"
      :rules="[() => !!name || 'This field is required']"
      label="Create New Board"
      required></v-text-field>

  </v-form>
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
  methods: {
    ...mapActions('boards', { createBoard: 'create' }),
    onCreate() {
      if (this.$refs.form.validate()) {
        // TODO: Setup validation
        this.createBoard({ name: this.name.toString().trim() });
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
