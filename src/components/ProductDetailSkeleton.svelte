<script>
	export let show = false;
  </script>
  
  {#if show}
	<div class="flex flex-col md:flex-row animate-pulse">
	  <div class="md:w-1/2 mb-4 md:mb-0 md:mr-4">
		<div class="bg-gray-300 h-64 w-full rounded"></div>
	  </div>
	  <div class="md:w-1/2">
		<div class="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
		<div class="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
		<div class="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
		<div class="h-6 bg-gray-300 rounded w-1/4 mb-4"></div>
		<div class="h-10 bg-gray-300 rounded w-1/3 mb-6"></div>
		<div class="h-4 bg-gray-300 rounded w-full mb-2"></div>
		<div class="h-4 bg-gray-300 rounded w-full mb-2"></div>
		<div class="h-4 bg-gray-300 rounded w-3/4"></div>
	  </div>
	</div>
  {/if}