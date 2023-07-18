<script setup>
const dummyData = [
  {
    name: "القيمة المضافة",
    percentage: "10%",
    createdAt: "2023",
  },
  {
    name: "القيمة المضافة",
    percentage: "10%",
    createdAt: "2023",
  },
  {
    name: "القيمة المضافة",
    percentage: "10%",
    createdAt: "2023",
  },
];
const tableHeaders = [
  { name: "الاسم", key: "name" },
  { name: "النسبة", key: "percentage" },
  { name: "الانشاء", key: "createdAt" },
];
const dialog = ref(false);
const toggleDialog = () => {
  dialog.value = !dialog.value;
};
</script>
<template>
  <div>
    <shared-common-title :title="'المزيد من الإعدادات'" :return="true" />
    <taxes-new-tax-dialog
      @closeDialog="toggleDialog"
      :dialog="dialog"
    ></taxes-new-tax-dialog>
    <shared-common-table
      :add-button-label="'انشاء ضريبة جديدة'"
      :table-body="dummyData"
      :table-heads="tableHeaders"
      @toggleDialog="toggleDialog"
    />
    <shared-common-table
      :add-button-label="'إنشاء مجموعة ضريبية'"
      :table-body="dummyData"
      :table-heads="tableHeaders"
    />
  </div>
</template>

<style></style>
