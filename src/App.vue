<template>
  <div id="app">
    <HeaderNetflix @search="searchByUserInput" @searchByGenre="handleGenre" />
    <MainNetflix
      :arrayFilm="filterBySelectMovie"
      :arraySerie="filterBySelectTv"
    />
  </div>
</template>

<script>
import HeaderNetflix from "./components/HeaderNetflix.vue";
import MainNetflix from "./components/MainNetflix.vue";

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
      userSelect: null,
    };
  },
  methods: {
    searchByUserInput: function (userValue) {
      this.axiosCall(userValue, "movie");
      this.axiosCall(userValue, "tv");
    },
    axiosCall: function (userValue, genre) {
      let params = {
        query: userValue,
        api_key: this.$api,
        language: "it-IT",
      };
      if (userValue !== "") {
        this.$axios
          .get("https://api.themoviedb.org/3/search/" + genre, { params })
          .then((response) => {
            if (genre === "movie") {
              this.arrayFilm = response.data.results;
            } else {
              this.arraySerie = response.data.results;
            }
          });
      }
    },
    handleGenre: function (value) {
      this.userSelect = value;
    },
  },
  computed: {
    filterBySelectMovie: function () {
      if (this.userSelect == null || this.userSelect == 0) {
        return this.arrayFilm;
      }
      return this.arrayFilm.filter((element) =>
        element.genre_ids.includes(this.userSelect)
      );
    },
    filterBySelectTv: function () {
      if (this.userSelect == null || this.userSelect == 0) {
        return this.arraySerie;
      }
      return this.arraySerie.filter((element) =>
        element.genre_ids.includes(this.userSelect)
      );
    },
  },
};
</script>

<style lang="scss">
@import "./assets/style/import.scss";
@import "./assets/style/resets.scss";

* {
  font-family: "Bebas Neue";
}

*::-webkit-scrollbar {
  width: 8px;
}

*::-webkit-scrollbar-track {
  background: black;
}

*::-webkit-scrollbar-thumb {
  background-color: lightgray;
  border-radius: 20px;
}
</style>
