<script>
  import { onMount } from "svelte";
  import { Link } from "svelte-routing";
  import { fetchProductById } from "../stores/ProductsStore";
  import { filterSortStore } from "../stores/filterSortStore";
  import ProductDetailSkeleton from "../components/ProductDetailSkeleton.svelte";

  /**
   * The ID of the product to fetch.
   * @type {string}
   */
  export let id;

  /**
   * The product details fetched from the store.
   * @type {Object|null}
   */
  let product = null;

  /**
   * Indicates whether the product details are still loading.
   * @type {boolean}
   */
  let loading = true;

  /**
   * The filter and sort settings from the store.
   * @type {Object}
   */
  let filterSortSettings;

  /**
   * Fetches the product details when the component is mounted.
   * Subscribes to the filterSortStore to get the current filter and sort settings.
   */
  onMount(async () => {
    product = await fetchProductById(id);
    loading = false;
    filterSortStore.subscribe((value) => {
      filterSortSettings = value;
    });
  });

  /**
   * Adds the current product to the cart.
   */
  function addToCart() {
    //   console.log("Added to cart:", product.title);
  }
</script>

<div class="bg-gray-100 flex flex-col">
  <div class="">
    <Link
      to="/"
      class="inline-block bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
    >
      ← Back to Products
    </Link>
  </div>

  <div class="flex-grow flex justify-center items-start p-4 overflow-auto">
    <div class="w-full max-w-4xl">
      <ProductDetailSkeleton show={loading} />
      {#if !loading && product}
        <div class="bg-white rounded-lg shadow-md p-6">
          <div class="flex flex-col md:flex-row">
            <div class="md:w-1/2 flex items-center justify-center mb-4 md:mb-0">
              <img
                src={product.image}
                alt={product.title}
                class="max-w-full h-64 max-h-96 object-contain"
              />
            </div>
            <div class="md:w-1/2 md:pl-6">
              <h2 class="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3">
                {product.title}
              </h2>
              <div class="flex items-center mb-2">
                <svg
                  class="w-5 h-5 text-yellow-400 mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <span
                  >{product.rating.rate} ({product.rating.count} reviews)</span
                >
              </div>
              <p
                class="text-gray-500 px-2 py-1 bg-indigo-100 rounded-md text-xs font-medium mb-2 inline-block"
              >
                {product.category}
              </p>
              <p class="text-black font-bold mb-2 text-xl">
                ${product.price.toFixed(2)}
              </p>
              <button
                on:click={addToCart}
                class="inline-flex items-center justify-center px-3 py-2 mt-2 bg-[#354961] text-white text-sm font-medium rounded-md hover:bg-[#415a77] transition-colors duration-300"
              >
                Add To Cart
              </button>
              <h3 class="text-black font-semibold mt-4 mb-2">Description</h3>
              <p class="text-gray-600">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      {:else if !loading}
        <p
          class="text-center text-red-500 font-extrabold p-4 flex items-center justify-center"
        >
          Oops! It looks like the product you're looking for isn't available..
        </p>
      {/if}
    </div>
  </div>
</div>
