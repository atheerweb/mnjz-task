<script setup>
import { moreSettings } from "~/utils/constants.ts";
</script>

<template>
  <div>
    <shared-common-title :title="'المزيد من الإعدادات'" />
    <v-row>
      <v-col
        cols="3"
        v-for="(setting, settingIndex) in moreSettings"
        :key="settingIndex"
      >
        <v-card style="cursor: pointer" :to="setting.route">
          <h3 class="pa-7">{{ setting.name }}</h3>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
