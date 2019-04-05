<template>
  <v-card>
    <v-toolbar dark color="blue">
      <h2>Open new issue</h2>
    </v-toolbar>
    <v-card-text>

      <v-form
        ref="form"
        v-model="valid"
        @keyup.enter="createIssue"
        @submit.prevent="createIssue">

        <v-flex pa-2>
          <v-select
            :items="items"
            label="Choose Product">
          </v-select>
          <v-select
            :items="items"
            label="Choose Board">
          </v-select>
          <v-text-field
            label="Name"
            v-model="issue.name"
            :rules="titleRule"
            counter="20"
            type="text">
          </v-text-field>
          <v-textarea
            label="Description"
            v-model="issue.description"
            :rules="textRule"
            hint="Enter here description!">
          </v-textarea>
          <v-text-field
            label="Priority"
            v-model="issue.priority"
            type="number">
          </v-text-field>
          <v-text-field
            label="VSTS Bug Id"
            v-model="issue.vstsBugId"
            type="text">
          </v-text-field>
          <v-text-field
            label="VSTS PBI Id"
            v-model="issue.vstsPbiId"
            type="text">
          </v-text-field>
        </v-flex>
        <v-layout row justify-space-between>
          <v-btn color="primary" @click="closeDialog">close</v-btn>
          <v-btn :disabled="!valid" type="submit" color="success">Create</v-btn>
        </v-layout>

      </v-form>
    </v-card-text>
  </v-card>
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
        priority: '',
        vstsBugId: '',
        vstsPbiId: '',
      },
      statuz: ['Open', 'Closed', 'third'],
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
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
      if (this.$refs.form.validate()) {
        this.$emit('dataForNewIssue', this.issue);
        this.$emit('returnedDialog', false);
        this.$refs.form.reset();
      }
    },

    closeDialog() {
      this.$emit('returnedDialog', false);
      this.$refs.form.reset();
    },

  },
};
</script>

<style>

</style>
