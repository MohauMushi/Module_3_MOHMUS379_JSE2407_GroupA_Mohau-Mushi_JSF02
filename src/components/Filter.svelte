<script>
	import { createEventDispatcher } from 'svelte';
	import { filterSortStore } from "../stores/filterSortStore";

	export let categories = [];
	export let selectedCategory = '';
	const dispatch = createEventDispatcher();
	function handleCategoryChange(event) {
	  dispatch('filterChange', { category: event.target.value });
	}
  
	filterSortStore.subscribe(value => {
	  selectedCategory = value.selectedCategory;
	});
  </script>
  
  <div class="w-full md:w-auto mb-4 md:mb-0">
	<label for="category" class="block text-sm font-medium text-gray-700 mb-1">Filter by Category:</label>
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