<script setup>
const props = defineProps({
  addButtonLabel: {
    type: String,
    required: true,
  },
  tableHeads: {
    type: Array,
  },
  tableBody: {
    type: Array,
  },
});
defineEmits(["toggleDialog"]);
</script>
<template>
  <div class="d-flex py-10 justify-end">
    <v-btn color="primary" elevation="0" @click="$emit('toggleDialog')">
      {{ addButtonLabel }}
    </v-btn>
  </div>
  <v-table>
    <thead>
      <tr>
        <th v-for="head in props.tableHeads" :key="head">{{ head.name }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in props.tableBody" :key="item.name">
        <td v-for="head in props.tableHeads" :key="head">
          {{ item[head.key] }}
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<style></style>
