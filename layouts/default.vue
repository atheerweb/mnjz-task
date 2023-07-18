<script setup></script>
<template>
  <v-app class="bg-grey-lighten-3">
    <v-layout>
      <layouts-side-menu />
      <layouts-nav-bar />
      <v-main>
        <div class="pa-10">
          <slot />
        </div>
      </v-main>
    </v-layout>
  </v-app>
</template>
