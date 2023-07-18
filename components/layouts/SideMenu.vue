<script setup>
import { navLinks } from "~/utils/constants.ts";
</script>
<template>

    <v-navigation-drawer permanent location="right" class="bg-primary">
      <img src="~/assets/images/logo.png" alt="logo" />

      <v-list density="compact" nav>
        <v-list-item
          v-for="(navLink, navLinkIndex) in navLinks"
          :key="navLinkIndex"
          append-icon="mdi-chevron-left"
          :title="navLink"
          :value="navLink"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
 
</template>

<style></style>
