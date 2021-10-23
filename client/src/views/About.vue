<template>
  <div class="about">
    <h1>This is an about page</h1>

    <div class="card-body" v-bind:class="cardStyle">
      <div class="flex flex-col content-start">
        <p class="card-title">Collections</p>
        <p class="text-left text-gray-500">Subtitle</p>
      </div>
      <div class="ml-0 mt-4 flex flex-col content-start">
        <div class="flex flex-col lg:flex-row">
          <p>{{ collections }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";

export default {
  name: "About",
  component: {},
  data() {
    return {
      collections: [],
      // url: process.env.VUE_APP_API,
      url: "http://localhost:7000/api/collections",
    };
  },
  computed: {},
  mounted() {
    this.getCollections();
  },
  methods: {
    async getCollections() {
      try {
        const response = await axios.get(this.url);
        console.log("response", response);
        this.collections = response.data["artObjects"];
        console.log("collections", this.collections);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
