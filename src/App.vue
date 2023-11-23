<script setup>
import { useMetadata } from './metadata';
import { useCountdown } from './countdown';
import Countdown from './components/Countdown.vue';

const { title, date, load } = useMetadata();
const { countdown, start, isFinished } = useCountdown();

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
    :is-finished="isFinished"
    v-on:saved-metadata="handleSavedMetadata"
  />
</template>
