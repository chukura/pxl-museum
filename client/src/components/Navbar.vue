<template>
  <div>
    <header class="relative py-2 bg-white">
      <div
        class="flex items-center justify-between h-20 px-8 mx-auto max-w-7xl"
      >
        <router-link
          to="/"
          class="
            relative
            z-10
            flex
            items-center
            w-auto
            text-xl
            font-black
            leading-none
            text-gray-900
            select-none
          "
        >
          pxl
          <span class="text-red-600">.</span>
          museum
        </router-link>

        <nav
          class="
            items-center
            justify-center
            space-x-5
            text-gray-200
            md:flex
            lg:space-x-8
            flex-grow
          "
          :class="open ? 'block md:w-full md:absolute md:t-4' : 'hidden'"
        >
          <router-link
            to="/"
            x-data="{ hover: false }"
            @mouseenter="hover = true"
            @mouseleave="hover = false"
            class="nav-link"
          >
            <span class="block">Home</span>
          </router-link>
          <router-link
            to="/collection"
            x-data="{ hover: false }"
            @mouseenter="hover = true"
            @mouseleave="hover = false"
            class="nav-link"
          >
            <span class="block">Collection</span>
          </router-link>
        </nav>

        <div class="hidden md:block">
          <router-link
            to="/collection"
            class="
              relative
              h-6
              group
              justify-end
              z-10
              px-8
              py-4
              leading-tight
              transition
              duration-150
              text-white
              bg-red-600
              hover:bg-red-700
            "
          >
            <span class="text-white">Search</span>
          </router-link>
        </div>

        <!-- Mobile Button -->
        <button
          class="flex items-center justify-center h-full text-black md:hidden"
          @click="open = !open"
        >
          <!-- prettier-ignore -->
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"></path></svg>
        </button>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  computed: {},
  data() {
    return {
      open: false,
    };
  },
  // mounted() {},
  // created() {},
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a.router-link-active {
  @apply text-black font-bold;
}
.nav-link {
  @apply relative inline-block px-1 text-base text-gray-700 font-medium leading-6 transition duration-150 hover:text-red-600;
}
</style>
