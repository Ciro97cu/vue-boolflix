<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <div class="wrapper_logo">
        <img class="w-100" src="../assets/img/Netflix.png" alt="netflix logo" />
      </div>

      <div class="d-flex">
        <input
          class="form-control me-2"
          type="text"
          placeholder="Search"
          v-model="userInput"
        />
        <button
          class="btn btn-outline-danger"
          @click="$emit('search', searchByInput())"
        >
          Search
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";

export default {
  name: "HeaderNetflix",
  data() {
    return {
      userInput: "",
      array: [],
    };
  },
  methods: {
    searchByInput: function () {
      let params = {
        query: this.userInput,
        api_key: "9201fa49e3908287134d73020110ef7f",
        language: "it-IT",
      };
      axios
        .get("https://api.themoviedb.org/3/search/" + "movie", { params })
        .then((response) => {
          console.log(response.data.results);
          this.array.push(response.data.results);
        });
      this.userInput = "";
      return this.array;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper_logo {
  width: 50px;
}
</style>