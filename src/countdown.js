import { ref, computed } from 'vue';

export function useCountdown() {
  const diff = ref(0);
  const countdownInterval = ref(null);

  const countdown = computed(() => {
    if (diff.value < 0) {
      return {
        second: 0,
        minute: 0,
        hour: 0,
        day: 0,
        month: 0,
        year: 0,
      };
    }

    return {
      second: Math.floor((diff.value % (1000 * 60)) / 1000),
      minute: Math.floor((diff.value % (1000 * 60 * 60)) / (1000 * 60)),
      hour: Math.floor((diff.value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      day: Math.floor(
        (diff.value % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24),
      ),
      month: Math.floor(
        (diff.value % (1000 * 60 * 60 * 24 * 30 * 12)) /
          (1000 * 60 * 60 * 24 * 30),
      ),
      year: Math.floor(diff.value / (1000 * 60 * 60 * 24 * 30 * 12)),
    };
  });
  const isFinished = computed(() => diff.value < 0);

  function calculateDiff(date) {
    diff.value = date - new Date();

    if (diff.value < 0) {
      clearInterval(countdownInterval.value);
    }
  }

  function start(date) {
    calculateDiff(date);

    countdownInterval.value = setInterval(() => {
      calculateDiff(date);
    }, 1000);
  }

  return { countdown, isFinished, start };
}
