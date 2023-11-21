<script setup>
import { parseDate } from 'src/utils/date';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  countdown: {
    type: Object,
    required: true,
    default: () => ({
      year: 0,
      month: 0,
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
    }),
  },
});
</script>

<template>
  <div
    class="min-h-screen bg-sky-900 text-white flex items-center justify-center"
  >
    <div class="space-y-8 p-8">
      <div class="text-center space-y-4">
        <span class="text-sky-200">{{ parseDate(date).format('LL') }}</span>
        <h1 class="text-4xl uppercase font-black tracking-tight">
          {{ title }}
        </h1>
      </div>
      <div class="grid grid-cols-3 sm:grid-cols-6 gap-4">
        <div
          class="text-center flex flex-col justify-center bg-white rounded text-sky-900 p-4"
        >
          <span class="font-black text-3xl">{{ countdown.year }}</span>
          <span class="text-sm">Tahun</span>
        </div>
        <div
          class="text-center flex flex-col justify-center bg-white rounded text-sky-900 p-4"
        >
          <span class="font-black text-3xl">{{ countdown.month }}</span>
          <span class="text-sm">Bulan</span>
        </div>
        <div
          class="text-center flex flex-col justify-center bg-white rounded text-sky-900 p-4"
        >
          <span class="font-black text-3xl">{{ countdown.day }}</span>
          <span class="text-sm">Hari</span>
        </div>
        <div
          class="text-center flex flex-col justify-center bg-white rounded text-sky-900 p-4"
        >
          <span class="font-black text-3xl">{{ countdown.hour }}</span>
          <span class="text-sm">Jam</span>
        </div>
        <div
          class="text-center flex flex-col justify-center bg-white rounded text-sky-900 p-4"
        >
          <span class="font-black text-3xl">{{ countdown.minute }}</span>
          <span class="text-sm">Menit</span>
        </div>
        <div
          class="text-center flex flex-col justify-center bg-white rounded text-sky-900 p-4"
        >
          <span class="font-black text-3xl">{{ countdown.second }}</span>
          <span class="text-sm">Detik</span>
        </div>
      </div>
    </div>
  </div>
</template>
