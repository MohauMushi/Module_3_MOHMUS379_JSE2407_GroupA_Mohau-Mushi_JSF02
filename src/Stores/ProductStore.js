import { writable } from "svelte/store";

function createProductStore() {
  const { subscribe, update } = writable({
    products: [],
    categories: [],
    loading: false,
    error: null,
  });

  return {
    subscribe,
    fetchProducts: async () => {
      update((store) => ({ ...store, loading: true, error: null }));
      try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        if (!response.ok) throw new Error("Failed to fetch products");
        const products = await response.json();
        update((store) => ({ ...store, products, loading: false }));
      } catch (error) {
        update((store) => ({ ...store, error: error.message, loading: false }));
      }
    },
    fetchCategories: async () => {
      update((store) => ({ ...store, loading: true, error: null }));
      try {
        const response = await fetch(`https://fakestoreapi.com/products/categories`);
        if (!response.ok) throw new Error("Failed to fetch categories");
        const categories = await response.json();
        update((store) => ({ ...store, categories, loading: false }));
      } catch (error) {
        update((store) => ({ ...store, error: error.message, loading: false }));
      }
    },
    fetchProductById: async (id) => {
      update((store) => ({ ...store, loading: true, error: null }));
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) throw new Error("Failed to fetch product");
        const product = await response.json();
        return product;
      } catch (error) {
        update((store) => ({ ...store, error: error.message, loading: false }));
        return null;
      } finally {
        update((store) => ({ ...store, loading: false }));
      }
    },
  };
}

export const productsStore = createProductStore();

export const { fetchProducts, fetchCategories, fetchProductById } =
  productsStore;
