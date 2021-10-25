<template>
  <section class="pt-24 pb-32 bg-white">
    <div class="px-8 mx-auto max-w-7xl lg:px-12 xl:px-16">
      <div class="flex flex-col lg:flex-row">
        <!-- Left Content -->
        <div class="w-full lg:w-1/2 lg:pr-10">
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
                leading-tight
                text-left text-gray-900
                border-solid
                text-2xl
                sm:text-2xl
                md:text-3xl
                lg:text-4xl
              "
            >
              Search the entire
              <span
                class="
                  block
                  font-bold
                  text-left text-purple-700 text-3xl
                  sm:text-4xl
                  md:text-5xl
                  lg:text-5xl
                "
              >
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
              Discover over 700,000 art pieces from the PXL.MUSEUM Collection,
              curated by the Rijksmuseum.
            </p>
            <Search placement="home" />
          </div>
        </div>

        <!-- Right Image -->
        <div class="relative w-full mt-20 lg:w-1/2 lg:mt-0">
          <!--<img src="https://cdn.devdojo.com/images/december2020/dashboard-01.png" class="relative z-10 p-0 mt-10 transform shadow-2xl rounded-xl lg:scale-110">-->

          <div
            class="
              absolute
              top-0
              right-0
              w-full
              h-full
              mt-4
              -mr-5
              transform
              scale-125
              rotate-45
              overflow-hidden
            "
          >
            <!-- prettier-ignore -->
            <svg class="absolute top-0 w-full h-full transform fill-current lg:scale-x-150 text-purple-50" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path d="M43.5,-76.5C55.9,-68.2,65.2,-55.6,71.9,-42.1C78.5,-28.6,82.7,-14.3,81.3,-0.8C79.8,12.7,72.8,25.3,64.7,36.3C56.5,47.2,47.2,56.3,36.2,63.3C25.2,70.2,12.6,75,-1.1,76.9C-14.8,78.9,-29.7,78,-43.7,72.8C-57.7,67.6,-70.9,58.1,-79.3,45.2C-87.7,32.4,-91.2,16.2,-90.7,0.3C-90.3,-15.7,-85.9,-31.4,-76.4,-42.3C-66.9,-53.1,-52.3,-59.2,-38.7,-66.9C-25.1,-74.5,-12.6,-83.7,1.5,-86.3C15.6,-88.8,31.1,-84.8,43.5,-76.5Z" transform="translate(100 100)"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Search from "@/components/Search.vue"; // @ is an alias to /src

@Options({
  components: {
    Search,
  },
})
export default class Home extends Vue {}
</script>
