<script>
  /**
   * @type {number}
   * @description The number of skeleton loaders to render.
   * @default 8
   */
  export let count = 8;
</script>

{#each Array(count) as _}
  <div
    class="animate-pulse bg-white border border-slate-200 shadow shadow-slate-950/5 rounded-2xl overflow-hidden"
  >
    <!-- Skeleton for product image -->
    <div class="h-48 bg-gray-400"></div>

    <!-- Skeleton for product details -->
    <div class="p-4">
      <div class="h-4 bg-gray-400 rounded w-3/4 mb-2"></div>
      <div class="h-4 bg-gray-400 rounded w-1/2 mb-2"></div>
      <div class="h-4 bg-gray-400 rounded w-1/4"></div>
    </div>

    <!-- Skeleton for price and action button -->
    <div class="p-4 flex justify-between items-center">
      <div class="h-6 bg-gray-400 rounded w-1/4"></div>
      <div class="h-8 bg-gray-400 rounded w-1/3"></div>
    </div>
  </div>
{/each}
