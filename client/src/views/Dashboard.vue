<template>
  <v-container fluid>
    <v-layout>


      <!-- Modal window for creating new board -->
      <v-dialog fullscreen hide-overlay transition="dialog-bottom-transition" scrollable v-model="dialog" persistent>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" id="createIssue" absolute bottom right fab dark color="red">
            <v-icon>add</v-icon>
          </v-btn>
        </template>
        <create-issue
          :dialog="dialog"
          @returnedDialog="dialog = false"
          @dataForNewIssue="createNewIssue($event)">
        </create-issue>
      </v-dialog>

    </v-layout>
  </v-container>
</template>

<script>
import CreateIssue from '@/components/CreateIssue.vue';
import { mapState, mapGetters } from 'vuex';

export default {
  data() {
    return {
      dialog: false,
    };
  },
  components: {
    'create-issue': CreateIssue,
  },
  computed: {
    ...mapGetters('users', ['current'])
  },
  methods: {
  },
};
</script>

<style lang="stylus" scoped>
  #createIssue
    bottom: 20px

</style>

