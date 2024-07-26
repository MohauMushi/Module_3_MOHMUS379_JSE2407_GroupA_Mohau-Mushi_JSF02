<script>
  import { onMount } from "svelte";
  import { productsStore, fetchProducts } from "../stores/productStore";
  import ProductGrid from "../components/ProductGrid.svelte";

  let products = [];

  onMount(async () => {
    await fetchProducts();
  });

  $: {
    products = $productsStore.products;
  }
</script>

<div class="space-y-8">
  <ProductGrid {products} />
</div>
