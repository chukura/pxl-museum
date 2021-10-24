<template>
  <div class="">
    <div
      class="relative flex items-center max-w-md leading-6 text-center lg:mx-0"
      data-form-type="search"
      v-if="placement === 'home'"
    >
      <input
        type="text"
        class="
          w-full
          py-4
          pr-0
          m-0
          overflow-visible
          font-medium
          duration-300
          border-2 border-gray-200
          rounded-full
          outline-none
          sm:py-5 sm:pr-48
          cursor-text
          pl-7
          focus:outline-none
          focus-within:border-purple-700
          hover:border-gray-400
        "
        placeholder="Enter a search term"
        v-model="query"
        v-on:keyup.enter="searchCollection(query)"
      />
      <button
        class="absolute right-28 h-12 px-2 mr-3"
        v-on:click="query = ''"
        v-if="query.length > 0"
      >
        <!-- prettier-ignore -->
        <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
      <button
        class="
          absolute
          right-0
          h-12
          px-8
          mr-3
          text-white
          bg-purple-700
          rounded-full
          disabled:opacity-50
        "
        v-on:click="searchCollection(query)"
        :disabled="loading"
      >
        Search
        <!-- prettier-ignore -->
      </button>
    </div>
    <div
      class="relative z-30 h-48 px-10 bg-white lg:h-32"
      v-if="placement === 'collection'"
    >
      <form
        onsubmit="return false;"
        class="
          flex flex-col
          items-center
          h-auto
          max-w-lg
          p-6
          mx-auto
          space-y-3
          overflow-hidden
          transform
          -translate-y-12
          bg-white
          rounded-lg
          shadow-md
          lg:h-24 lg:max-w-6xl lg:flex-row lg:space-y-0 lg:space-x-3
        "
      >
        <div
          class="
            w-full
            h-12
            border-2 border-gray-200
            rounded-lg
            lg:border-0 lg:w-auto lg:flex-1
            relative
          "
        >
          <input
            type="text"
            class="
              w-full
              h-full
              px-4
              font-medium
              text-gray-700
              rounded-lg
              sm:text-lg
              focus:bg-gray-50 focus:outline-none
            "
            placeholder="Enter a search term..."
            v-model="query"
            v-on:keyup.enter="searchCollection(query)"
          />
          <button
            class="absolute right-0 h-12 px-2 mr-3"
            v-on:click="query = ''"
            v-if="query.length > 0"
          >
            <!-- prettier-ignore -->
            <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        <div class="w-0.5 bg-gray-100 h-10 lg:block hidden"></div>
        <div class="w-full h-full lg:w-auto">
          <button
            type="submit"
            class="
              inline-flex
              items-center
              justify-center
              w-full
              h-full
              px-4
              py-2
              text-base
              font-medium
              leading-6
              text-white
              whitespace-no-wrap
              bg-indigo-600
              border border-transparent
              rounded-md
              shadow-sm
              hover:bg-indigo-500
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-indigo-600
              lg:w-64
              disabled:opacity-50
            "
            v-on:click="searchCollection(query)"
            :disabled="loading"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "Search",
  props: {
    placement: String, // 'home', or 'collection'
  },
  computed: {},
  data() {
    return {
      loading: false,
      query: "",
      collectionSearch: [],
      // url: process.env.VUE_APP_API,
      url: "http://localhost:7000/api/collection-search",
    };
  },
  //   mounted() {},
  //   created() {},
  methods: {
    async searchCollection(query: string) {
      this.loading = true;
      try {
        const response: any = await axios.get(this.url, {
          params: { q: query },
        });
        this.collectionSearch = response.data["artObjects"];
        this.$store.commit("setCollectionSearch", this.collectionSearch);
        this.loading = false;

        if (this.placement === "nav") {
          this.$router.push("explore"); // route the user to a results page
        }
      } catch (err) {
        this.loading = false;
        console.log(err);
      }
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
