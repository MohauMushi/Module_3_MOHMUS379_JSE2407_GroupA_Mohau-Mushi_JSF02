<script>
  import ProductCard from "./ProductCard.svelte";

  /**
   * @typedef {Object} Product
   * @property {number} id - The unique identifier of the product
   * @property {string} image - URL of the product image
   * @property {string} title - The name of the product
   * @property {Object} rating - The rating information of the product
   * @property {number} rating.rate - The average rating of the product
   * @property {number} price - The price of the product
   * @property {string} category - The category of the product
   */

  /**
   * @type {Product[]}
   * @description An array of product objects to be displayed in the grid.
   */
  export let products = [];
</script>

<div
  class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
>
  {#each products as product (product.id)}
    <ProductCard {product} />
  {/each}
</div>
