<script setup>
import { computed, ref } from 'vue';
import { parseDate } from 'src/utils/date';
import Nature from './assets/image/nature.jpg';

const title = ref('Wisuda');
const date = ref(new Date('2024-05-13'));
const now = ref(new Date());
const diff = ref(date.value - now.value);

const countdown = computed(() => {
  return {
    second: Math.floor((diff.value % (1000 * 60)) / 1000),
    minute: Math.floor((diff.value % (1000 * 60 * 60)) / (1000 * 60)),
    hour: Math.floor((diff.value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    day: Math.floor(
      (diff.value % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24),
    ),
    month: Math.floor(
      (diff.value % (1000 * 60 * 60 * 24 * 30 * 12)) /
        (1000 * 60 * 60 * 24 * 30),
    ),
    year: Math.floor(diff.value / (1000 * 60 * 60 * 24 * 30 * 12)),
  };
});

setInterval(() => {
  diff.value = date.value - new Date();
}, 1000);
</script>

<template>
  <div
    class="flex items-center justify-center min-h-screen bg-cover"
    :style="{
      backgroundImage: `url(${Nature})`,
    }"
  >
    <div class="fixed inset-0 bg-black bg-opacity-50"></div>
    <div class="text-center text-white relative space-y-4">
      <h1 class="text-2xl">
        {{ title }} - {{ parseDate(date).format('LLL') }}
      </h1>
      <div class="flex gap-x-12 text-center justify-center">
        <div v-if="countdown.year">
          <p class="text-9xl font-bold">{{ countdown.year }}</p>
          <p class="text-2xl">Tahun</p>
        </div>
        <div v-if="countdown.month">
          <p class="text-9xl font-bold">{{ countdown.month }}</p>
          <p class="text-2xl">Bulan</p>
        </div>
        <div>
          <p class="text-9xl font-bold">{{ countdown.day }}</p>
          <p class="text-2xl">Hari</p>
        </div>
        <div>
          <p class="text-9xl font-bold">{{ countdown.hour }}</p>
          <p class="text-2xl">Jam</p>
        </div>
        <div>
          <p class="text-9xl font-bold">{{ countdown.minute }}</p>
          <p class="text-2xl">Menit</p>
        </div>
        <div>
          <p class="text-9xl font-bold">{{ countdown.second }}</p>
          <p class="text-2xl">Detik</p>
        </div>
      </div>
    </div>
  </div>
</template>
