<script>
  import { Link } from "svelte-routing";

  /**
   * @type {boolean}
   * @description Controls the visibility of the mobile menu.
   */
  let isOpen = false;
</script>

<header class="sticky z-50 top-0">
  <nav class="bg-teal-700">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <!-- Logo and brand name -->
      <Link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img
          src="/public/accusoft-svgrepo-com.svg"
          class="h-8"
          alt="FluxStore Logo"
        />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap text-white"
        >
          FluxStore
        </span>
      </Link>

      <!-- Mobile menu button -->
      <button
        on:click={() => (isOpen = !isOpen)}
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="navbar-dropdown"
        aria-expanded={isOpen}
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      <!-- Navigation menu -->
      <div
        class="hidden w-full md:block md:w-auto"
        id="navbar-dropdown"
        class:hidden={!isOpen}
      >
        <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-teal-700 md:flex-row md:space-x-8 md:mt-0 md:border-0"
        >
          <!-- Wishlist link -->
          <li>
            <Link
              to="#wishlist"
              class="text-white hover:bg-teal-600 hover:text-white block px-3 py-1 rounded-md text-base font-medium md:m-0"
            >
              WishList
            </Link>
          </li>
          <!-- Cart icon (visible on larger screens) -->
          <li>
            <Link
              to="#cart"
              class="hidden lg:block md:block relative text-white px-2 py-1 hover:bg-teal-600 rounded-md"
            >
              <div class="absolute -top-2 -right-2">
                <p
                  class="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white"
                >
                  2
                </p>
              </div>
              <span class="sr-only">View cart</span>
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </Link>
          </li>
          <!-- Cart text link (visible on smaller screens) -->
          <li>
            <Link
              to="#cart"
              class="lg:hidden md:hidden block py-2 px-3 text-white rounded-md hover:bg-teal-600 md:hover:bg-transparent md:border-0 md:hover:text-teal-300 md:p-0"
            >
              Cart
            </Link>
          </li>
          <!-- Login icon -->
          <li>
            <Link
              to="#login"
              class="block py-2 px-1 text-white hover:bg-teal-600 rounded-md md:border-0 md:p-1.5"
            >
              <span class="sr-only">Login</span>
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
