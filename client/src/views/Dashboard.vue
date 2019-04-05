<template>
  <h1>Dashboard {{ current.email }}
  </h1>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('users', ['current'])
  },
  methods: {
    // super() {
    //   console.log(this.current.email);
    //   console.log(this.current.name);
      
    // }
  },
  created() {
    // this.super();
  }
};
</script>

<style>

</style>
