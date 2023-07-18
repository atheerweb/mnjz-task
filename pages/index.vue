<script setup>
import { moreSettings } from "~/utils/constants.ts";
</script>

<template>
  <div class="pa-10">
    <h1 class="pb-16">المزيد من الإعدادات</h1>
    <v-row>
      <v-col
        cols="3"
        v-for="(setting, settingIndex) in moreSettings"
        :key="settingIndex"
      >
        <v-card style="cursor: pointer">
          <h3 class="pa-7">{{ setting }}</h3>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
