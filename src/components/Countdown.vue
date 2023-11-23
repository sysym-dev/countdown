<script setup>
import { parseDate } from 'src/utils/date';
import { PencilSquareIcon } from '@heroicons/vue/24/solid';
import UiButton from './ui/UiButton.vue';
import SetMetadataModal from './SetMetadataModal.vue';
import { computed, ref } from 'vue';

const props = defineProps({
  title: String,
  date: Date,
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
  isFinished: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['saved-metadata']);

const isMetadataReady = computed(() => props.date && props.title);
const visibleSetMedatadaModal = ref(false);

function handleSetMetadata() {
  visibleSetMedatadaModal.value = true;
}
function handleSavedMetadata() {
  emit('saved-metadata');
}
</script>

<template>
  <div
    class="min-h-screen bg-sky-900 text-white flex items-center justify-center"
  >
    <div class="space-y-8 p-8">
      <div
        v-if="!isMetadataReady"
        class="text-center flex flex-col space-y-4 items-center"
      >
        <span class="text-sky-200 text-2xl font-bold tracking-tight"
          >The date has not been set</span
        >
        <ui-button v-on:click="handleSetMetadata">Set date now</ui-button>
      </div>
      <template v-else>
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
        <div v-if="isFinished" class="text-center text-sky-200">
          Finished {{ parseDate(date).fromNow() }}
        </div>
      </template>
    </div>
  </div>
  <div
    v-if="isMetadataReady"
    class="fixed bottom-0 p-4 w-full flex sm:justify-end"
  >
    <ui-button custom-class="w-full sm:w-auto" v-on:click="handleSetMetadata">
      <template #icon>
        <pencil-square-icon class="w-4 h-4" />
      </template>
      Edit
    </ui-button>
  </div>
  <set-metadata-modal
    v-model:visible="visibleSetMedatadaModal"
    v-on:saved="handleSavedMetadata"
  />
</template>
