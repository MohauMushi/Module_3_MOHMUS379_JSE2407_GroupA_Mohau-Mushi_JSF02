<script>
  import { Router } from "svelte-routing";
  import Header from "./components/Header.svelte";

  export let url = "";
</script>

<Router {url}>
  <div class="min-h-screen bg-gray-100">
    <Header />
  </div>
</Router>