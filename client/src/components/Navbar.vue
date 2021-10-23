<template>
  <header
    class="
      bg-wite
      md:flex
      justify-between
      items-center
      md:justify-start md:space-x-10
      py-6
      px-6
      md:px-10
    "
  >
    <div class="flex justify-between">
      <div>
        <router-link to="/">
          <span class="sr-only">SITE</span>
          <!--<img
            class="h-8 w-auto sm:h-10 md:hidden"
            src="../assets/canary_emblem.png"
            alt="Canary Console"
          />
          <img
            class="h-8 w-auto sm:h-8 hidden md:block"
            src="../assets/canary_logo@2x.png"
            alt="Canary Console"
          />-->
          SITE
        </router-link>
      </div>
      <div class="md:hidden">
        <button
          @click="open = !open"
          type="button"
          class="
            bg-white
            rounded-md
            p-2
            inline-flex
            items-center
            justify-center
            text-gray-400
            hover:text-gray-500 hover:bg-gray-100
            focus:outline-none
            focus:ring-2
            focus:ring-inset
            focus:ring-indigo-500
          "
        >
          <!-- prettier-ignore -->
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path v-if="open" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
            <path v-if="!open" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
          </svg>
        </button>
      </div>
    </div>
    <nav
      :class="open ? 'block' : 'hidden'"
      class="md:space-x-10 md:flex flex-grow"
    >
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/collections" class="nav-link">Collections</router-link>
    </nav>
    <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
      <a
        href="https://docs.google.com/document/d/1O-DzGiNAxQXXMK21cq7wKmuwESz0z35QfObXIzvvDxQ/preview#"
        target="_blank"
        class=""
      >
        <!-- prettier-ignore -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span class="hidden">About</span>
      </a>
    </div>
  </header>
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
  @apply text-gray-900;
}
.nav-link {
  @apply block text-left text-base font-medium text-gray-500 hover:text-gray-900 mt-2 md:mb-0;
}
</style>
