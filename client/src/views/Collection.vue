<template>
  <section>
    <div
      class="relative"
      style="
        background-image: url('https://cdn.devdojo.com/images/february2021/directory-bg.jpg');
      "
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
              Discover over 10,000 art pieces from the PXL.MUSEUM Collection,
              curated by the Rijksmuseum.
            </p>
          </div>
        </div>
      </div>

      <Search placement="collection" />
    </div>
    <Results />
  </section>

  <!--<section class="pt-24 pb-32 bg-white">
    <div class="px-8 mx-auto max-w-7xl lg:px-12 xl:px-16">
      <div class="flex flex-col lg:flex-row">
        <div class="w-full">
          <div
            class="
              relative
              max-w-lg
              mx-auto
              leading-6
              text-center text-gray-700
              border-gray-200
              lg:text-left
            "
          >
            <h1
              class="
                m-0
                text-3xl
                font-bold
                leading-tight
                text-left text-gray-900
                border-solid
                sm:text-4xl
                md:text-5xl
              "
            >
              Search the entire
              <span class="block text-left text-purple-700">
                Art Collection
              </span>
            </h1>
            <p
              class="
                pr-5
                mx-0
                my-5
                text-base text-left text-gray-500
                lg:my-8
                xl:text-lg
              "
            >
              Discover over 10,000 art pieces from the PXL.MUSEUM Collection,
              curated by the Rijksmuseum.
            </p>
            <Search placement="home" />
          </div>
        </div>
      </div>
    </div>
    <Results />
  </section>-->
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
export default class Collection extends Vue {
  // component: {
  //   Search,
  // },
  //   data() {
  //     return {};
  //   },
  //   computed: {},
  //   mounted() {},
  //   methods: {},
}
</script>
