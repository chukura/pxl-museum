<template>
  <div
    class="
      bg-gray-100
      py-10
      h-screen
      flex flex-col
      justify-center
      content-center
    "
  >
    <h1 class="text-8xl text-gray-900 mb-4">404</h1>
    <p class="text-xl mb-4">I'm sorry, you're lost!</p>
    <router-link
      to="/"
      class="
        flex-row
        whitespace-nowrap
        inline-flex
        items-center
        justify-center
        text-base text-right
        font-medium
        text-gray-500
        hover:text-tertiary-green
      "
    >
      <!-- prettier-ignore -->
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
      </svg>
      Back home
    </router-link>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
  components: {},
};
</script>
