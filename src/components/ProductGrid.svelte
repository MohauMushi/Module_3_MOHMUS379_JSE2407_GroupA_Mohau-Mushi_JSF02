<script>
  import ProductCard from "./ProductCard.svelte";

  export let products = [];
</script>

<div
  class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
>
  {#each products as product (product.id)}
    <ProductCard {product} />
  {/each}
</div>
