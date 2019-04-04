<template>
  <h1>Dashboard {{ users}}
  </h1>
</template>

<script>
import { mapState } from 'vuex';

export default {
  methods: {
    // ...mapState('auth', ['userId']),
    ...mapState(['users']),
  },
  created() {
  console.log(users);

      // this.$store.dispatch('users/find', { query: { _id: userId }})
      //   .then((user) => {
      //     console.log(user.data);

      //   });

  }
};
</script>

<style>

</style>
