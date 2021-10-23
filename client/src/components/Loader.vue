<template>
  <div
    class="
      bg-gray-100
      py-10
      w-full
      h-screen
      flex flex-col
      justify-center
      content-center
      absolute
      z-10
    "
  >
    <div>
      <img class="h-8 w-8 m-auto" src="../assets/puff.svg" alt="Loading" />
    </div>
    <p class="text-xl mt-4 mb-4 animate-pulse">Loading</p>
  </div>
</template>

<script>
export default {
  name: "Loader",
  components: {},
};
</script>
