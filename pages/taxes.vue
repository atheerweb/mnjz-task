<script setup>
const dummyData = [
  {
    name: "القيمة المضافة",
    percentage: "10%",
    createdAt: "2023",
  },
];
const dialog = ref(false);
const toggleDialog = () => {
  dialog.value = !dialog.value;
};
</script>
<template>
  <div>
    <shared-common-title :title="'المزيد من الإعدادات'" :return="true" />
    <v-dialog v-model="dialog" width="30em">
      <v-card class="pa-5 rounded-xl">
        <h3 class="font-weight-black">إنشاء ضريبة جديدة</h3>
        <div class="my-5">
          <label class="text-grey-darken-3"><b>الاسم</b></label>
          <v-text-field
            variant="outlined"
            elevation="0"
            hide-details="auto"
            density="compact"
          ></v-text-field>
        </div>

        <div class="my-5">
          <label class="text-grey-darken-3"
            ><b>الاسم بااللغة الإنجليزية</b></label
          >
          <v-text-field
            variant="outlined"
            elevation="0"
            hide-details="auto"
            density="compact"
          ></v-text-field>
        </div>
        <div class="my-5">
          <label class="text-grey-darken-3"><b>(%) نسبة الضريبة </b></label>
          <v-text-field
            variant="outlined"
            elevation="0"
            hide-details="auto"
            density="compact"
          ></v-text-field>
        </div>
        <v-switch
          label="السعر المدخل شامل الضريبة"
          color="primary"
          class="font-weight-bold"
          hide-details="auto"
        ></v-switch>
        <p class="text-yellow text-center mt-5">
          في حال اختيارها يتم خصم الضريبة من اي منتج او خدمة و يتم عرض الضريبة
          منفصلة
        </p>
        <div class="d-flex justify-end w-100 mt-10">
          <div>
            <v-btn
              class="mx-2 font-weight-bold text-primary"
              elevation="0"
              @click="toggleDialog"
              >إغلاق
            </v-btn>
            <v-btn color="primary" class="mx-2 font-weight-bold" elevation="0"
              >تطبيق
            </v-btn>
          </div>
        </div>
      </v-card>
    </v-dialog>
    <div class="d-flex pb-10 justify-end">
      <v-btn color="primary" elevation="0" @click="toggleDialog">
        انشاء ضريبة جديدة
      </v-btn>
    </div>
    <v-table>
      <thead>
        <tr>
          <th>الإسم</th>
          <th>النسبة</th>
          <th>الإنشاء</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in dummyData" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.percentage }}</td>
          <td>{{ item.createdAt }}</td>
        </tr>
      </tbody>
    </v-table>
    <div class="d-flex py-10 justify-end">
      <v-btn color="primary" elevation="0"> إضافة مجموعة ضريبية</v-btn>
    </div>
    <v-table>
      <thead>
        <tr>
          <th>الإسم</th>
          <th>النسبة</th>
          <th>الإنشاء</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in dummyData" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.percentage }}</td>
          <td>{{ item.createdAt }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<style></style>
