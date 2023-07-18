<script setup>
const props = defineProps({
  dialog: {
    type: Boolean,
    required: true,
  },
});
defineEmits(["closeDialog"]);
</script>
<template>
  <v-dialog v-model="props.dialog" width="30em">
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
            @click="$emit('closeDialog')"
            >إغلاق
          </v-btn>
          <v-btn color="primary" class="mx-2 font-weight-bold" elevation="0"
            >تطبيق
          </v-btn>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<style></style>
