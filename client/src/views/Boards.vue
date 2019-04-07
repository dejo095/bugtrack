<template>
  <v-layout align-center justify-start column>
    
    <h1 class="mb-3 display-2">Available Boards</h1>
    
    <app-create-board></app-create-board>
    
    <app-board
      v-for="(board, index) in boards"
      :key="index"
      :board="board"
      @boardId="showLists($event)"></app-board>

  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CreateBoard from '@/components/boards/CreateBoard.vue';
import Board from '@/components/boards/Board.vue';

export default {
  components: {
    'app-create-board': CreateBoard,
    'app-board': Board,
  },
  created() {
    this.findBoards().data;
  },
  computed: {
    ...mapGetters('users', ['current']), // TODO: add some auth on this page
    ...mapGetters('boards', { findBoardsInStore: 'find' }),
    boards() {
      return this.findBoardsInStore().data;
    },
  },
  methods: {
    ...mapActions('boards', { findBoards: 'find' }),
    showLists(index) {
      this.$router.push(`boards/${index}`);
      // this.$router.push({ name: 'boards', params: { id: index } });
    },
  },
};
</script>

