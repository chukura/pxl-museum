import { createStore } from "vuex";

export default createStore({
  state: {
    collection: [],
    collectionSearch: [],
    selectedArtPiece: [],
  },
  getters: {
    getCollection: (state) => {
      return state.collection;
    },
    getCollectionSearch: (state) => {
      return state.collectionSearch;
    },
    getSelectedArtPiece: (state) => {
      return state.selectedArtPiece;
    },
  },
  mutations: {
    setCollection: (state, data) => {
      state.collection = data;
    },
    setCollectionSearch: (state, data) => {
      state.collectionSearch = data;
    },
    setSelectedArtPiece: (state, data) => {
      state.selectedArtPiece = data;
    },
  },
  actions: {
    setCollection: (context) => {
      context.commit("setCollection");
    },
    setCollectionSearch: (context) => {
      context.commit("setCollectionSearch");
    },
    setSelectedArtPiece: (context) => {
      context.commit("setSelectedArtPiece");
    },
  },
  modules: {},
});
