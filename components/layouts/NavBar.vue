<script setup></script>
<template>

  <v-app-bar :elevation="0" color="primary">
    <div class="d-flex justify-space-between align-center px-16 w-100">
      <v-col cols="4">
        <v-text-field
          label="ما الذي تبحث عنه"
          variant="solo"
          elevation="0"
          hide-details="auto"
          density="compact"
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>
      </v-col>
      <div class="d-flex align-center">
        <v-icon icon="mdi-bell"></v-icon>
        <p class="mx-2">PIN: <span class="px-2">334456655</span></p>
        <v-avatar color="surface-variant">
          <v-img
            alt="Avatar"
            src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
          ></v-img>
        </v-avatar>
      </div>
    </div>
  </v-app-bar>
</template>

<style scoped></style>
