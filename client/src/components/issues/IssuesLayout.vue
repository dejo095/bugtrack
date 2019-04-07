<template>
  <v-layout>
    
    <v-card width="100%" class="ma-2" color="cyan lighten-2">

      <v-card-title>
        <h3>
          <slot name="header"></slot>
        </h3>
      </v-card-title>
      <v-card-text>
        <p>
          <slot name="description"></slot>
        </p>
      </v-card-text>

    </v-card>

  </v-layout>
</template>
