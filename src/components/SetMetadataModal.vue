<script setup>
import { computed } from 'vue';
import UiInput from './ui/UiInput.vue';
import UiButton from './ui/UiButton.vue';
import UiModal from './ui/UiModal.vue';
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
</script>

<template>
  <ui-modal v-model="visible" v-on:visible="resetForm">
    <form
      class="shadow-lg w-[400px]"
      v-on:submit.prevent="handleSave"
      v-click-outside="handleClose"
    >
      <div class="bg-white border-b p-4 rounded-t-lg text-center">
        <h2 class="text-lg font-bold text-sky-900">Set Countdown</h2>
      </div>
      <div class="bg-white p-4 flex flex-col gap-y-4">
        <ui-input placeholder="Title" v-model="title" />
        <ui-input type="date" v-model="dateValue" />
      </div>
      <div
        class="bg-white border-t p-4 rounded-b-lg flex items-center justify-end gap-x-2 text-lg"
      >
        <ui-button type="submit" transparent>Save</ui-button>
        <ui-button type="button" transparent v-on:click="handleClose"
          >Cancel</ui-button
        >
      </div>
    </form>
  </ui-modal>
</template>
