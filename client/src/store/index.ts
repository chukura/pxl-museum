import { createStore } from "vuex";

export default createStore({
  state: {
    collection: [],
    collectionSearch: [],
  },
  getters: {
    getCollection: (state) => {
      return state.collection;
    },
    getCollectionSearch: (state) => {
      return state.collectionSearch;
    },
  },
  mutations: {
    setCollection: (state, data) => {
      state.collection = data;
    },
    setCollectionSearch: (state, data) => {
      state.collectionSearch = data;
    },
  },
  actions: {
    setCollection: (context) => {
      context.commit("setCollection");
    },
    setCollectionSearch: (context) => {
      context.commit("setCollectionSearch");
    },
  },
  modules: {},
});
