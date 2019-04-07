<template>
  <v-layout row align-start justify-start>
    
    <!-- list column -->
    <v-card color="cyan lighten-4" id="list" width="400px" 
      v-for="list in lists" 
      :key="list._id" 
      :listId="list._id">

      <v-toolbar>
        <v-toolbar-title>{{ list.name }}</v-toolbar-title>
        <v-toolbar-items>
          <!-- Modal window for creating new board -->
          <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" id="createBoard" absolute bottom right fab dark color="red">
                <v-icon>add</v-icon>
              </v-btn>
            </template>
            <app-create-issue>
              :dialog="dialog"
              @returnedDialog="dialog = false">
            </app-create-issue>
          </v-dialog>

          <!-- <v-btn class="mt-4" absolute right dark top color="green" fab small>
            <v-icon>add</v-icon>
          </v-btn> -->
        </v-toolbar-items>
      </v-toolbar>


      <!-- here issues inside a list-->
      <app-issues
        v-for="issue in issuesPerListId[list._id]" 
        :key="issue._id">

        <template v-slot:header>
          {{ issue.name }}
        </template>
        <template v-slot:description>
          {{ issue.description }}
        </template>

      </app-issues>
            
    </v-card>

  </v-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import IssuesLayout from '@/components/issues/IssuesLayout.vue';
import CreateIssue from '@/components/issues/CreateIssue.vue';

export default {
  data() {
    return {
      dialog: false,
      listId: null,
    }
  },
  props: ['lists'],
  components: {
    'app-issues': IssuesLayout,
    'app-create-issue': CreateIssue,
  },
  created() {
    this.pullIssues();
  },
  computed: {

    ...mapGetters('issues', { getIssues: 'find' }),

    issues() {
      return this.getIssues().data;
    },

    issuesPerListId() {
      return this.issues.reduce((byId, issue) => {
        byId[issue.listsId] = byId[issue.listsId] || [];
        byId[issue.listsId].push(issue);
        return byId;
      }, []);
    }

  },
  methods: {
    ...mapActions('issues', { pullIssues: 'find' }),
  }
}
</script>

<style>

</style>
