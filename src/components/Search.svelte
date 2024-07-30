<script>
  import { createEventDispatcher } from "svelte";

  /**
   * @type {string}
   * @description The current value of the search input.
   */
  let searchTerm = "";

  /**
   * @type {function}
   * @description Svelte event dispatcher for custom events.
   */
  const dispatch = createEventDispatcher();

  /**
   * Handles the input event of the search field.
   * @param event - The input event object.
   */
  function handleInput(event) {
    searchTerm = event.target.value;
    dispatch("input", { searchTerm });
  }
</script>

<div class="w-full md:w-auto">
  <div class="relative">
    <input
      type="search"
      id="search-input"
      bind:value={searchTerm}
      on:input={handleInput}
      class="p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
      placeholder="Search products..."
    />
    <button
      type="button"
      class="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
    >
      <svg
        class="w-4 h-4"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        />
      </svg>
      <span class="sr-only">Search</span>
    </button>
  </div>
</div>
