<script setup>
import { computed, watch } from 'vue';
import UiInput from './ui/ui-input.vue';
import { useMetadata } from 'src/metadata';
import { parseDate } from 'src/utils/date';

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['update:visible', 'saved']);

const { store, title, date, load } = useMetadata();

const visible = computed({
  get() {
    return props.visible;
  },
  set(value) {
    emit('update:visible', value);
  },
});

const dateValue = computed({
  get() {
    return parseDate(date.value).format('YYYY-MM-DD');
  },
  set(value) {
    date.value = value;
  },
});

function resetForm() {
  load();
}

function handleClose() {
  visible.value = false;
}
function handleSave() {
  store();
  emit('saved');

  visible.value = false;
}

watch(visible, (value) => {
  if (value) {
    resetForm();
  }
});
</script>

<template>
  <div v-if="visible" class="fixed inset-0 bg-black bg-opacity-50">
    <div class="h-full relative flex items-center justify-center">
      <form class="shadow-lg w-[400px]" v-on:submit.prevent="handleSave">
        <div class="bg-white border-b p-4 rounded-t-lg text-center">
          <h2 class="text-2xl">Set Countdown</h2>
        </div>
        <div class="bg-white p-4 flex flex-col gap-y-4">
          <ui-input placeholder="Title" v-model="title" />
          <ui-input type="date" v-model="dateValue" />
        </div>
        <div
          class="bg-white border-t p-4 rounded-b-lg flex items-center justify-end gap-x-4 text-lg"
        >
          <button type="submit">Save</button>
          <button type="button" v-on:click="handleClose">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>
