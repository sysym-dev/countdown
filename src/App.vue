<script setup>
import { parseDate } from 'src/utils/date';
import Nature from './assets/image/nature.jpg';
import { useMetadata } from './metadata';
import { useCountdown } from './countdown';
import SetMetadataModal from './components/SetMetadataModal.vue';
import { ref } from 'vue';

const { title, date, load } = useMetadata();
const { countdown, isFinished, start } = useCountdown();

const visibleSetMetadataModal = ref(false);

function handleSetMetadata() {
  visibleSetMetadataModal.value = true;
}

load();
start(date.value);
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
        <template v-if="!date">
          The countdown date has not been set.
          <a class="underline" href="" v-on:click.prevent="handleSetMetadata"
            >Set Now</a
          >
        </template>
        <template v-else>
          {{ title ? `${title} - ` : '' }}
          {{ isFinished ? 'Finished' : parseDate(date).format('LLL') }}
        </template>
      </h1>
      <div class="flex gap-x-12 text-center justify-center">
        <div v-if="countdown.year">
          <p class="text-9xl font-bold">{{ countdown.year }}</p>
          <p class="text-2xl">Year</p>
        </div>
        <div v-if="countdown.month">
          <p class="text-9xl font-bold">{{ countdown.month }}</p>
          <p class="text-2xl">Month</p>
        </div>
        <div>
          <p class="text-9xl font-bold">{{ countdown.day }}</p>
          <p class="text-2xl">Day</p>
        </div>
        <div>
          <p class="text-9xl font-bold">{{ countdown.hour }}</p>
          <p class="text-2xl">Hour</p>
        </div>
        <div>
          <p class="text-9xl font-bold">{{ countdown.minute }}</p>
          <p class="text-2xl">Minute</p>
        </div>
        <div>
          <p class="text-9xl font-bold">{{ countdown.second }}</p>
          <p class="text-2xl">Second</p>
        </div>
      </div>
    </div>
  </div>

  <set-metadata-modal v-model:visible="visibleSetMetadataModal" />
</template>
