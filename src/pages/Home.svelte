<script>
  import { onMount } from "svelte";
  import { productsStore, fetchProducts } from "../stores/productStore";
  import ProductGrid from "../components/ProductGrid.svelte";
  import LoadingSpinner from "../components/LoadingSpinner.svelte";

  let products = [];
  let loading = true;

  onMount(async () => {
    await fetchProducts();

    setTimeout(() => {
      loading = false;
    }, 1200);
  });

  $: products = $productsStore.products;
</script>

<div class="space-y-8">
  {#if loading}
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <LoadingSpinner count={8} />
    </div>
  {:else}
    <ProductGrid {products} />
  {/if}
</div>
