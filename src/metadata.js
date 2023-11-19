import { ref } from 'vue';

export function useMetadata() {
  const title = ref(null);
  const date = ref(null);

  function load() {
    const dateStorage = localStorage.getItem('date');

    title.value = localStorage.getItem('title');
    date.value = dateStorage ? new Date(localStorage.getItem('date')) : null;
  }

  function store(values) {
    localStorage.setItem('title', values.title);
    localStorage.setItem('date', values.date);
  }

  return {
    title,
    date,
    load,
    store,
  };
}
