<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <div class="wrapper_logo">
        <img
          class="w-100"
          src="../assets/img/boolflix.png"
          alt="netflix-logo"
        />
      </div>
      <div>
        <p class="d-inline-block text-white pe-3">Filtra per genere</p>
        <select
          name="genre"
          id="genre"
          @change="$emit('searchByGenre', genreName($event))"
        >
          <option :value="0">All</option>
          <option v-for="(genre, i) in arrayGenre" :key="i" :value="genre.id">
            {{ genre.name }}
          </option>
        </select>
      </div>
      <div class="d-flex">
        <input
          class="form-control me-2"
          type="text"
          placeholder="Cerca"
          v-model="userInput"
          @keyup.enter="search"
        />
        <button class="btn btn-outline-danger" @click="search">Cerca</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderNetflix",
  data() {
    return {
      userInput: "",
      arrayGenre: [],
    };
  },
  methods: {
    search: function () {
      this.$emit("search", this.userInput);
      this.userInput = "";
    },
    genreName: function (event) {
      return parseInt(event.target.value);
    },
  },
  created() {
    let params = {
      api_key: this.$api,
      language: "it-IT",
    };

    this.$axios
      .all([
        this.$axios.get(`https://api.themoviedb.org/3/genre/movie/list`, {
          params,
        }),

        this.$axios.get(`https://api.themoviedb.org/3/genre/tv/list`, {
          params,
        }),
      ])
      .then(
        this.$axios.spread((resMovie, resTv) => {
          let ids = new Set(resMovie.data.genres.map((d) => d.id));
          let merged = [
            ...resMovie.data.genres,
            ...resTv.data.genres.filter((d) => !ids.has(d.id)),
          ];
          this.arrayGenre = merged;
        })
      );
  },
};
</script>

<style lang="scss" scoped>
.wrapper_logo {
  width: 150px;
}

.form-control:focus {
  border-color: red;
  box-shadow: 0 0 0 0.25rem rgb(253 91 13 / 25%);
}
</style>