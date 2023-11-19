<script setup>
import { computed } from 'vue';

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['update:visible']);

const visible = computed({
  get() {
    return props.visible;
  },
  set(value) {
    emit('update:visible', value);
  },
});

function handleClose() {
  visible.value = false;
}
</script>

<template>
  <div v-if="visible" class="fixed inset-0 bg-black bg-opacity-50">
    <div class="h-full relative flex items-center justify-center">
      <div class="shadow-lg w-[400px]">
        <div class="bg-white border-b p-4 rounded-t-lg text-center">
          <h2 class="text-2xl">Set Countdown</h2>
        </div>
        <div class="bg-white p-4 flex flex-col gap-y-4">
          <input
            type="text"
            placeholder="Title"
            class="w-full bg-white border border-gray-200 px-3 py-2 rounded-lg focus:outline-0 focus:ring-1 focus:ring-gray-900 focus:ring-offset-0 focus:border-gray-900"
          />
          <input
            type="date"
            class="w-full bg-white border border-gray-200 px-3 py-2 rounded-lg focus:outline-0 focus:ring-1 focus:ring-gray-900 focus:ring-offset-0 focus:border-gray-900"
          />
        </div>
        <div
          class="bg-white border-t p-4 rounded-b-lg flex items-center justify-end gap-x-4 text-lg"
        >
          <button>Save</button>
          <button v-on:click="handleClose">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>
