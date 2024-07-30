import { writable } from 'svelte/store';

/**
 * A writable store that holds the filter and sort settings.
 * 
 * @typedef {Object} FilterSortSettings
 * @property {string} selectedCategory - The currently selected category for filtering.
 * @property {string} sortOrder - The current sort order.
 */

/**
 * The filterSortStore is a writable store that manages the filter and sort settings.
 * 
 * @type {import('svelte/store').Writable<FilterSortSettings>}
 */
export const filterSortStore = writable({
  selectedCategory: '',
  sortOrder: ''
});