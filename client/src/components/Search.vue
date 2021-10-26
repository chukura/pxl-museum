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
          outline-none
          sm:py-5 sm:pr-48
          cursor-text
          pl-7
          focus:outline-none
          focus-within:border-red-700
          hover:border-gray-400
        "
        placeholder="Enter a search term"
        v-model="query"
        v-on:keyup.enter="searchCollection(false)"
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
          bg-red-600
          disabled:opacity-50
        "
        v-on:click="searchCollection(false)"
        :disabled="loading"
      >
        Search
        <!-- prettier-ignore -->
      </button>
    </div>
    <div
      class="relative z-30 px-10 bg-white divide-y divide-gray-50"
      v-if="placement === 'collection'"
    >
      <div
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
          -translate-y-24
          bg-white
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
              sm:text-lg
              focus:bg-gray-50 focus:outline-none
            "
            placeholder="Enter a search term..."
            v-model="query"
            v-on:keyup.enter="searchCollection(false)"
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
              bg-red-600
              border border-transparent
              shadow-sm
              hover:bg-red-700
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-red-600
              lg:w-64
              disabled:opacity-50
            "
            v-on:click="searchCollection(false)"
            :disabled="loading"
          >
            Search
          </button>
        </div>
      </div>
      <div
        class="
          flex flex-col
          items-center
          h-auto
          max-w-lg
          p-6
          pt-0
          mx-auto
          space-y-3
          overflow-hidden
          transform
          -translate-y-24
          bg-white
          shadow-md
          lg:h-24 lg:max-w-6xl lg:flex-row lg:space-y-0 lg:space-x-3
          justify-between
        "
      >
        <div class="flex flex-col md:flex-row">
          <span class="w-full text-gray-400">Sort by:</span>
          <select
            class="
              h-full
              px-6
              font-small
              text-gray-700
              sm:text-lg
              focus:outline-none
              flex-auto
            "
            v-model="sort"
          >
            <option class="w-4" value="">Select an option</option>
            <option
              class="w-4"
              v-for="(term, key) in sortTerms"
              :key="key"
              v-on:click="clearResults()"
              :value="term.value"
            >
              {{ term.label }}
            </option>
          </select>
        </div>
        <button
          v-on:click="clearResults()"
          class="
            inline-flex
            items-center
            justify-end
            w-full
            h-full
            px-4
            py-2
            text-base
            font-small
            leading-6
            text-gray-600
            whitespace-no-wrap
            bg-white
            border border-transparent
            hover:text-gray-400
            lg:w-64
          "
        >
          <!-- prettier-ignore -->
          <svg class="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          Clear
        </button>
      </div>
    </div>
    <div
      class="
        w-screen
        absolute
        z-50
        flex flex-row
        align-center
        max-w-lg
        p-6
        pt-0
        space-y-3
        overflow-hidden
        transform
        -translate-y-20
        translate-x-28
        justify-start
      "
      v-if="totalPieces > 0"
    >
      <div class="max-w-5xl px-10 py-10 mx-auto xl:px-0">
        <span>Showing {{ currentTotal }} of {{ totalPieces }}</span>
      </div>
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
  computed: {
    currentTotal() {
      return this.searchResults.length;
    },
  },
  data() {
    return {
      loading: false,
      loadingInfinite: false,
      currentQuery: "",
      query: "",
      sort: "",
      pageNumber: 1, // must be >= 1
      piecesPerPage: 15, // must remain unchanged
      totalPieces: 0,
      searchResults: [],
      sortTerms: [
        { label: "Relevance", value: "relevance" },
        { label: "Type of artwork", value: "objecttype" },
        { label: "Oldest to newst", value: "chronologic" },
        { label: "Newest to oldest", value: "achronologic" },
        { label: "Artist A-z", value: "artist" },
        { label: "Artist Z-a", value: "artistdesc" },
      ],
      url: "http://localhost:7000/api/collection-search",
    };
  },
  mounted() {
    this.scroll();
  },
  methods: {
    async searchCollection(shouldAppend: boolean) {
      this.loading = true;
      this.currentQuery = this.query;
      try {
        const response: any = await axios.get(this.url, {
          params: {
            p: this.pageNumber,
            ps: this.piecesPerPage,
            q: this.query,
            s: this.sort,
          },
        });
        this.totalPieces = response.data["count"];
        if (shouldAppend) {
          this.searchResults = this.searchResults.concat(
            response.data["artObjects"],
          );
        } else {
          this.searchResults = response.data["artObjects"];
        }
        this.$store.commit("setSearchResults", this.searchResults);
        this.loading = false;
        this.loadingInfinite = false;
        this.$store.commit("setLoadingInfinite", this.loadingInfinite);

        // If user is actioning from the homepage
        if (this.placement === "home") {
          this.$router.push("collection");
        }
      } catch (err) {
        this.loading = false;
        this.loadingInfinite = false;
        this.$store.commit("setLoadingInfinite", this.loadingInfinite);
        console.log(err);
      }
    },
    setSortValue(value: string) {
      this.sort = value;
    },
    loadResults() {
      if (this.searchResults.length < this.totalPieces) {
        this.pageNumber++;
        this.loadingInfinite = true;
        this.$store.commit("setLoadingInfinite", this.loadingInfinite);
        this.searchCollection(true);
      }
    },
    clearResults() {
      this.query = "";
      this.sort = "";
      this.totalPieces = 0;
      this.searchResults = [];
      this.$store.commit("setSearchResults", this.searchResults);
    },
    scroll() {
      window.onscroll = () => {
        const bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          this.loadResults();
        }
      };
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
