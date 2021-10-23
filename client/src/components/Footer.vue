<template>
  <div class="w-full bg-white py-6 px-6">
    <div class="flex flex-col content-center justify-center">
      <div class="flex flex-row content-center justify-center mb-4">
        <!--<a
          class="text-gray-500 hover:text-secondary-green mr-6"
          href="https://blog.thinkst.com/"
        >
          Blog
        </a>-->
        <a class="text-gray-500 hover:text-secondary-green mr-6" href="#">
          FAQ
        </a>
        <a class="text-gray-500 hover:text-secondary-green mr-6" href="#">
          Resources
        </a>
        <a class="text-gray-500 hover:text-secondary-green" href="#">
          Privacy Policy
        </a>
      </div>
      <div
        class="flex flex-col md:flex-row content-center justify-center text-sm"
      >
        <span class="text-gray-500 text-sm">© {{ year }}, Built with</span>
        <span class="flex justify-center content-center">
          <!-- prettier-ignore -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary-red mx-2 animate-pulse" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
          </svg>
        </span>
        <span class="text-gray-500 text-sm">
          by Thabang Chukura for PXL.WIDGETS
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { version } from "../../package";
export default {
  name: "Footer",
  computed: {},
  data() {
    return {
      appVersion: version,
      year: "",
    };
  },
  // mounted() {},
  created() {
    let current = new Date();
    this.year = current.getFullYear();
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
