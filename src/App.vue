<template>
  <div id="app">
    <HeaderNetflix @search="searchByUserInput" />
    <MainNetflix />
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
    };
  },
  methods: {
    searchByUserInput: function (value) {
      console.log(value);
      // this.arrayFilm = value;
      // console.log(this.arrayFilm);
    },
  },
};
</script>

<style lang="scss">
@import "./assets/style/import.scss";
</style>
