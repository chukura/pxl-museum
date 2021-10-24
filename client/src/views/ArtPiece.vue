<template>
  <section class="pt-24 pb-32 bg-white">
    <div class="px-8 mx-auto max-w-7xl lg:px-12 xl:px-16">
      <div class="flex flex-col lg:flex-row">Art piece data goes here</div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      artPieceData: [],
    };
  },
  //   computed: {},
  mounted() {
    this.getArtPieceData("1");
  },
  methods: {
    getArtPieceData(id: string) {
      return true;
    },
  },
});
</script>
