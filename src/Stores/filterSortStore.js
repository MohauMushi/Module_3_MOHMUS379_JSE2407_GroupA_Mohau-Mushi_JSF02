import { writable } from 'svelte/store';

export const filterSortStore = writable({
  selectedCategory: '',
  sortOrder: ''
});