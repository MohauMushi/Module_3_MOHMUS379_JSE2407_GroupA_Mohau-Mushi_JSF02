<script>
  import { onMount } from "svelte";
  import { productsStore, fetchProducts } from "../stores/productStore";
  import ProductGrid from "../components/ProductGrid.svelte";
  import LoadingSpinner from "../components/LoadingSpinner.svelte";

  let products = [];
  let loading = true;
  let error = null;

  onMount(async () => {
    try {
      await fetchProducts();
      setTimeout(() => {
        loading = false;
      }, 1200);
    } catch (e) {
      error = "An error occurred while fetching products.";
      loading = false;
    }
  });

  $: products = $productsStore.products;
  $: noProducts = !loading && products.length === 0;
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
    <ProductGrid {products} />
  {/if}
</div>
