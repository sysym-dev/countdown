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
function handleMetadataSaved() {
  load();
  start(date.value);
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
      <h1 class="text-2xl flex justify-center items-center gap-x-2">
        <template v-if="!date">
          The countdown date has not been set.
          <a class="underline" href="" v-on:click.prevent="handleSetMetadata"
            >Set Now</a
          >
        </template>
        <template v-else>
          <span>
            {{ title ? `${title} - ` : '' }}
            {{ isFinished ? 'Finished' : parseDate(date).format('LLL') }}
          </span>
          <button v-on:click="handleSetMetadata">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </button>
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

  <set-metadata-modal
    v-model:visible="visibleSetMetadataModal"
    v-on:saved="handleMetadataSaved"
  />
</template>
