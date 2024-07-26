<script>
  import { Link } from "svelte-routing";

  export let product;
</script>

<Link to={`/product/${product.id}`} class="block">
  <div
    class="cursor-pointer flex flex-col h-full bg-white border border-slate-200 shadow shadow-slate-950/5 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
  >
    <img
      src={product.image}
      alt={product.title}
      class="w-full h-48 object-contain"
    />
    <div class="p-4">
      <h2 class="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
        {product.title}
      </h2>
      <p class="text-indigo-600 font-bold">${product.price.toFixed(2)}</p>
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
