<script setup>
const props = defineProps({
  transparent: {
    type: Boolean,
    default: false,
  },
  customClass: String,
  type: {
    type: String,
    default: 'button',
  },
});
</script>

<template>
  <button
    :type="type"
    :class="[
      'rounded-md px-2.5 py-1.5 text-sm font-semibold text-sky-900 hover:bg-sky-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 inline-flex items-center justify-center gap-x-1.5',
      transparent ? 'bg-transparent' : 'bg-white',
      customClass,
    ]"
  >
    <slot name="icon" />
    <slot />
  </button>
</template>
