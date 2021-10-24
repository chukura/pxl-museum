<template>
  <section class="pt-24 pb-32 bg-white">
    <div class="px-8 mx-auto max-w-7xl lg:px-12 xl:px-16">
      <div class="flex flex-col lg:flex-row">Art piece data goes here</div>
      <div class="flex flex-col lg:flex-row">{{ artPieceData }}</div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  data() {
    return {
      loading: false,
      artPieceData: {},
      // url: process.env.VUE_APP_API,
      url: "http://localhost:7000/api/collection-object",
    };
  },
  //   computed: {},
  mounted() {
    this.getArtPieceData(this.$route.params.id.toString());
  },
  methods: {
    async getArtPieceData(objectId: string) {
      this.loading = true;
      try {
        if (
          this.$route.params.id.toString() ===
          this.$store.getters.getSelectedArtPiece["objectNumber"]
        ) {
          this.artPieceData = this.$store.getters.getSelectedArtPiece;
        } else {
          const response: any = await axios.get(this.url, {
            params: { id: objectId },
          });
          this.artPieceData = response.data["artObject"];
          this.$store.commit("setSelectedArtPiece", this.artPieceData);
        }
        this.loading = false;
      } catch (err) {
        this.loading = false;
        console.log(err);
      }
    },
  },
});
</script>
