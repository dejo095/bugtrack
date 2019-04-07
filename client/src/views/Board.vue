<template>
  <v-container>

    <!-- Board name and for for creating new List -->
    <v-layout align-start justify-start column>
      
      <!-- Board name, date etc -->
      <app-active-board-data :board="board"></app-active-board-data>

      <!-- form for new list -->
      <app-create-list :boardId="board._id"></app-create-list>

    </v-layout>

    <hr class="my-3">

    <!-- lists listings -->
    <div v-if="lists.length > 0">
      <app-list-layout :lists="lists"></app-list-layout>
    </div>
    <div v-else>
      <p>Nothing to show yet!</p>
    </div>
    <!-- end -->

  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ActiveBoardData from '@/components/lists/ActiveBoardData.vue';
import CreateIssue from '@/components/issues/CreateIssue.vue';
import CreateList from '@/components/lists/CreateList.vue';
import ListLayout from '@/components/lists/ListLayout.vue';

export default {
  data() {
    return {
      dialog: false,
      boardId: null,
      listId: null,
    };
  },
  components: {
    'create-issue': CreateIssue,
    'app-active-board-data': ActiveBoardData,
    'app-create-list': CreateList,
    'app-list-layout': ListLayout,
  },
  created() {
    this.boardId = this.$route.params.id;
    this.pullBoard(this.boardId);
    this.pullLists({
      query: {
        boardId: this.$route.params.id,
      }
    });    
  },
  methods: {

    ...mapActions('boards', { pullBoard: 'get' }),
    ...mapActions('lists', { pullLists: 'find' }),

  },
  computed: {

    ...mapGetters('boards', { getBoards: 'get' }),
    ...mapGetters('lists', { getLists: 'find' }),

    board() {
      return this.getBoards(this.boardId);
    },

    lists() {
      return this.getLists({ query: { boardId: this.boardId }}).data;
    },

    

  },
};
</script>

<style lang="stylus" scoped>
  #list
    margin-right: 10px
  
  #list:last-child
    margin-right: 0

</style>

