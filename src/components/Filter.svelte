<script>
  import { createEventDispatcher } from "svelte";
  import { filterSortStore } from "../store/filterSortStore";

  /**
   * @typedef {Object} Props
   * @property {string[]} categories - An array of category names to populate the dropdown.
   * @property {string} selectedCategory - The currently selected category.
   */

  /** @type {Props["categories"]} */
  export let categories = [];
  /** @type {Props["selectedCategory"]} */
  export let selectedCategory = "";

  /**
   * Creates an event dispatcher to emit custom events.
   * @type {import('svelte').EventDispatcher}
   */
  const dispatch = createEventDispatcher();

  /**
   * Handles the change event of the category select element.
   * Dispatches a 'filterChange' event with the selected category.
   * @param event - The change event from the select element.
   */
  function handleCategoryChange(event) {
    dispatch("filterChange", { category: event.target.value });
  }

  /**
   * Subscribes to the filterSortStore to update the selectedCategory when the store changes.
   */
  filterSortStore.subscribe((value) => {
    selectedCategory = value.selectedCategory;
  });
</script>

<div class="w-full md:w-auto mb-4 md:mb-0">
  <label for="category" class="block text-sm font-medium text-gray-700 mb-1"
    >Filter by Category:</label
  >
  <select
    id="category"
    bind:value={selectedCategory}
    on:change={handleCategoryChange}
    class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
  >
    <option value="">All Categories</option>
    {#each categories as category}
      <option value={category}>{category}</option>
    {/each}
  </select>
</div>
