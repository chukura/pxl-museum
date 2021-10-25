<template>
  <div>
    <header class="relative py-2 bg-yellow-400">
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
          <span class="text-indigo-600">.</span>
          museum
        </router-link>

        <nav
          class="
            items-center
            justify-center
            hidden
            space-x-5
            text-gray-200
            md:flex
            lg:space-x-8
          "
        >
          <router-link
            to="/"
            x-data="{ hover: false }"
            @mouseenter="hover = true"
            @mouseleave="hover = false"
            class="
              relative
              inline-block
              px-1
              text-base
              font-medium
              leading-6
              text-gray-700
              transition
              duration-150
              ease
              hover:text-white
            "
          >
            <span class="block">Home</span>
            <span
              class="
                absolute
                bottom-0
                left-0
                inline-block
                w-full
                h-2
                -mb-2
                overflow-hidden
              "
            >
              <span
                x-show="!hover"
                class="
                  absolute
                  inset-0
                  inline-block
                  w-full
                  h-full
                  transform
                  translate-x-0
                  bg-yellow-400
                "
                x-transition:enter="transition ease-out duration-300"
                x-transition:enter-start="-translate-x-full"
                x-transition:enter-end="translate-x-0"
                x-transition:leave="transition ease-out duration-300"
                x-transition:leave-start="translate-x-0"
                x-transition:leave-end="translate-x-full"
              ></span>
              <!-- prettier-ignore -->
              <svg class="w-auto h-full text-gray-900 fill-current" viewBox="0 0 84 6" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill-rule="evenodd"><g transform="translate(-8)" fill-rule="nonzero"><path d="M90.3.9c-1.8 0-2.8.7-3.6 1.4-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.9 1-1.2 1.5.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9.6 0 1-.4 1-1s-.5-1-1-1z"></path></g></g></svg>
            </span>
          </router-link>
          <router-link
            to="/collection"
            x-data="{ hover: false }"
            @mouseenter="hover = true"
            @mouseleave="hover = false"
            class="
              relative
              inline-block
              px-1
              text-base text-gray-700
              font-medium
              leading-6
              transition
              duration-150
              ease
              hover:text-white
            "
          >
            <span class="block">Explore</span>
            <span
              class="
                absolute
                bottom-0
                left-0
                inline-block
                w-full
                h-2
                -mb-2
                overflow-hidden
              "
            >
              <span
                x-show="!hover"
                class="
                  absolute
                  inset-0
                  inline-block
                  w-full
                  h-full
                  transform
                  translate-x-0
                  bg-yellow-400
                "
                x-transition:enter="transition ease-out duration-300"
                x-transition:enter-start="-translate-x-full"
                x-transition:enter-end="translate-x-0"
                x-transition:leave="transition ease-out duration-300"
                x-transition:leave-start="translate-x-0"
                x-transition:leave-end="translate-x-full"
              ></span>
              <!-- prettier-ignore -->
              <svg class="w-auto h-full text-gray-900 fill-current" viewBox="0 0 84 6" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill-rule="evenodd"><g transform="translate(-8)" fill-rule="nonzero"><path d="M90.3.9c-1.8 0-2.8.7-3.6 1.4-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.9 1-1.2 1.5.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9.6 0 1-.4 1-1s-.5-1-1-1z"></path></g></g></svg>
            </span>
          </router-link>
          <!--<div class="w-0 h-5 border border-r border-yellow-500 opacity-25"></div>-->
        </nav>

        <div>
          <router-link to="/collection" class="relative h-6 group justify-end">
            <span
              class="
                relative
                z-10
                px-5
                py-2
                font-bold
                leading-tight
                text-black
                bg-white
                border-4 border-gray-900
                rounded-lg
                group-hover:bg-yellow-100
              "
            >
              Search
            </span>
            <span
              class="
                absolute
                top-0
                right-0
                w-full
                h-10
                -mr-1
                bg-black
                rounded-lg
              "
            ></span>
          </router-link>
        </div>

        <!-- Mobile Button -->
        <div
          class="flex items-center justify-center h-full text-black md:hidden"
        >
          <!-- prettier-ignore -->
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"></path></svg>
        </div>
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
  @apply text-gray-900;
}
.nav-link {
  @apply block text-left text-base font-medium text-gray-500 hover:text-gray-900 mt-2 md:mb-0;
}
</style>
