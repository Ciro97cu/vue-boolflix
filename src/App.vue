<template>
  <div id="app">
    <HeaderNetflix @search="searchByUserInput" />
    <MainNetflix :arrayFilm="arrayFilm" :arraySerie="arraySerie" />
  </div>
</template>

<script>
import HeaderNetflix from "./components/HeaderNetflix.vue";
import MainNetflix from "./components/MainNetflix.vue";
import axios from "axios";
import api from "./api.json";

export default {
  name: "App",
  components: {
    HeaderNetflix,
    MainNetflix,
  },
  data() {
    return {
      arrayFilm: [],
      arraySerie: [],
      api: api.api,
    };
  },
  methods: {
    searchByUserInput: function (userValue) {
      this.axiosCallMovie(userValue);
      this.axiosCallSerie(userValue);
    },
    axiosCallMovie: function (userValue) {
      this.axiosCall(userValue, "movie");
    },
    axiosCallSerie: function (userValue) {
      this.axiosCall(userValue, "tv");
    },
    axiosCall: function (userValue, genre) {
      let params = {
        query: userValue,
        api_key: this.api,
        language: "it-IT",
      };
      axios
        .get("https://api.themoviedb.org/3/search/" + genre, { params })
        .then((response) => {
          console.log(response.data.results);
          if (genre === "movie") {
            this.arrayFilm = response.data.results;
          } else {
            this.arraySerie = response.data.results;
          }
        });
    },
  },
};
</script>

<style lang="scss">
@import "./assets/style/import.scss";
@import "./assets/style/resets.scss";
</style>
