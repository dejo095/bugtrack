<template>
  <v-app>
    <v-content>
      <v-container fluid ma-0 pa-0>
        <v-btn v-if="!user" :to="{ name: 'login' }">Login</v-btn>
        <v-btn v-if="!user" :to="{ name: 'register' }">Register</v-btn>
        <v-btn v-if="user" @click="signOut">Logout</v-btn>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
  computed: {
    ...mapState('auth', { user: 'payload' }),
  },
  methods: {
    ...mapActions('auth', ['logout']),
    signOut() {
      this.logout()
        .then(() => {
          this.$router.push('/login');
        });
    },
  },
};
</script>

