<template>
  <section>
    <div
      class="relative"
      style="background-size: cover"
      :style="{
        backgroundImage: 'url(' + require('@/assets/rembrandt.jpg') + ')',
      }"
    >
      <div
        class="
          absolute
          inset-0
          bg-gradient-to-b
          from-black
          to-transparent
          opacity-30
        "
      ></div>

      <div
        class="
          relative
          z-20
          px-4
          py-24
          mx-auto
          text-center text-white
          max-w-7xl
          lg:py-32
        "
      >
        <div class="flex flex-wrap text-white">
          <div
            class="
              relative
              w-full
              px-4
              mx-auto
              text-center
              xl:flex-grow-0 xl:flex-shrink-0
            "
          >
            <h1
              class="
                mt-0
                mb-2
                text-4xl
                font-bold
                text-white
                sm:text-5xl
                lg:text-7xl
              "
            >
              Search Collection
            </h1>
            <p class="mt-0 mb-4 text-base text-white sm:text-lg lg:text-xl">
              Discover over 700,000 art pieces from the PXL.MUSEUM Collection,
              curated by the Rijksmuseum.
            </p>
          </div>
        </div>
      </div>

      <Search placement="collection" />
    </div>
    <Results />
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Search from "@/components/Search.vue";
import Results from "@/components/Results.vue";

@Options({
  components: {
    Search,
    Results,
  },
})
export default class Collection extends Vue {}
</script>
