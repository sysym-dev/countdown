import { ref } from 'vue';

export function useMetadata() {
  const title = ref(null);
  const date = ref(null);

  function load() {
    const dateStorage = localStorage.getItem('date');

    title.value = localStorage.getItem('title');
    date.value = dateStorage ? new Date(localStorage.getItem('date')) : null;
  }

  function store() {
    localStorage.setItem('title', title.value);
    localStorage.setItem('date', date.value);
  }

  return {
    title,
    date,
    load,
    store,
  };
}
