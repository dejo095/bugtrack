<template>
 
      <v-form
        v-model="valid"
        @keyup.enter="createIssue"
        @submit.prevent="createIssue">

        <v-flex pa-2>
          <v-text-field
            label="Title"
            v-model="issue.name"
            type="text">
          </v-text-field>
        </v-flex>

        <v-flex>
          <v-textarea
            label="Description"
            v-model="issue.description"
            hint="Enter here description!">
          </v-textarea>
        </v-flex>

        <v-flex>
          <v-text-field
            label="VSTS Bug Id"
            v-model="issue.vstsBugId"
            type="text">
          </v-text-field>
        </v-flex>

        <v-layout row justify-space-between>
          <v-btn color="primary" @click="closeDialog">close</v-btn>
          <v-btn :disabled="!valid" type="submit" color="success">Create</v-btn>
        </v-layout>

      </v-form>

</template>

<script>
export default {
  data() {
    return {
      valid: false,
      props: ['dialog'],
      issue: {
        name: '',
        description: '',
        vstsBugId: '',
      },
      titleRule: [
        v => !!v || 'Must not be empty',
        v => (v && v.length <= 20) || 'Max 20 characters',
      ],
      textRule: [
        v => !!v || 'Must not be empty',
        v => (v && v.length <= 255) || 'Max 255 characters',
      ],
    };
  },
  methods: {

    createIssue() {
      if (this.valid) {
        // this.$emit('dataForNewIssue', this.issue);
        this.$emit('returnedDialog', false);
        // this.$refs.form.reset();
      }
    },

    closeDialog() {
      this.$emit('returnedDialog', false);
      // this.$refs.form.reset();
    },

  },
};
</script>

<style>

</style>
