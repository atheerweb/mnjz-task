<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  return: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <div>
    <nuxt-link to="/" v-if="props.return">
      <h2 class="pb-5">
        <v-icon icon="mdi-chevron-right" size="x-small"></v-icon> الرجوع
      </h2>
    </nuxt-link>
    <h1 class="pb-10">{{ props.title }}</h1>
  </div>
</template>

<style></style>
