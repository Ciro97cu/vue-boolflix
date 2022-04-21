<template>
  <main>
    <div class="container-sm p-5">
      <div v-if="arrayFilm.length > 0" class="row justify-content-center p-4">
        <h2 class="col-auto text-danger">FILM</h2>
      </div>
      <FilmList :arrayFilm="arrayFilm" />
      <div v-if="arraySerie.length > 0" class="row justify-content-center p-4">
        <h2 class="col-auto text-danger">SERIE TV</h2>
      </div>
      <SerieList :arraySerie="arraySerie" />
    </div>
  </main>
</template>

<script>
import FilmList from "./FilmList.vue";
import SerieList from "./SerieList.vue";

export default {
  name: "MainNetflix",
  components: {
    FilmList,
    SerieList,
  },
  props: {
    arrayFilm: Array,
    arraySerie: Array,
  },
};
</script>

<style lang="scss" scoped>
main {
  background-color: black;
  min-height: calc(100vh - 66px);
}
</style>