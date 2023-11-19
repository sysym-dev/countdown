<script setup>
import { computed } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  placeholder: String,
  modelValue: null,
});
const emit = defineEmits(['update:modelValue']);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});
</script>

<template>
  <input
    :type="type"
    :placeholder="placeholder"
    class="w-full bg-white border border-gray-200 px-3 py-2 rounded-lg focus:outline-0 focus:ring-1 focus:ring-gray-900 focus:ring-offset-0 focus:border-gray-900"
    v-model="value"
  />
</template>
