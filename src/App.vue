<template>
  <div id="app">
    <HeaderNetflix @search="searchByUserInput" />
    <MainNetflix :arrayFilm="arrayFilm" />
  </div>
</template>

<script>
import HeaderNetflix from "./components/HeaderNetflix.vue";
import MainNetflix from "./components/MainNetflix.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    HeaderNetflix,
    MainNetflix,
  },
  data() {
    return {
      userInput: "",
      arrayFilm: [],
    };
  },
  methods: {
    searchByUserInput: function (value) {
      this.userInput = value;
      let params = {
        query: this.userInput,
        api_key: "9201fa49e3908287134d73020110ef7f",
        language: "it-IT",
      };
      axios
        .get("https://api.themoviedb.org/3/search/" + "movie", { params })
        .then((response) => {
          console.log(response.data.results);
          this.arrayFilm = response.data.results;
        });
    },
  },
};
</script>

<style lang="scss">
@import "./assets/style/import.scss";
@import "./assets/style/resets.scss";
</style>
