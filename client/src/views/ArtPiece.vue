<template>
  <section class="pt-0 pb-32 bg-white">
    <div class="px-8 pb-10 mx-auto max-w-7xl lg:px-12 xl:px-16">
      <div class="flex flex-col lg:flex-row h-full">
        <div
          class="
            w-full
            lg:w-1/2 lg:pr-10
            flex flex-col
            justify-end
            align-bottom
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
              align-bottom
              pt-8
            "
          >
            {{ artPieceData.title }}
          </h1>
        </div>
        <div class="w-full mt-20 lg:w-1/2 lg:mt-0">
          <img
            v-if="artPieceData.webImage"
            v-bind:src="artPieceData.webImage.url"
            alt="{{ artPieceData.scLabelLine }}"
          />
          <div
            v-else
            class="
              bg-gray-100
              opacity-50
              w-full
              min-h-full
              relative
              flex flex-col
              justify-center
            "
          >
            <p class="text-gray-300 my-40 w-full">Image not available.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="px-8 mx-auto max-w-7xl lg:px-12 xl:px-16">
      <div class="bg-white shadow overflow-hidden text-left">
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            {{ artPieceData.principalMaker }}
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            {{ artPieceData.scLabelLine }}
          </p>
        </div>
        <div class="border-t border-gray-200">
          <dl>
            <div
              class="
                bg-gray-50
                px-4
                py-5
                sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
              "
            >
              <dt class="text-sm font-medium text-gray-500">
                Principal artist
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{ artPieceData.principalMaker }}
              </dd>
            </div>
            <div
              class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500">Decription</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{ artPieceData.description }}
              </dd>
            </div>
            <div
              class="
                bg-gray-50
                px-4
                py-5
                sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
              "
            >
              <dt class="text-sm font-medium text-gray-500">Copyright</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{ artPieceData.copyrightHolder }}
              </dd>
            </div>
            <div
              class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500">Dimensions</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{ artPieceData.subTitle }}
              </dd>
            </div>
            <div
              class="
                bg-gray-50
                px-4
                py-5
                sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
              "
            >
              <dt class="text-sm font-medium text-gray-500">Medium</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{ artPieceData.physicalMedium }}
              </dd>
            </div>
            <div
              class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500">Materials</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span
                  v-for="(material, key) in artPieceData.materials"
                  :key="key"
                >
                  {{ material }}
                  <!-- prettier-ignore -->
                  <span v-if="key+1 != artPieceData.materials.length">, </span>
                </span>
              </dd>
            </div>
            <div
              class="
                bg-gray-50
                px-4
                py-5
                sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
              "
            >
              <dt class="text-sm font-medium text-gray-500">Id</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{ artPieceData.objectNumber }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import Piece from "@/interfaces/Piece";

export default defineComponent({
  data() {
    return {
      loading: false,
      artPieceData: {} as Piece,
      // url: process.env.VUE_APP_API,
      url: "http://localhost:7000/api/collection-object",
    };
  },
  //   computed: {
  //     artPieceImg() {
  //       return this.artPieceData.webImage.url;
  //     },
  //   },
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
