<script>
  import { Router, Route } from "svelte-routing";
  import Home from "./pages/Home.svelte";
  import Header from "./components/Header.svelte";

  export let url = "";
</script>

<Router {url}>
  <div class="min-h-screen bg-gray-100">
    <Header />
    <main class="container mx-auto px-4 py-8">
      <Route path="/" component={Home} />
    </main>
  </div>
</Router>
