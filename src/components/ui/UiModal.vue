<script setup>
import { computed, watch } from 'vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['update:modelValue', 'visible']);

const visible = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});

watch(visible, (value) => {
  if (value) {
    emit('visible');
  }
});
</script>

<template>
  <div v-if="visible" class="fixed inset-0 bg-gray-100 bg-opacity-20">
    <div class="h-full relative flex items-center justify-center">
      <slot />
    </div>
  </div>
</template>
