import { writable } from "svelte/store";

/**
 * @typedef {Object} ProductStore
 * @property {Array<Object>} products - The list of products.
 * @property {Array<string>} categories - The list of product categories.
 * @property {boolean} loading - Indicates if the store is currently loading data.
 * @property {string|null} error - The error message, if any.
 * @property {string} selectedCategory - The currently selected category for filtering.
 * @property {string} sortOrder - The current sort order.
 */

/**
 * Creates a store to manage product data, including fetching products and categories.
 *
 * @returns {Object} The product store with methods to fetch data and update state.
 */
function createProductStore() {
  const { subscribe, update } = writable(
    /** @type {ProductStore} */ ({
      products: [],
      categories: [],
      loading: false,
      error: null,
      selectedCategory: "",
      sortOrder: "",
    }),
  );

  return {
    subscribe,

    /**
     * Fetches the list of products from the API and updates the store.
     */
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

    /**
     * Fetches the list of product categories from the API and updates the store.
     */
    fetchCategories: async () => {
      update((store) => ({ ...store, loading: true, error: null }));
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/categories`,
        );
        if (!response.ok) throw new Error("Failed to fetch categories");
        const categories = await response.json();
        update((store) => ({ ...store, categories, loading: false }));
      } catch (error) {
        update((store) => ({ ...store, error: error.message, loading: false }));
      }
    },

    /**
     * Fetches a product by its ID from the API.
     *
     * @param {string} id - The ID of the product to fetch.
     * @returns {Promise<Object|null>} The fetched product or null if an error occurred.
     */
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

    /**
     * Sets the selected category for filtering products.
     *
     * @param {string} category - The category to set as selected.
     */
    setSelectedCategory: (category) => {
      update((store) => ({ ...store, selectedCategory: category }));
    },

    /**
     * Sets the sort order for products.
     *
     * @param {string} order - The sort order to set ('asc' or 'desc').
     */
    setSortOrder: (order) => {
      update((store) => ({ ...store, sortOrder: order }));
    },

    /**
     * Gets the filtered and sorted list of products based on the current store state.
     *
     * @param {ProductStore} store - The current state of the product store.
     * @returns {Array<Object>} The filtered and sorted list of products.
     */
    getFilteredAndSortedProducts: (store) => {
      let filteredProducts = store.selectedCategory
        ? store.products.filter(
            (product) => product.category === store.selectedCategory,
          )
        : store.products;

      if (store.sortOrder === "asc") {
        filteredProducts.sort((a, b) => a.price - b.price);
      } else if (store.sortOrder === "desc") {
        filteredProducts.sort((a, b) => b.price - a.price);
      }

      return filteredProducts;
    },
  };
}

/**
 * The product store instance.
 */
export const productsStore = createProductStore();

export const {
  fetchProducts,
  fetchCategories,
  fetchProductById,
  setSelectedCategory,
  setSortOrder,
  getFilteredAndSortedProducts,
} = productsStore;
