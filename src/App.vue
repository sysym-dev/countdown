<script setup>
import { useMetadata } from './metadata';
import { useCountdown } from './countdown';
import Countdown from './components/Countdown.vue';

const { title, date, load } = useMetadata();
const { countdown, start } = useCountdown();

function handleSavedMetadata() {
  load();
  start(date.value);
}

load();
start(date.value);
</script>

<template>
  <countdown
    :title="title"
    :date="date"
    :countdown="countdown"
    v-on:saved-metadata="handleSavedMetadata"
  />
</template>
