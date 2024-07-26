<script>
  import { Link } from "svelte-routing";

  export let product;

  const stars = Array(5).fill(0);
</script>

<Link to={`/product/${product.id}`} class="block">
  <div
    class="cursor-pointer flex flex-col h-full bg-white border border-slate-200 shadow shadow-slate-950/5 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
  >
    <img
      src={product.image}
      alt={product.title}
      class="w-full mt-4 h-44 object-contain"
    />
    <div class="p-4">
      <h2 class="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
        {product.title}
      </h2>
	  <div class="flex items-center mb-2">
        {#each stars as _, i}
          <svg
            class="w-5 h-5 {i < Math.round(product.rating.rate) ? 'text-yellow-400' : 'text-gray-300'}"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
        {/each}
      </div>
      <p class="text-xl font-bold text-[#415a77] mb-2">${product.price.toFixed(2)}</p>
	  <div
	  class="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-2 space-y-2 sm:space-y-0"
	>
	  <span
		class="px-2 py-1 bg-indigo-100 text-[#415a77] rounded-md text-xs font-medium"
	  >{product.category}</span>
	  <div class="flex items-center space-x-2">
		<button
		  class="p-1 rounded-full transition-colors duration-300"
		>
		  <svg
			class="h-6 w-6 hover:text-red-500"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		  >
			<path
			  stroke-linecap="round"
			  stroke-linejoin="round"
			  stroke-width="2"
			  d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
			/>
		  </svg>
		</button>
		<button
		  class="inline-flex items-center justify-center px-3 py-2 bg-[#354961] text-white text-sm font-medium rounded-md hover:bg-[#415a77] transition-colors duration-300"
		>
		  Add To Cart
		</button>
	  </div>
	</div>
    </div>
  </div>
</Link>
