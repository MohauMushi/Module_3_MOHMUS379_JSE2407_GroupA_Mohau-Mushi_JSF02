<script>
  import { onMount } from "svelte";
  import {
    productsStore,
    fetchProducts,
    fetchCategories,
  } from "../stores/ProductStore";
  import { filterSortStore } from "../stores/filterSortStore";
  import ProductGrid from "../components/ProductGrid.svelte";
  import LoadingSpinner from "../components/LoadingSpinner.svelte";
  import Filter from "../components/Filter.svelte";
  import Sort from "../components/Sort.svelte";

  let products = [];
  let loading = true;
  let error = null;
  let categories = [];
  let selectedCategory = "";
  let sortOrder = "";

  onMount(async () => {
    try {
      await fetchProducts();
      await fetchCategories();
      filterSortStore.subscribe((value) => {
        selectedCategory = value.selectedCategory;
        sortOrder = value.sortOrder;
      });
      setTimeout(() => {
        loading = false;
      }, 1200);
    } catch (e) {
      error = "An error occurred while fetching products.";
      loading = false;
    }
  });

  $: {
    products = $productsStore.products;
    categories = $productsStore.categories;
  }

  $: noProducts = !loading && products.length === 0;

  $: filteredAndSortedProducts = products
    .filter((product) =>
      selectedCategory ? product.category === selectedCategory : true,
    )
    .sort((a, b) => {
      if (sortOrder === "asc") return a.price - b.price;
      if (sortOrder === "desc") return b.price - a.price;
      return 0;
    });

  function handleFilterChange(event) {
    selectedCategory = event.detail.category;
    filterSortStore.update((value) => ({ ...value, selectedCategory }));
  }

  function handleSortChange(event) {
    sortOrder = event.detail.sortOrder;
    filterSortStore.update((value) => ({ ...value, sortOrder }));
  }
</script>

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
  {:else if noProducts}
    <p
      class="text-center text-red-500 font-extrabold p-4 flex items-center justify-center"
    >
      No products found.
    </p>
  {:else}
    <div class=" mb-6 flex flex-wrap items-center justify-between">
      <div class="w-full md:w-auto mb-4 md:mb-0">
        <Filter
          {categories}
          {selectedCategory}
          on:filterChange={handleFilterChange}
        />
      </div>
      <div class="w-full md:w-auto">
        <Sort {sortOrder} on:sortChange={handleSortChange} />
      </div>
    </div>

    <ProductGrid products={filteredAndSortedProducts} />
  {/if}
</div>
