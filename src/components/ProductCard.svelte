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
      <p class="text-gray-600 mb-2 text-sm">{product.category}</p>
      <p class="text-indigo-600 font-bold">${product.price.toFixed(2)}</p>
    </div>
  </div>
</Link>
