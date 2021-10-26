import { createStore } from "vuex";

export default createStore({
  state: {
    collection: [],
    searchResults: [],
    selectedArtPiece: [],
    loadingInfinite: false,
  },
  getters: {
    getCollection: (state) => {
      return state.collection;
    },
    getSearchResults: (state) => {
      return state.searchResults;
    },
    getSelectedArtPiece: (state) => {
      return state.selectedArtPiece;
    },
    getLoadingInfinite: (state) => {
      return state.loadingInfinite;
    },
  },
  mutations: {
    setCollection: (state, data) => {
      state.collection = data;
    },
    setSearchResults: (state, data) => {
      state.searchResults = data;
    },
    setSelectedArtPiece: (state, data) => {
      state.selectedArtPiece = data;
    },
    setLoadingInfinite: (state, data) => {
      state.loadingInfinite = data;
    },
  },
  actions: {
    setCollection: (context) => {
      context.commit("setCollection");
    },
    setSearchResults: (context) => {
      context.commit("setSearchResults");
    },
    setSelectedArtPiece: (context) => {
      context.commit("setSelectedArtPiece");
    },
    setLoadingInfinite: (context) => {
      context.commit("setLoadingInfinite");
    },
  },
  modules: {},
});
