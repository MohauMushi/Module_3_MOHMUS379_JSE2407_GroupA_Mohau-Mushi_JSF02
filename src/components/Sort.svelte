<script>
	import { createEventDispatcher } from 'svelte';
  
	export let sortOrder = '';
  
	const dispatch = createEventDispatcher();
  
	function handleSortChange(event) {
	  dispatch('sortChange', { sortOrder: event.target.value });
	}
  </script>
  
  <div class="ww-full md:w-auto">
	<label for="sort" class="block text-sm font-medium text-gray-700 mb-1">Sort by Price:</label>
	<select
	  id="sort"
	  value={sortOrder}
	  on:change={handleSortChange}
	  class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
	>
	  <option value="">Default</option>
	  <option value="asc">Lowest to Highest</option>
	  <option value="desc">Highest to Lowest</option>
	</select>
  </div>