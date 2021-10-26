<template>
  <section class="w-full bg-white transform -translate-y-10">
    <div
      v-if="collectionSearch.length > 0"
      class="max-w-5xl px-10 py-10 mx-auto xl:px-0"
    >
      <ul class="flex flex-wrap -mx-2 overflow-hidden">
        <li
          class="w-full px-2 my-2 overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3"
          v-for="artpiece in collectionSearch"
          :key="artpiece.objectNumber"
        >
          <router-link :to="{ path: '/collection/' + artpiece.objectNumber }">
            <div
              class="
                relative
                flex
                items-end
                justify-start
                overflow-hidden
                bg-gray-300
                group
                h-96
              "
            >
              <img
                v-bind:src="artpiece.webImage.url"
                class="
                  absolute
                  object-cover object-center
                  w-full
                  h-full
                  transition
                  duration-300
                  ease-out
                  transform
                  scale-100
                  group-hover:scale-105
                "
              />
              <div
                class="
                  absolute
                  z-10
                  w-full
                  h-full
                  bg-gradient-to-b
                  from-transparent
                  to-black
                  opacity-60
                "
              ></div>
              <div class="relative z-20 p-5 text-left">
                <!-- <span
                  class="
                    relative
                    inline-block
                    px-3
                    py-1
                    -ml-1
                    text-xs
                    tracking-wide
                    text-white
                    uppercase
                  "
                >
                  <span
                    class="absolute inset-0 transform -skew-x-6 bg-yellow-500"
                  ></span>
                  <span class="relative">Tag</span>
                </span> -->
                <h2 class="my-2 font-serif text-xl font-semibold text-white">
                  {{ artpiece.title }}
                </h2>
                <span class="inline-block font-sans text-xs text-white">
                  {{ artpiece.principalOrFirstMaker }}
                </span>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div v-else class="max-w-5xl px-10 py-20 mx-auto xl:px-0">
      <p class="text-2xl">
        No results to display. Try searching for an art piece.
      </p>
    </div>
    <div v-if="loadingInfinite" class="py-8">
      <img class="h-10 w-10 m-auto" src="../assets/puff.svg" alt="Loading" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Results",
  props: {},
  computed: {
    collectionSearch() {
      return this.$store.getters.getSearchResults;
    },
    loadingInfinite() {
      return this.$store.getters.getLoadingInfinite;
    },
  },
  data() {
    return {
      loading: false,
    };
  },
  //   mounted() {},
  //   created() {},
  //   methods: {},
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
