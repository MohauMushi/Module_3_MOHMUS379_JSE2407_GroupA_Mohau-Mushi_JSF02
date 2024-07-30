<script>
  import { onMount } from "svelte";
  import {
    productsStore,
    fetchProducts,
    fetchCategories,
  } from "../stores/ProductsStore";
  import { filterSortStore } from "../stores/filterSortStore";
  import ProductGrid from "../components/ProductGrid.svelte";
  import LoadingSpinner from "../components/LoadingSpinner.svelte";
  import Filter from "../components/Filter.svelte";
  import Sort from "../components/Sort.svelte";
  import Search from "../components/Search.svelte";

  /** @type {Array} - Array to store product data */
  let products = [];
  /** @type {boolean} - Flag to indicate if data is being loaded */
  let loading = true;
  /** @type {string|null} - Stores any error message */
  let error = null;
  /** @type {Array} - Array to store category data */
  let categories = [];
  /** @type {string} - Currently selected category */
  let selectedCategory = "";
  /** @type {string} - Current sort order */
  let sortOrder = "";
  /** @type {string} - Current search term */
  let searchTerm = "";

  /**
   * @function
   * @description Lifecycle function to fetch initial data on component mount
   */
  onMount(async () => {
    try {
      await fetchProducts();
      await fetchCategories();
      filterSortStore.subscribe((value) => {
        selectedCategory = value.selectedCategory;
        sortOrder = value.sortOrder;
      });
      // Simulate loading delay
      setTimeout(() => {
        loading = false;
      }, 1200);
    } catch (e) {
      error = "An error occurred while fetching products.";
      loading = false;
    }
  });

  /**
   * @description Reactive statements to update local variables when store values change
   */
  $: {
    products = $productsStore.products;
    categories = $productsStore.categories;
  }

  /**
   * @type {boolean}
   * @description Reactive variable to check if no products are available after filtering
   */
  $: noProducts = !loading && filteredAndSortedProducts.length === 0;

  /**
   * @type {Array}
   * @description Reactive variable to filter and sort products based on user selections
   */
  $: filteredAndSortedProducts = products
    .filter((product) =>
      selectedCategory ? product.category === selectedCategory : true,
    )
    .filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .sort((a, b) => {
      if (sortOrder === "asc") return a.price - b.price;
      if (sortOrder === "desc") return b.price - a.price;
      return 0;
    });

  /**
   * @function
   * @param {CustomEvent} event - The custom event object
   * @description Handles changes in the category filter
   */
  function handleFilterChange(event) {
    selectedCategory = event.detail.category;
    filterSortStore.update((value) => ({ ...value, selectedCategory }));
  }

  /**
   * @function
   * @param {CustomEvent} event - The custom event object
   * @description Handles changes in the sort order
   */
  function handleSortChange(event) {
    sortOrder = event.detail.sortOrder;
    filterSortStore.update((value) => ({ ...value, sortOrder }));
  }

  /**
   * @function
   * @param {CustomEvent} event - The custom event object
   * @description Handles changes in the search input
   */
  function handleSearch(event) {
    searchTerm = event.detail.searchTerm;
  }
</script>

<!-- Component template -->
<div class="space-y-8">
  {#if loading}
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <LoadingSpinner count={8} />
    </div>
  {:else if error}
    <p
      class="text-center text-red-500 font-extrabold p-4 flex items-center justify-center"
    >
      {error}
    </p>
  {:else}
    <div class="mb-6 flex flex-wrap items-center justify-between">
      <div class="w-full md:w-auto mb-4 md:mb-0">
        <Filter
          {categories}
          {selectedCategory}
          on:filterChange={handleFilterChange}
        />
      </div>
      <div class="w-full md:w-auto mb-4 md:mb-0">
        <Search on:input={handleSearch} />
      </div>
      <div class="w-full md:w-auto">
        <Sort {sortOrder} on:sortChange={handleSortChange} />
      </div>
    </div>

    {#if noProducts}
      <p
        class="text-center text-red-500 font-extrabold p-4 flex items-center justify-center"
      >
        No products found.
      </p>
    {:else}
      <ProductGrid products={filteredAndSortedProducts} />
    {/if}
  {/if}
</div>
